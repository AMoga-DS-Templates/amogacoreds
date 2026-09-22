'use client';

// src/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
var clientSingleton = null;
var cachedChatUrl = null;
var cachedChatKey = null;
function sanitizeSupabaseUrl(url) {
  if (!url) return "";
  let cleaned = url.trim();
  if (!cleaned.startsWith("http://") && !cleaned.startsWith("https://")) {
    cleaned = `https://${cleaned}`;
  }
  cleaned = cleaned.replace(/\/rest\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/auth\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/storage\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/+$/, "");
  return cleaned;
}
function createClient() {
  const envUrl = sanitizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL || "");
  const envKey = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "").trim();
  if (typeof window === "undefined") {
    return createBrowserClient(envUrl, envKey);
  }
  try {
    const raw = localStorage.getItem("email-settings-workspace");
    if (raw) {
      const parsed = JSON.parse(raw);
      const chatAccounts = parsed?.state?.config?.chatAccounts;
      const activeAccount = Array.isArray(chatAccounts) ? chatAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl && acc.supabaseAnonKey) : null;
      if (activeAccount) {
        const cleanUrl = sanitizeSupabaseUrl(activeAccount.supabaseUrl);
        const cleanKey = activeAccount.supabaseAnonKey.trim();
        if (!clientSingleton || cachedChatUrl !== cleanUrl || cachedChatKey !== cleanKey) {
          cachedChatUrl = cleanUrl;
          cachedChatKey = cleanKey;
          clientSingleton = createBrowserClient(cleanUrl, cleanKey);
        }
        return clientSingleton;
      }
    }
  } catch (e) {
    console.error("Failed to read custom chat Supabase settings from localStorage:", e);
  }
  if (!clientSingleton || cachedChatUrl !== envUrl || cachedChatKey !== envKey) {
    cachedChatUrl = envUrl;
    cachedChatKey = envKey;
    clientSingleton = createBrowserClient(envUrl, envKey);
  }
  return clientSingleton;
}

// src/stores/auth-store.ts
import { create } from "zustand";

// src/lib/cookies.ts
var DEFAULT_MAX_AGE = 60 * 60 * 24 * 7;
function getCookie(name) {
  if (typeof document === "undefined") return void 0;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    return cookieValue;
  }
  return void 0;
}
function setCookie(name, value, maxAge = DEFAULT_MAX_AGE) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}
function removeCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

// src/stores/auth-store.ts
var ACCESS_TOKEN = "thisisjustarandomstring";
var USER_DATA = "auth_user_data";
var useAuthStore = create()((set) => {
  const cookieState = getCookie(ACCESS_TOKEN);
  let initToken = "";
  if (cookieState) {
    try {
      initToken = cookieState.startsWith('"') ? JSON.parse(cookieState) : cookieState;
    } catch {
      initToken = cookieState;
    }
  }
  const userCookie = getCookie(USER_DATA);
  let initUser = null;
  if (userCookie) {
    try {
      let raw = userCookie;
      if (raw.includes("%")) {
        try {
          raw = decodeURIComponent(raw);
        } catch {
        }
      }
      if (raw.includes("%")) {
        try {
          raw = decodeURIComponent(raw);
        } catch {
        }
      }
      const parsed = JSON.parse(raw);
      if (parsed && parsed.exp && parsed.exp > Date.now()) {
        initUser = parsed;
      } else if (parsed && !parsed.exp) {
        initUser = parsed;
      } else {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
      }
    } catch (err) {
      console.warn("Could not parse userCookie in useAuthStore:", err);
      initUser = null;
    }
  }
  return {
    auth: {
      user: initUser,
      setUser: (user) => set((state) => {
        if (user) {
          setCookie(USER_DATA, encodeURIComponent(JSON.stringify(user)));
        } else {
          removeCookie(USER_DATA);
        }
        return { ...state, auth: { ...state.auth, user } };
      }),
      accessToken: initUser ? initToken : "",
      setAccessToken: (accessToken) => set((state) => {
        setCookie(ACCESS_TOKEN, JSON.stringify(accessToken));
        return { ...state, auth: { ...state.auth, accessToken } };
      }),
      resetAccessToken: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        return { ...state, auth: { ...state.auth, accessToken: "" } };
      }),
      reset: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
        return {
          ...state,
          auth: { ...state.auth, user: null, accessToken: "" }
        };
      })
    }
  };
});

// src/lib/auth.ts
import GoogleProvider from "next-auth/providers/google";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import crypto2 from "crypto";
var SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
var SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
function stringToUuid(str) {
  if (!str) return crypto2.randomUUID();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(str)) {
    return str;
  }
  const hash = crypto2.createHash("md5").update(str).digest("hex");
  return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-4${hash.substring(13, 16)}-a${hash.substring(17, 20)}-${hash.substring(20, 32)}`;
}
var authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID || "",
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code"
        }
      },
      checks: ["none"]
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret_next_auth_shadcn_admin_key_2026_super_secure",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
    // 30 days
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      let effectiveBaseUrl = baseUrl;
      try {
        const { headers } = await import("next/headers");
        const headerList = await headers();
        const host = headerList.get("x-forwarded-host") || headerList.get("host");
        const proto = headerList.get("x-forwarded-proto") || "https";
        if (host) {
          effectiveBaseUrl = `${proto}://${host}`;
        }
      } catch {
      }
      try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        const isMobileAuth = cookieStore.get("mobile_auth")?.value === "true" || url.includes("is_mobile=true");
        if (isMobileAuth) {
          console.log("\u{1F4F1} [NextAuth Redirect Callback] Mobile auth detected. Redirecting to /auth/callback?is_mobile=true");
          return `${effectiveBaseUrl}/auth/callback?is_mobile=true&next=/`;
        }
      } catch (err) {
        console.error("\u274C [NextAuth Redirect Callback] Error inspecting cookies:", err);
      }
      if (url.includes("/auth/callback")) return url;
      if (url.startsWith("/")) return `${effectiveBaseUrl}${url}`;
      else if (new URL(url).origin === effectiveBaseUrl || new URL(url).origin === baseUrl) return url;
      return effectiveBaseUrl;
    },
    async signIn({ user }) {
      if (!user.email) return false;
      try {
        if (SUPABASE_URL && SUPABASE_KEY) {
          const supabase2 = createSupabaseClient(SUPABASE_URL, SUPABASE_KEY);
          const fallbackUuid = stringToUuid(user.id || user.email);
          const { data: existingProfile } = await supabase2.from("profiles").select("id, auth_user_id").eq("email", user.email.toLowerCase()).maybeSingle();
          const profileId = existingProfile?.id || fallbackUuid;
          const profileData = {
            id: profileId,
            name: user.name || user.email.split("@")[0],
            email: user.email.toLowerCase(),
            avatar: user.image || null,
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          };
          profileData.auth_user_id = existingProfile?.auth_user_id || profileId;
          if (existingProfile) {
            await supabase2.from("profiles").update(profileData).eq("id", existingProfile.id);
          } else {
            await supabase2.from("profiles").insert(profileData);
          }
          user.id = profileId;
        }
      } catch (err) {
        console.error("[NextAuth] Error syncing user to profiles table:", err);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = stringToUuid(user.id || user.email);
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      } else if (token.sub && !stringToUuid(token.sub)) {
        token.id = stringToUuid(token.sub);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const canonicalId = stringToUuid(token.id || token.sub || session.user.email);
        session.user.id = canonicalId;
        session.user.picture = token.picture || token.image;
      }
      return session;
    }
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in"
  }
};

// src/features/chattemplate/shared/api/auth.ts
async function getAccessToken() {
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
  try {
    const storeToken = useAuthStore.getState().auth.accessToken;
    if (storeToken && typeof storeToken === "string" && storeToken.split(".").length === 3) {
      return storeToken;
    }
    const supabase2 = createClient();
    const { data: { session } } = await supabase2.auth.getSession();
    if (session?.access_token && session.access_token.split(".").length === 3) {
      return session.access_token;
    }
    return supabaseKey;
  } catch (error) {
    return supabaseKey;
  }
}

// src/features/chattemplate/shared/api/headers.ts
async function getHeaders(customHeaders = {}) {
  const token = await getAccessToken();
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
  const is3PartJwt = typeof token === "string" && token.split(".").length === 3;
  const validBearerToken = is3PartJwt ? token : apiKey;
  return {
    "apikey": apiKey,
    "Authorization": `Bearer ${validBearerToken}`,
    "Content-Type": "application/json",
    ...customHeaders
  };
}

// src/features/chattemplate/shared/api/errorHandler.ts
var ApiError = class extends Error {
  constructor(message, code, details, hint) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.details = details;
    this.hint = hint;
  }
};
async function handleError(response) {
  let errorData;
  try {
    errorData = await response.json();
  } catch {
    throw new ApiError(response.statusText || "An unknown network error occurred");
  }
  const message = errorData?.message || errorData?.error_description || "API request failed";
  const code = errorData?.code;
  const details = errorData?.details;
  const hint = errorData?.hint;
  throw new ApiError(message, code, details, hint);
}

// src/features/chattemplate/shared/api/apiClient.ts
var SUPABASE_URL2 = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!SUPABASE_URL2) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");
}
var BASE_URL = SUPABASE_URL2.endsWith("/") ? SUPABASE_URL2.slice(0, -1) : SUPABASE_URL2;
async function parseResponse(response) {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
}
var apiClient = {
  async get(path2, options) {
    const headers = await getHeaders(options?.headers);
    const response = await fetch(`${BASE_URL}${path2}`, {
      method: "GET",
      headers
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async post(path2, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path2}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async patch(path2, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path2}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async delete(path2, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path2}`, {
      method: "DELETE",
      headers
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  }
};

// src/features/chattemplate/shared/api/queryBuilder.ts
var QueryBuilder = class {
  constructor() {
    this.params = new URLSearchParams();
  }
  /**
   * Embeds resource relationships or filters output columns.
   */
  select(fields) {
    const cleaned = fields.replace(/\s+/g, "");
    this.params.set("select", cleaned);
    return this;
  }
  /**
   * Equality filter.
   */
  eq(column, value) {
    this.params.append(column, `eq.${value}`);
    return this;
  }
  lt(column, value) {
    this.params.append(column, `lt.${value}`);
    return this;
  }
  /**
   * Case-insensitive pattern matching filter.
   */
  ilike(column, value) {
    this.params.append(column, `ilike.${value}`);
    return this;
  }
  /**
   * IN filter matching array of values.
   */
  in(column, values) {
    const formatted = values.map((v) => `${v}`).join(",");
    this.params.append(column, `in.(${formatted})`);
    return this;
  }
  /**
   * Logical OR filter matching multiple column criteria.
   * Example string: "email.ilike.test@gmail.com,contact_user_id.eq.some-uuid"
   */
  or(filterString) {
    this.params.set("or", `(${filterString})`);
    return this;
  }
  /**
   * Sorting filter.
   */
  order(column, options) {
    const dir = options?.ascending !== false ? "asc" : "desc";
    this.params.set("order", `${column}.${dir}`);
    return this;
  }
  /**
   * Limit result size.
   */
  limit(n) {
    this.params.set("limit", n.toString());
    return this;
  }
  /**
   * Offset result index.
   */
  offset(n) {
    this.params.set("offset", n.toString());
    return this;
  }
  /**
   * Generates the final query parameter string (e.g. "?owner_id=eq.123").
   */
  toString() {
    const q = this.params.toString();
    return q ? `?${q}` : "";
  }
};
function createQuery() {
  return new QueryBuilder();
}

// src/features/chattemplate/chat/api/messages.api.ts
async function createMessage(msg) {
  try {
    const memberQuery = createQuery().select("user_id").eq("conversation_id", msg.conversationId);
    const members = await apiClient.get(
      `/rest/v1/conversation_members${memberQuery.toString()}`
    );
    if (!members || members.length === 0) {
      throw new Error("No members found in conversation");
    }
    const senderMsgId = msg.id || crypto.randomUUID();
    const now = (/* @__PURE__ */ new Date()).toISOString();
    let resolvedReplyToId = null;
    if (msg.replyMetadata?.replyto_message_id) {
      const parentMsgQuery = createQuery().select("id, sender_message_id").eq("id", msg.replyMetadata.replyto_message_id).limit(1);
      const replyMsgs = await apiClient.get(
        `/rest/v1/chat_messages${parentMsgQuery.toString()}`
      );
      const replyMsg = replyMsgs[0] || null;
      resolvedReplyToId = replyMsg ? replyMsg.sender_message_id || replyMsg.id : msg.replyMetadata.replyto_message_id;
    }
    const records = [];
    for (const member of members) {
      const isSender = member.user_id === msg.senderId;
      const msgId = isSender ? senderMsgId : crypto.randomUUID();
      let finalMessage = msg.message;
      if (msg.messageType === "system" && msg.systemMetadata) {
        const { type: sysType, groupName, creatorName } = msg.systemMetadata;
        if (sysType === "group_created") {
          finalMessage = isSender ? `You created group "${groupName}"` : `${creatorName} created group "${groupName}"`;
        } else if (sysType === "members_added") {
          if (isSender) {
            continue;
          }
          finalMessage = `${creatorName} added you`;
        }
      }
      const hasPreparsedData = !!(msg.fileContentText || msg.fileContentJson);
      records.push({
        id: msgId,
        conversation_id: msg.conversationId,
        owner_user_id: member.user_id,
        sender_user_id: msg.senderId,
        message: finalMessage,
        message_type: msg.messageType,
        direction: isSender ? "Sent" : "Received",
        sent: true,
        received: isSender,
        created_at: now,
        file_url: msg.fileUrl || null,
        file_name: msg.fileName || null,
        file_size: msg.fileSize || null,
        mime_type: msg.mimeType || null,
        duration: msg.duration || null,
        thumbnail: msg.thumbnail || null,
        thumb: false,
        favorite: false,
        flag: false,
        star: false,
        pin: false,
        archive: false,
        deleted: false,
        action_this: false,
        reply: !!msg.replyMetadata,
        forward: false,
        replyemoji: msg.replyMetadata?.replyemoji || null,
        replyto_message_id: resolvedReplyToId,
        replyto_user_id: msg.replyMetadata?.replyto_user_id || null,
        parent_message_id: msg.replyMetadata?.parent_message_id || null,
        sender_message_id: isSender ? null : senderMsgId,
        client_message_id: msg.clientMessageId || null,
        message_status: "sent",
        location_data: msg.locationData || null,
        location_type: msg.locationType || null,
        file_content_text: msg.fileContentText || null,
        file_content_json: msg.fileContentJson || null,
        processing_status: hasPreparsedData ? "completed" : msg.messageType === "document" && (msg.fileName?.toLowerCase().endsWith(".pdf") || msg.mimeType === "application/pdf") ? "pending" : null
      });
    }
    if (records.length > 0) {
      await apiClient.post("/rest/v1/chat_messages", records);
      const isPdf = msg.messageType === "document" && (msg.fileName?.toLowerCase().endsWith(".pdf") || msg.mimeType === "application/pdf");
      if (isPdf && typeof window !== "undefined") {
        fetch("/api/process-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messageId: senderMsgId
          })
        }).catch((err) => console.warn("[Messages API] Asynchronous PDF processing dispatch error:", err));
      }
      if (typeof window !== "undefined") {
        fetch("/api/notifications/push", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            senderId: msg.senderId,
            conversationId: msg.conversationId,
            message: msg.message,
            messageType: msg.messageType,
            fileName: msg.fileName
          })
        }).catch((err) => console.warn("[Messages API] Asynchronous FCM push dispatch error:", err));
      }
    }
    const senderRecord = records.find(
      (r) => r.owner_user_id === msg.senderId
    );
    if (!senderRecord) return null;
    const profileQuery = createQuery().select("id, name, email, avatar").eq("id", msg.senderId).limit(1);
    const profiles = await apiClient.get(
      `/rest/v1/profiles${profileQuery.toString()}`
    );
    const profile = profiles[0] || null;
    return {
      id: senderRecord.id,
      conversation_id: senderRecord.conversation_id,
      owner_user_id: senderRecord.owner_user_id,
      sender_user_id: senderRecord.sender_user_id,
      message: senderRecord.message,
      message_type: senderRecord.message_type,
      direction: senderRecord.direction,
      sent: senderRecord.sent,
      received: senderRecord.received,
      created_at: senderRecord.created_at,
      file_url: senderRecord.file_url || void 0,
      file_name: senderRecord.file_name || void 0,
      file_size: senderRecord.file_size ? Number(senderRecord.file_size) : void 0,
      mime_type: senderRecord.mime_type || void 0,
      duration: senderRecord.duration ? Number(senderRecord.duration) : void 0,
      thumbnail: senderRecord.thumbnail || void 0,
      thumb: senderRecord.thumb,
      favorite: senderRecord.favorite,
      flag: senderRecord.flag,
      star: senderRecord.star,
      pin: senderRecord.pin,
      archive: senderRecord.archive,
      deleted: senderRecord.deleted,
      action_this: senderRecord.action_this,
      reply: senderRecord.reply,
      forward: senderRecord.forward,
      replyemoji: senderRecord.replyemoji || void 0,
      replyto_message_id: senderRecord.replyto_message_id || void 0,
      replyto_user_id: senderRecord.replyto_user_id || void 0,
      parent_message_id: senderRecord.parent_message_id || void 0,
      message_status: senderRecord.message_status,
      client_message_id: senderRecord.client_message_id || void 0,
      location_data: senderRecord.location_data || void 0,
      location_type: senderRecord.location_type || void 0,
      file_content_text: senderRecord.file_content_text || void 0,
      file_content_json: senderRecord.file_content_json || void 0,
      processing_status: senderRecord.processing_status || void 0,
      sender: profile ? {
        id: profile.id,
        name: profile.name || profile.email.split("@")[0],
        email: profile.email,
        avatar_url: profile.avatar || void 0
      } : void 0
    };
  } catch (err) {
    console.error("[Messages API] Failed to create message copies:", err);
    return null;
  }
}

// src/features/chattemplate/chat/repositories/message-repository.ts
async function createMessage2(msg) {
  return createMessage(msg);
}

// src/lib/db-alerts/types/db-alert.ts
var DB_ALERTS_CONFIG = {
  groupName: "DB Alerts",
  groupImage: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=128&h=128&fit=crop&auto=format&q=80",
  adminEmails: [
    "itsaman00786@gmail.com",
    "amanmicropay@gmail.com",
    "n.rajukrishna@gmail.com"
  ]
};

// src/services/db-alert.service.ts
function formatAlertTime(date) {
  const day = date.getDate();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}
async function getOrCreateAlertConversation() {
  const supabase2 = createClient();
  try {
    const { data: existing, error } = await supabase2.from("conversations").select("id").eq("name", DB_ALERTS_CONFIG.groupName).eq("type", "group").maybeSingle();
    if (error) throw error;
    if (existing) return existing.id;
    const { data: newConvo, error: createError } = await supabase2.from("conversations").insert({
      type: "group",
      name: DB_ALERTS_CONFIG.groupName,
      image: DB_ALERTS_CONFIG.groupImage || null
    }).select("id").single();
    if (createError) throw createError;
    if (!newConvo) return null;
    const { data: adminProfiles, error: profilesError } = await supabase2.from("profiles").select("id, email").in("email", DB_ALERTS_CONFIG.adminEmails);
    if (profilesError) throw profilesError;
    if (adminProfiles && adminProfiles.length > 0) {
      const membersToInsert = adminProfiles.map((p) => ({
        conversation_id: newConvo.id,
        user_id: p.id,
        role: "member"
      }));
      const { error: insertError } = await supabase2.from("conversation_members").insert(membersToInsert);
      if (insertError) {
        console.error("[DB Alerts] Failed to insert initial admin members:", insertError);
      } else {
        console.log(`[DB Alerts] Created group with ${adminProfiles.length} configured admin members`);
      }
    }
    return newConvo.id;
  } catch (err) {
    console.error("[DB Alerts] Error in getOrCreateAlertConversation:", err);
    return null;
  }
}
var subscribedUsers = /* @__PURE__ */ new Set();
async function autoSubscribeAdmin(userId, email) {
  if (subscribedUsers.has(userId)) return;
  subscribedUsers.add(userId);
  const emailLower = email.trim().toLowerCase();
  const isAdmin = DB_ALERTS_CONFIG.adminEmails.some(
    (adminEmail) => adminEmail.toLowerCase() === emailLower
  );
  if (!isAdmin) return;
  const supabase2 = createClient();
  try {
    const convoId = await getOrCreateAlertConversation();
    if (!convoId) return;
    const { data: existing, error: checkError } = await supabase2.from("conversation_members").select("id").eq("conversation_id", convoId).eq("user_id", userId).maybeSingle();
    if (checkError) throw checkError;
    if (!existing) {
      const { error: insertError } = await supabase2.from("conversation_members").insert({
        conversation_id: convoId,
        user_id: userId,
        role: "member"
      });
      if (insertError) throw insertError;
      console.log(`[DB Alerts] Auto-subscribed admin user: ${email} (${userId})`);
    }
    const { data: msgs, error: msgsError } = await supabase2.from("chat_messages").select("id").eq("conversation_id", convoId).eq("owner_user_id", userId).limit(1);
    if (!msgsError && (!msgs || msgs.length === 0)) {
      await createMessage2({
        conversationId: convoId,
        senderId: userId,
        message: "\u{1F6A8} DB Alerts Channel Initialized. Administrative events will be logged here.",
        messageType: "system"
      });
      console.log(`[DB Alerts] Initialized message feed for user: ${userId}`);
    }
  } catch (err) {
    console.error("[DB Alerts] Failed to auto-subscribe admin user:", err);
  }
}
async function triggerContactAlert(action, ownerId, contactUserId) {
  const supabase2 = createClient();
  try {
    const convoId = await getOrCreateAlertConversation();
    if (!convoId) return;
    const { data: ownerProfile } = await supabase2.from("profiles").select("name, email").eq("id", ownerId).maybeSingle();
    const ownerName = ownerProfile?.name || ownerProfile?.email?.split("@")[0] || "System";
    const { data: contactProfile } = await supabase2.from("profiles").select("name, email").eq("id", contactUserId).maybeSingle();
    const contactName = contactProfile?.name || contactProfile?.email?.split("@")[0] || "System";
    const timeStr = formatAlertTime(/* @__PURE__ */ new Date());
    let formattedMessage = "";
    if (action === "create") {
      formattedMessage = `Contact Created
\u{1F7E2} Contact Added
By: ${ownerName}
Contact: ${contactName}
Time: ${timeStr}`;
    } else if (action === "delete") {
      formattedMessage = `Contact Deleted
\u{1F534} Contact Deleted
By: ${ownerName}
Contact: ${contactName}`;
    } else if (action === "update") {
      formattedMessage = `Contact Updated
\u{1F7E1} Contact Updated
By: ${ownerName}
Contact: ${contactName}
Time: ${timeStr}`;
    }
    await createMessage2({
      conversationId: convoId,
      senderId: ownerId,
      message: formattedMessage,
      messageType: "system"
    });
  } catch (err) {
    console.error("[DB Alerts] Failed to trigger contact alert:", err);
  }
}
async function triggerGroupAlert(action, actorId, groupName) {
  const supabase2 = createClient();
  try {
    const convoId = await getOrCreateAlertConversation();
    if (!convoId) return;
    let actorName = "System";
    if (actorId) {
      const { data: actorProfile } = await supabase2.from("profiles").select("name, email").eq("id", actorId).maybeSingle();
      actorName = actorProfile?.name || actorProfile?.email?.split("@")[0] || "System";
    }
    let formattedMessage = "";
    if (action === "create") {
      formattedMessage = `Group Created
\u{1F7E2} Group Created
By: ${actorName}
Group: ${groupName}`;
    } else if (action === "delete") {
      formattedMessage = `Group Deleted
\u{1F534} Group Deleted
By: ${actorName}
Group: ${groupName}`;
    } else if (action === "update") {
      formattedMessage = `Group Updated
\u{1F7E1} Group Updated
By: ${actorName}
Group: ${groupName}`;
    }
    let senderId = actorId;
    if (!senderId) {
      const { data: firstMember } = await supabase2.from("conversation_members").select("user_id").eq("conversation_id", convoId).limit(1).maybeSingle();
      senderId = firstMember?.user_id || "";
    }
    if (!senderId) {
      console.warn("[DB Alerts] Cannot send alert because no valid sender ID is available.");
      return;
    }
    await createMessage2({
      conversationId: convoId,
      senderId,
      message: formattedMessage,
      messageType: "system"
    });
  } catch (err) {
    console.error("[DB Alerts] Failed to trigger group alert:", err);
  }
}

// src/services/file.service.ts
function parseFileUrl(fileUrl) {
  try {
    const url = new URL(fileUrl);
    const pathParts = url.pathname.split("/");
    const publicIndex = pathParts.indexOf("public");
    if (publicIndex !== -1 && publicIndex + 2 < pathParts.length) {
      const bucket = pathParts[publicIndex + 1];
      const storagePath = pathParts.slice(publicIndex + 2).join("/");
      return { bucket, storagePath };
    }
    const authenticatedIndex = pathParts.indexOf("authenticated");
    if (authenticatedIndex !== -1 && authenticatedIndex + 2 < pathParts.length) {
      const bucket = pathParts[authenticatedIndex + 1];
      const storagePath = pathParts.slice(authenticatedIndex + 2).join("/");
      return { bucket, storagePath };
    }
    const chatFilesIndex = pathParts.indexOf("chat-files");
    if (chatFilesIndex !== -1 && chatFilesIndex + 1 < pathParts.length) {
      return { bucket: "chat-files", storagePath: pathParts.slice(chatFilesIndex + 1).join("/") };
    }
  } catch (e) {
    console.error("Failed to parse file URL:", e);
  }
  return { bucket: "chat-files", storagePath: "" };
}
async function getSharedFileMetadata(supabase2, fileId, userId) {
  console.log(`[DEBUG server] getSharedFileMetadata \u2192 fileId: ${fileId}, userId: ${userId}`);
  try {
    const { data, error } = await supabase2.rpc("get_shared_file_metadata", { p_file_id: fileId, p_user_id: userId }).maybeSingle();
    if (error) {
      console.error(`[DEBUG server] RPC error:`, error.message, error);
      return { success: false, error: error.message };
    }
    if (!data) {
      console.warn(`[DEBUG server] RPC returned null \u2192 file not found or user is not a conversation member. fileId: ${fileId}, userId: ${userId}`);
      return { success: false, error: "File not found or unauthorized" };
    }
    console.log(`[DEBUG server] RPC success \u2192 conversationId: ${data.out_conversation_id}, file: ${data.out_file_name}`);
    const parsed = parseFileUrl(data.out_file_url);
    return {
      success: true,
      data: {
        id: fileId,
        bucket: parsed.bucket,
        storagePath: parsed.storagePath,
        fileName: data.out_file_name || "document",
        fileSize: data.out_file_size,
        mimeType: data.out_mime_type || "application/octet-stream",
        conversationId: data.out_conversation_id,
        ownerId: data.out_sender_user_id || "",
        createdAt: data.out_created_at
      }
    };
  } catch (err) {
    console.error(`[DEBUG server] Exception in getSharedFileMetadata:`, err.message || err);
    return { success: false, error: err.message || "Internal server error" };
  }
}
async function generateSignedUrl(supabase2, bucket, storagePath) {
  const { data, error } = await supabase2.storage.from(bucket).createSignedUrl(storagePath, 60);
  if (error || !data) {
    throw new Error(error?.message || "Failed to generate signed URL");
  }
  return data.signedUrl;
}

// src/utils/pdf/createPdf.ts
import { PDFDocument, PageSizes } from "pdf-lib";

// src/constants/scanner.ts
var DEFAULT_JPEG_QUALITY = 0.85;
var FALLBACK_CROP_MARGIN_RATIO = 0.05;

// src/utils/scanner/compress.ts
function compressCanvasToJpeg(sourceCanvas, maxDimension = 2e3, quality = DEFAULT_JPEG_QUALITY) {
  let width = sourceCanvas.width;
  let height = sourceCanvas.height;
  if (width > maxDimension || height > maxDimension) {
    if (width > height) {
      height = Math.round(height * maxDimension / width);
      width = maxDimension;
    } else {
      width = Math.round(width * maxDimension / height);
      height = maxDimension;
    }
  }
  const outCanvas = document.createElement("canvas");
  outCanvas.width = width;
  outCanvas.height = height;
  const ctx = outCanvas.getContext("2d");
  if (ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(sourceCanvas, 0, 0, width, height);
  }
  return outCanvas.toDataURL("image/jpeg", quality);
}
function dataUrlToUint8Array(dataUrl) {
  const base64Str = dataUrl.split(",")[1] || dataUrl;
  const binaryStr = atob(base64Str);
  const len = binaryStr.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryStr.charCodeAt(i);
  }
  return bytes;
}

// src/utils/pdf/createPdf.ts
async function createPdfFromScanPages(pages, options = {}) {
  const {
    paperSize = "a4",
    orientation = "portrait",
    quality = 0.85
  } = options;
  const pdfDoc = await PDFDocument.create();
  for (const page of pages) {
    const imgCanvas = await renderPageToRotatedCanvas(page);
    const jpegDataUrl = compressCanvasToJpeg(imgCanvas, 2e3, quality);
    const imageBytes = dataUrlToUint8Array(jpegDataUrl);
    const embeddedImage = await pdfDoc.embedJpg(imageBytes);
    let pageWidth = embeddedImage.width;
    let pageHeight = embeddedImage.height;
    if (paperSize === "a4") {
      const a4 = PageSizes.A4;
      if (orientation === "landscape") {
        pageWidth = a4[1];
        pageHeight = a4[0];
      } else {
        pageWidth = a4[0];
        pageHeight = a4[1];
      }
    } else if (orientation === "landscape" && pageWidth < pageHeight) {
      const tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
    const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);
    const scale = Math.min(
      pageWidth / embeddedImage.width,
      pageHeight / embeddedImage.height
    );
    const drawW = embeddedImage.width * scale;
    const drawH = embeddedImage.height * scale;
    const drawX = (pageWidth - drawW) / 2;
    const drawY = (pageHeight - drawH) / 2;
    pdfPage.drawImage(embeddedImage, {
      x: drawX,
      y: drawY,
      width: drawW,
      height: drawH
    });
  }
  return await pdfDoc.save();
}
async function renderPageToRotatedCanvas(page) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const rot = (page.rotation % 360 + 360) % 360;
      const is90or270 = rot === 90 || rot === 270;
      const w = is90or270 ? img.height : img.width;
      const h = is90or270 ? img.width : img.height;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get 2d context for PDF page render"));
        return;
      }
      ctx.translate(w / 2, h / 2);
      ctx.rotate(rot * Math.PI / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      resolve(canvas);
    };
    img.onerror = (err) => reject(err);
    img.src = page.processedUrl || page.originalUrl;
  });
}

// src/services/pdf.service.ts
var PdfService = class {
  /**
   * Generate a PDF Uint8Array buffer from scan pages.
   * 
   * @param pages Array of ScanPage items
   * @param options PDF compilation parameters
   * @returns Uint8Array PDF byte stream
   */
  async generatePdfBuffer(pages, options = {}) {
    if (!pages || pages.length === 0) {
      throw new Error("Cannot generate PDF with 0 pages");
    }
    return await createPdfFromScanPages(pages, options);
  }
  /**
   * Create a File object containing PDF binary data ready for uploading.
   * 
   * @param pages Array of ScanPage items
   * @param filename Desired PDF filename
   * @param options PDF settings
   * @returns Promise resolving to a File instance (`application/pdf`)
   */
  async generatePdfFile(pages, filename = `scanned_doc_${Date.now()}.pdf`, options = {}) {
    const pdfBuffer = await this.generatePdfBuffer(pages, options);
    const cleanFilename = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
    return new File([pdfBuffer.buffer], cleanFilename, { type: "application/pdf" });
  }
  /**
   * Create a browser Blob preview URL from PDF bytes.
   * 
   * @param pdfBuffer Uint8Array PDF data
   * @returns Object URL string (`blob:http...`)
   */
  createPdfPreviewUrl(pdfBuffer) {
    const blob = new Blob([pdfBuffer.buffer], { type: "application/pdf" });
    return URL.createObjectURL(blob);
  }
  /**
   * Revoke blob URL to release browser memory.
   * 
   * @param url Blob URL to revoke
   */
  revokePdfPreviewUrl(url) {
    if (url && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  }
};
var pdfService = new PdfService();

// src/services/opencv.service.ts
var OpenCVService = class _OpenCVService {
  constructor() {
    this.isLoaded = false;
    this.isLoading = false;
    this.loadPromise = null;
  }
  /**
   * Singleton instance accessor.
   */
  static getInstance() {
    if (!_OpenCVService.instance) {
      _OpenCVService.instance = new _OpenCVService();
    }
    return _OpenCVService.instance;
  }
  /**
   * Check if OpenCV.js is fully loaded and ready for execution.
   */
  isReady() {
    return this.isLoaded && typeof window !== "undefined" && !!window.cv;
  }
  /**
   * Lazy load OpenCV.js script asynchronously with single-flight promise deduplication.
   */
  loadOpenCV() {
    console.log("[OpenCV] OpenCV script load disabled to ensure main-thread responsiveness. Falling back to native Canvas engine.");
    return Promise.resolve(null);
  }
  /**
   * Safely dispose an array of OpenCV.js Mat structures to prevent WebAssembly memory leaks.
   */
  safeDelete(...mats) {
    for (const mat of mats) {
      if (mat && typeof mat.delete === "function") {
        try {
          mat.delete();
        } catch (e) {
        }
      }
    }
  }
};
var opencvService = OpenCVService.getInstance();

// src/utils/scanner/detectEdges.ts
function detectDocumentEdges(imageSource, cv) {
  const width = "naturalWidth" in imageSource ? imageSource.naturalWidth : imageSource.width;
  const height = "naturalHeight" in imageSource ? imageSource.naturalHeight : imageSource.height;
  const fallbackQuad = getFallbackCropQuad();
  if (!width || !height) return fallbackQuad;
  if (cv && cv.Mat) {
    try {
      const srcMat = cv.imread(imageSource);
      const grayMat = new cv.Mat();
      const blurMat = new cv.Mat();
      const cannyMat = new cv.Mat();
      cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY, 0);
      cv.GaussianBlur(grayMat, blurMat, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT);
      cv.Canny(blurMat, cannyMat, 75, 200);
      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();
      cv.findContours(cannyMat, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);
      let maxArea = 0;
      let maxContour = null;
      for (let i = 0; i < contours.size(); ++i) {
        const cnt = contours.get(i);
        const area = cv.contourArea(cnt);
        if (area > width * height * 0.15) {
          const peri = cv.arcLength(cnt, true);
          const approx = new cv.Mat();
          cv.approxPolyDP(cnt, approx, 0.02 * peri, true);
          if (approx.rows === 4 && area > maxArea) {
            maxArea = area;
            if (maxContour) maxContour.delete();
            maxContour = approx;
          } else {
            approx.delete();
          }
        }
        cnt.delete();
      }
      let detectedQuad = null;
      if (maxContour && maxContour.rows === 4) {
        const points = [];
        for (let i = 0; i < 4; i++) {
          const pt = maxContour.data32S;
          points.push({
            x: pt[i * 2] / width,
            y: pt[i * 2 + 1] / height
          });
        }
        detectedQuad = sortQuadPoints(points);
      }
      srcMat.delete();
      grayMat.delete();
      blurMat.delete();
      cannyMat.delete();
      contours.delete();
      hierarchy.delete();
      if (maxContour) maxContour.delete();
      if (detectedQuad) return detectedQuad;
    } catch (error) {
      console.warn("[detectEdges] OpenCV detection failed, falling back to margin quad:", error);
    }
  }
  return fallbackQuad;
}
function getFallbackCropQuad() {
  const m = FALLBACK_CROP_MARGIN_RATIO;
  return {
    topLeft: { x: m, y: m },
    topRight: { x: 1 - m, y: m },
    bottomRight: { x: 1 - m, y: 1 - m },
    bottomLeft: { x: m, y: 1 - m }
  };
}
function sortQuadPoints(pts) {
  const sortedBySum = [...pts].sort((a, b) => a.x + a.y - (b.x + b.y));
  const topLeft = sortedBySum[0];
  const bottomRight = sortedBySum[3];
  const remaining = [sortedBySum[1], sortedBySum[2]];
  const sortedByDiff = remaining.sort((a, b) => a.y - a.x - (b.y - b.x));
  const topRight = sortedByDiff[0];
  const bottomLeft = sortedByDiff[1];
  return { topLeft, topRight, bottomRight, bottomLeft };
}

// src/utils/scanner/perspective.ts
function applyPerspectiveTransform(sourceCanvas, quad, cv) {
  const w = sourceCanvas.width;
  const h = sourceCanvas.height;
  const pTL = { x: quad.topLeft.x * w, y: quad.topLeft.y * h };
  const pTR = { x: quad.topRight.x * w, y: quad.topRight.y * h };
  const pBR = { x: quad.bottomRight.x * w, y: quad.bottomRight.y * h };
  const pBL = { x: quad.bottomLeft.x * w, y: quad.bottomLeft.y * h };
  const widthA = Math.hypot(pBR.x - pBL.x, pBR.y - pBL.y);
  const widthB = Math.hypot(pTR.x - pTL.x, pTR.y - pTL.y);
  const targetWidth = Math.max(100, Math.round(Math.max(widthA, widthB)));
  const heightA = Math.hypot(pTR.x - pBR.x, pTR.y - pBR.y);
  const heightB = Math.hypot(pTL.x - pBL.x, pTL.y - pBL.y);
  const targetHeight = Math.max(100, Math.round(Math.max(heightA, heightB)));
  const outCanvas = document.createElement("canvas");
  outCanvas.width = targetWidth;
  outCanvas.height = targetHeight;
  if (cv && cv.Mat) {
    try {
      const srcMat = cv.imread(sourceCanvas);
      const dstMat = new cv.Mat();
      const srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, [
        pTL.x,
        pTL.y,
        pTR.x,
        pTR.y,
        pBR.x,
        pBR.y,
        pBL.x,
        pBL.y
      ]);
      const dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [
        0,
        0,
        targetWidth,
        0,
        targetWidth,
        targetHeight,
        0,
        targetHeight
      ]);
      const M = cv.getPerspectiveTransform(srcTri, dstTri);
      const dsize = new cv.Size(targetWidth, targetHeight);
      cv.warpPerspective(srcMat, dstMat, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
      cv.imshow(outCanvas, dstMat);
      srcMat.delete();
      dstMat.delete();
      srcTri.delete();
      dstTri.delete();
      M.delete();
      return outCanvas;
    } catch (err) {
      console.warn("[perspective] OpenCV homography failed, using fallback canvas clip:", err);
    }
  }
  const ctx = outCanvas.getContext("2d");
  if (ctx) {
    const minX = Math.min(pTL.x, pTR.x, pBR.x, pBL.x);
    const minY = Math.min(pTL.y, pTR.y, pBR.y, pBL.y);
    const cropW = Math.max(1, Math.max(pTL.x, pTR.x, pBR.x, pBL.x) - minX);
    const cropH = Math.max(1, Math.max(pTL.y, pTR.y, pBR.y, pBL.y) - minY);
    ctx.drawImage(sourceCanvas, minX, minY, cropW, cropH, 0, 0, targetWidth, targetHeight);
  }
  return outCanvas;
}

// src/utils/scanner/enhance.ts
function applyEnhancementFilter(canvas, filter, brightness = 0, contrast = 0, cv) {
  const outCanvas = document.createElement("canvas");
  outCanvas.width = canvas.width;
  outCanvas.height = canvas.height;
  const ctx = outCanvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.drawImage(canvas, 0, 0);
  if (cv && cv.Mat && filter !== "original") {
    try {
      const srcMat = cv.imread(outCanvas);
      const dstMat = new cv.Mat();
      if (filter === "grayscale") {
        cv.cvtColor(srcMat, dstMat, cv.COLOR_RGBA2GRAY, 0);
        cv.cvtColor(dstMat, dstMat, cv.COLOR_GRAY2RGBA, 0);
      } else if (filter === "bw") {
        const grayMat = new cv.Mat();
        cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY, 0);
        cv.adaptiveThreshold(
          grayMat,
          grayMat,
          255,
          cv.ADAPTIVE_THRESH_GAUSSIAN_C,
          cv.THRESH_BINARY,
          21,
          10
        );
        cv.cvtColor(grayMat, dstMat, cv.COLOR_GRAY2RGBA, 0);
        grayMat.delete();
      } else if (filter === "enhanced") {
        const labMat = new cv.Mat();
        cv.cvtColor(srcMat, labMat, cv.COLOR_RGBA2RGB, 0);
        cv.cvtColor(labMat, labMat, cv.COLOR_RGB2Lab, 0);
        const channels = new cv.MatVector();
        cv.split(labMat, channels);
        const lChannel = channels.get(0);
        const clahe = new cv.CLAHE(2, new cv.Size(8, 8));
        clahe.apply(lChannel, lChannel);
        channels.set(0, lChannel);
        cv.merge(channels, labMat);
        cv.cvtColor(labMat, dstMat, cv.COLOR_Lab2RGBA, 0);
        labMat.delete();
        channels.delete();
        lChannel.delete();
        clahe.delete();
      }
      cv.imshow(outCanvas, dstMat);
      srcMat.delete();
      dstMat.delete();
    } catch (e) {
      console.warn("[enhance] OpenCV enhancement failed, fallback to canvas pixel math:", e);
    }
  }
  const imgData = ctx.getImageData(0, 0, outCanvas.width, outCanvas.height);
  const data = imgData.data;
  const bFactor = brightness * 2.55;
  const cFactor = 259 * (contrast + 255) / (255 * (259 - contrast));
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    if (!cv && filter === "grayscale") {
      const avg = 0.299 * r + 0.587 * g + 0.114 * b;
      r = avg;
      g = avg;
      b = avg;
    } else if (!cv && filter === "bw") {
      const avg = 0.299 * r + 0.587 * g + 0.114 * b;
      const bw = avg > 128 ? 255 : 0;
      r = bw;
      g = bw;
      b = bw;
    } else if (!cv && filter === "enhanced") {
      r = Math.min(255, r * 1.1 + 10);
      g = Math.min(255, g * 1.1 + 10);
      b = Math.min(255, b * 1.1 + 10);
    }
    if (brightness !== 0 || contrast !== 0) {
      r = cFactor * (r - 128) + 128 + bFactor;
      g = cFactor * (g - 128) + 128 + bFactor;
      b = cFactor * (b - 128) + 128 + bFactor;
    }
    data[i] = Math.min(255, Math.max(0, r));
    data[i + 1] = Math.min(255, Math.max(0, g));
    data[i + 2] = Math.min(255, Math.max(0, b));
  }
  ctx.putImageData(imgData, 0, 0);
  return outCanvas;
}

// src/services/scanner.service.ts
var ScannerService = class {
  /**
   * Process a new raw image file or Data URL into a fully-initialized ScanPage.
   * 
   * @param imageSource File object or Image Data URL
   * @returns Promise resolving to a fresh ScanPage object
   */
  async createScanPage(imageSource) {
    const dataUrl = typeof imageSource === "string" ? imageSource : await this.fileToDataUrl(imageSource);
    const img = await this.loadImage(dataUrl);
    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    const cv = opencvService.isReady() ? window.cv : void 0;
    const cropQuad = detectDocumentEdges(img, cv);
    const pageId = `page_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const baseCanvas = this.imageToCanvas(img);
    const unwarpedCanvas = applyPerspectiveTransform(baseCanvas, cropQuad, cv);
    const enhancedCanvas = applyEnhancementFilter(unwarpedCanvas, "enhanced", 0, 0, cv);
    const processedUrl = enhancedCanvas.toDataURL("image/jpeg", 0.88);
    return {
      id: pageId,
      originalUrl: dataUrl,
      processedUrl,
      cropQuad,
      filter: "enhanced",
      rotation: 0,
      brightness: 0,
      contrast: 0,
      width,
      height,
      timestamp: Date.now()
    };
  }
  /**
   * Re-process an existing ScanPage when user modifies cropQuad, filter, rotation, brightness, or contrast.
   * 
   * @param page ScanPage to update
   * @returns Promise resolving to updated ScanPage with fresh processedUrl
   */
  async reprocessScanPage(page) {
    const img = await this.loadImage(page.originalUrl);
    const cv = opencvService.isReady() ? window.cv : void 0;
    const baseCanvas = this.imageToCanvas(img);
    const unwarpedCanvas = applyPerspectiveTransform(baseCanvas, page.cropQuad, cv);
    const enhancedCanvas = applyEnhancementFilter(
      unwarpedCanvas,
      page.filter,
      page.brightness,
      page.contrast,
      cv
    );
    const processedUrl = enhancedCanvas.toDataURL("image/jpeg", 0.88);
    return {
      ...page,
      processedUrl
    };
  }
  /**
   * Helper to convert File to Data URL string.
   */
  fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  }
  /**
   * Helper to load Image element asynchronously.
   */
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  }
  imageToCanvas(img) {
    const canvas = document.createElement("canvas");
    const maxDim = 2048;
    let w = img.naturalWidth || img.width;
    let h = img.naturalHeight || img.height;
    if (w > maxDim || h > maxDim) {
      if (w > h) {
        h = Math.round(h * maxDim / w);
        w = maxDim;
      } else {
        w = Math.round(w * maxDim / h);
        h = maxDim;
      }
    }
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0, w, h);
    }
    return canvas;
  }
};
var scannerService = new ScannerService();

// src/services/share.service.ts
import { toast } from "sonner";
function generateSecureFileUrl(fileId) {
  if (typeof window === "undefined") {
    return `/files/document/${fileId}`;
  }
  return `${window.location.origin}/files/document/${fileId}`;
}
async function shareFileLink(fileId, fileName) {
  const shareUrl = generateSecureFileUrl(fileId);
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Share: ${fileName}`,
        text: `Check out this file: ${fileName}`,
        url: shareUrl
      });
      toast.success("Share link sent.");
      return;
    } catch (err) {
      if (err.name === "AbortError") {
        return;
      }
    }
  }
  try {
    await navigator.clipboard.writeText(shareUrl);
    toast.success("Share link copied.");
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = shareUrl;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      toast.success("Share link copied.");
    } catch {
      toast.error("Failed to copy share link.");
    }
    document.body.removeChild(textarea);
  }
}

// src/services/upload.service.ts
var UploadService = class {
  /**
   * Upload scanned PDF file to Supabase Storage via `/api/upload` route.
   * 
   * @param pdfFile Compiled PDF File object
   * @param pageCount Total number of pages included in document
   * @returns ScannedPdfResult containing publicUrl, fileName, fileSize, mimeType, and storagePath
   */
  async uploadScannedPdf(pdfFile, pageCount) {
    const formData = new FormData();
    formData.append("file", pdfFile);
    formData.append("folder", "documents");
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Upload failed (${response.status}): ${errText}`);
    }
    const data = await response.json();
    if (!data.success || !data.publicUrl) {
      throw new Error(data.error || "Server did not return a valid public upload URL");
    }
    return {
      publicUrl: data.publicUrl,
      fileName: data.fileName || pdfFile.name,
      fileSize: data.fileSize || pdfFile.size,
      mimeType: "application/pdf",
      storagePath: data.storagePath || `scanned/${pdfFile.name}`,
      pageCount
    };
  }
};
var scannerUploadService = new UploadService();

// src/services/auth-redirect.service.ts
function getFullRedirectUrl(pathname, searchParamsString) {
  if (!searchParamsString) {
    return pathname;
  }
  const cleanSearch = searchParamsString.startsWith("?") ? searchParamsString : `?${searchParamsString}`;
  return `${pathname}${cleanSearch}`;
}
function handleAuthRedirect(router, redirectTo) {
  console.log("[DEBUG client] handleAuthRedirect received raw redirectTo:", redirectTo);
  let targetPath = "/";
  if (redirectTo) {
    try {
      targetPath = decodeURIComponent(redirectTo);
    } catch {
      targetPath = redirectTo;
    }
  }
  try {
    if (targetPath.startsWith("http://") || targetPath.startsWith("https://")) {
      const url = new URL(targetPath);
      targetPath = `${url.pathname}${url.search}${url.hash}` || "/";
    }
  } catch {
  }
  if (targetPath === "/sign-in" || targetPath === "/sign-up" || !targetPath || targetPath === "") {
    targetPath = "/";
  }
  if (!targetPath.startsWith("/")) {
    targetPath = `/${targetPath}`;
  }
  console.log("[DEBUG client] handleAuthRedirect executing navigation to targetPath:", targetPath);
  if (router && typeof router.replace === "function") {
    router.replace(targetPath);
  }
  if (typeof window !== "undefined") {
    setTimeout(() => {
      if (window.location.pathname.startsWith("/sign-in") || window.location.pathname.startsWith("/sign-up")) {
        console.log("[DEBUG client] Executing hard redirect to dashboard:", targetPath);
        window.location.href = targetPath;
      }
    }, 100);
  }
}

// src/services/profile.service.ts
async function ensureProfileExists(user) {
  try {
    const supabase2 = createClient();
    const fallbackUuid = stringToUuid(user.accountNo || user.email);
    const { data: existingProfile } = await supabase2.from("profiles").select("id, auth_user_id").eq("email", user.email.toLowerCase()).maybeSingle();
    const profileId = existingProfile?.id || fallbackUuid;
    const profileData = {
      id: profileId,
      name: user.name || user.email.split("@")[0],
      email: user.email.toLowerCase(),
      avatar: user.picture || null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (user.mobile) {
      profileData.mobile = user.mobile;
    }
    profileData.auth_user_id = existingProfile?.auth_user_id || profileId;
    if (existingProfile) {
      await supabase2.from("profiles").update(profileData).eq("id", existingProfile.id);
    } else {
      await supabase2.from("profiles").insert(profileData);
    }
    return {
      id: profileId,
      name: profileData.name,
      email: profileData.email,
      avatar_url: profileData.avatar
    };
  } catch (err) {
    console.error("[ProfileService] Error ensuring profile exists:", err);
    return null;
  }
}
async function updateProfile(id, updates) {
  try {
    const supabase2 = createClient();
    await supabase2.from("profiles").update(updates).eq("id", id);
    return true;
  } catch (err) {
    console.error("[ProfileService] Error updating profile:", err);
    return false;
  }
}
async function getProfileByEmail(email) {
  try {
    const supabase2 = createClient();
    const { data } = await supabase2.from("profiles").select("*").eq("email", email).maybeSingle();
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      avatar_url: data.avatar
    };
  } catch (err) {
    return null;
  }
}

// src/services/push-notification.service.ts
async function requestNativeAppPermissions() {
  return;
}
async function initPushNotifications(userId) {
  return;
}

// src/lib/short-url-client.ts
var ID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateShortId(length = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += ID_CHARS.charAt(Math.floor(Math.random() * ID_CHARS.length));
  }
  return result;
}
function toBase64Url(str) {
  const bytes = new TextEncoder().encode(str);
  const bin = Array.from(bytes, (b) => String.fromCharCode(b)).join("");
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function buildSelfContainedShortUrl(origin, configHash, durationHours) {
  const expiresAtMs = Date.now() + durationHours * 60 * 60 * 1e3;
  const targetUrl = `${origin}/l?c=${configHash}&exp=${expiresAtMs}`;
  const id = generateShortId();
  const encoded = toBase64Url(targetUrl);
  return {
    shortUrl: `${origin}/go/${id}?r=${encoded}`,
    expiresAt: new Date(expiresAtMs).toISOString()
  };
}

// src/lib/short-url-store.ts
import { promises as fs } from "fs";
import path from "path";
import { createClient as createClient2 } from "@supabase/supabase-js";
var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
var supabase = supabaseUrl && supabaseAnonKey ? createClient2(supabaseUrl, supabaseAnonKey) : null;
var URLS_FILE = path.join(process.cwd(), "src/features/link-builder/data/urls.json");
var ID_CHARS2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function getMemoryStore() {
  const g = globalThis;
  if (!g.__shortUrlStore) {
    g.__shortUrlStore = /* @__PURE__ */ new Map();
  }
  return g.__shortUrlStore;
}
function generateShortId2(length = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += ID_CHARS2.charAt(Math.floor(Math.random() * ID_CHARS2.length));
  }
  return result;
}
function isKvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}
async function kvGet(key) {
  if (!isKvConfigured()) return null;
  try {
    const res = await fetch(process.env.KV_REST_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(["GET", key]),
      cache: "no-store"
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.result) return null;
    return JSON.parse(data.result);
  } catch {
    return null;
  }
}
async function kvSet(key, entry, ttlSeconds) {
  if (!isKvConfigured()) return false;
  try {
    const res = await fetch(process.env.KV_REST_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(["SET", key, JSON.stringify(entry), "EX", ttlSeconds]),
      cache: "no-store"
    });
    return res.ok;
  } catch {
    return false;
  }
}
async function readFileStore() {
  try {
    const raw = await fs.readFile(URLS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
async function writeFileStore(entries) {
  try {
    await fs.writeFile(URLS_FILE, JSON.stringify(entries, null, 2), "utf-8");
    return true;
  } catch {
    return false;
  }
}
async function saveShortUrl(targetUrl, expiresAtMs) {
  const id = generateShortId2();
  const entry = {
    id,
    targetUrl,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    expiresAt: new Date(expiresAtMs).toISOString()
  };
  const memory = getMemoryStore();
  memory.set(id, entry);
  const ttlSeconds = Math.max(60, Math.ceil((expiresAtMs - Date.now()) / 1e3));
  const kvSaved = await kvSet(`short:${id}`, entry, ttlSeconds);
  const existing = await readFileStore();
  existing.push(entry);
  const fileSaved = await writeFileStore(existing);
  let supabaseSaved = false;
  if (supabase) {
    try {
      const { error } = await supabase.from("short_urls").insert({
        id,
        target_url: targetUrl,
        expires_at: new Date(expiresAtMs).toISOString()
      });
      if (error) {
        console.error("Supabase saveShortUrl error:", error);
      } else {
        supabaseSaved = true;
        console.log("Supabase saveShortUrl success:", id);
      }
    } catch (e) {
      console.error("Supabase saveShortUrl exception:", e);
    }
  }
  const needsFallback = !kvSaved && !fileSaved && !supabaseSaved;
  const shortUrlSuffix = needsFallback ? `${id}?r=${Buffer.from(targetUrl).toString("base64url")}` : id;
  return { id, entry, shortUrlSuffix };
}
var fileStoreLoaded = false;
async function ensureFileStoreLoaded() {
  if (fileStoreLoaded) return;
  fileStoreLoaded = true;
  const entries = await readFileStore();
  const memory = getMemoryStore();
  for (const entry of entries) {
    memory.set(entry.id, entry);
  }
}
async function getShortUrl(id) {
  await ensureFileStoreLoaded();
  const memory = getMemoryStore();
  const cached = memory.get(id);
  if (cached) return cached;
  if (supabase) {
    try {
      const { data, error } = await supabase.from("short_urls").select("*").eq("id", id).single();
      if (!error && data) {
        const entry2 = {
          id: data.id,
          targetUrl: data.target_url,
          createdAt: data.created_at,
          expiresAt: data.expires_at
        };
        memory.set(id, entry2);
        return entry2;
      }
    } catch (e) {
      console.error("Supabase getShortUrl exception:", e);
    }
  }
  const fromKv = await kvGet(`short:${id}`);
  if (fromKv) {
    memory.set(id, fromKv);
    return fromKv;
  }
  const fromFile = await readFileStore();
  const entry = fromFile.find((e) => e.id === id) ?? null;
  if (entry) {
    memory.set(id, entry);
  }
  return entry;
}

// src/services/short-url.service.ts
var ShortUrlService = class {
  /**
   * Generates a random short ID of specified length.
   */
  static generateId(length = 6) {
    return generateShortId(length);
  }
  /**
   * Encodes a string to a base64url format.
   */
  static encodeUrl(url) {
    return toBase64Url(url);
  }
  /**
   * Builds a self-contained client-side short URL with embedded expiration.
   */
  static buildSelfContainedUrl(origin, configHash, durationHours) {
    return buildSelfContainedShortUrl(origin, configHash, durationHours);
  }
  /**
   * Stores a shortened URL mapping with expiration timestamp.
   */
  static async saveUrl(targetUrl, expiresAtMs) {
    return saveShortUrl(targetUrl, expiresAtMs);
  }
  /**
   * Retrieves a shortened URL target mapping.
   */
  static async getUrl(shortUrlSuffix) {
    const entry = await getShortUrl(shortUrlSuffix);
    if (!entry) return null;
    return {
      targetUrl: entry.targetUrl,
      expiresAt: entry.expiresAt
    };
  }
};

// src/services/ai-search.service.ts
import axios from "axios";
var AiSearchService = class {
  /**
   * Executes web search through Tavily API.
   */
  static async searchWeb(query, apiKey) {
    if (!apiKey) {
      throw new Error("Tavily API key is not configured.");
    }
    const res = await axios.post(
      "https://api.tavily.com/search",
      {
        api_key: apiKey,
        query,
        search_depth: "advanced",
        max_results: 10,
        include_images: true
      },
      { timeout: 15e3 }
    );
    return {
      results: res.data?.results || [],
      images: res.data?.images || []
    };
  }
  /**
   * Generates answer analysis using Gemini API.
   */
  static async generateAnswer(prompt, apiKey) {
    if (!apiKey) {
      throw new Error("Gemini API key is not configured.");
    }
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      { timeout: 3e4 }
    );
    return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  }
};

// src/features/vouchers/repositories/voucher-repository.ts
async function getActiveUserId() {
  try {
    const supabase2 = createClient();
    const { data: user } = await supabase2.auth.getUser();
    if (user?.user?.id) return user.user.id;
  } catch {
  }
  const storeUser = useAuthStore.getState().auth.user;
  if (!storeUser?.email && !storeUser?.id) return null;
  try {
    const supabase2 = createClient();
    const email = storeUser.email?.toLowerCase();
    if (email) {
      const { data: profileRow } = await supabase2.from("profiles").select("id").eq("email", email).maybeSingle();
      if (profileRow?.id) return profileRow.id;
    }
  } catch {
  }
  if (storeUser?.id) return stringToUuid(storeUser.id);
  return null;
}
async function uploadVoucherFile(file, subfolder = "originals") {
  const supabase2 = createClient();
  const userId = await getActiveUserId() || "anonymous";
  const fileExt = file.name.split(".").pop() || "bin";
  const uniqueName = `${crypto.randomUUID()}.${fileExt}`;
  const path2 = `vouchers/${userId}/${subfolder}/${uniqueName}`;
  const { error } = await supabase2.storage.from("chat-files").upload(path2, file, { upsert: false, contentType: file.type || "application/octet-stream" });
  if (error) {
    throw new Error(`Storage upload failed: ${error.message}`);
  }
  const { data: urlData } = supabase2.storage.from("chat-files").getPublicUrl(path2);
  return urlData.publicUrl;
}
async function uploadVoucherBlob(blob, fileName) {
  const supabase2 = createClient();
  const userId = await getActiveUserId() || "anonymous";
  const uniqueName = `${crypto.randomUUID()}_${fileName}`;
  const path2 = `vouchers/${userId}/edited/${uniqueName}`;
  const { error } = await supabase2.storage.from("chat-files").upload(path2, blob, { upsert: false, contentType: blob.type || "application/octet-stream" });
  if (error) {
    throw new Error(`Invoice storage upload failed: ${error.message}`);
  }
  const { data: urlData } = supabase2.storage.from("chat-files").getPublicUrl(path2);
  return urlData.publicUrl;
}
async function saveVoucher(data) {
  const supabase2 = createClient();
  const userId = await getActiveUserId();
  if (!userId) {
    throw new Error("Not authenticated");
  }
  const { data: row, error } = await supabase2.from("vouchers").insert({
    ...data,
    user_id: userId
  }).select("*").single();
  if (error) {
    throw new Error(`DB save failed: ${error.message}`);
  }
  return row;
}
async function getUserVouchers() {
  const supabase2 = createClient();
  const userId = await getActiveUserId();
  if (!userId) {
    const { data: data2 } = await supabase2.from("vouchers").select("*").order("created_at", { ascending: false }).limit(50);
    return data2 ?? [];
  }
  const { data, error } = await supabase2.from("vouchers").select("*").or(`user_id.eq.${userId}`).order("created_at", { ascending: false }).limit(50);
  if (error) {
    console.error("Failed to fetch vouchers:", error.message);
    const { data: fallbackData } = await supabase2.from("vouchers").select("*").order("created_at", { ascending: false }).limit(50);
    return fallbackData ?? [];
  }
  return data ?? [];
}

// src/services/geocode.service.ts
var GeocodeService = class {
  /**
   * Reverse geocodes latitude and longitude into an address.
   */
  static async reverseGeocode(latitude, longitude) {
    try {
      const res = await fetch(`/api/geocode?lat=${latitude}&lon=${longitude}`);
      if (!res.ok) {
        throw new Error(`Geocode request failed with status ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      console.error("GeocodeService reverseGeocode failed:", err);
      return null;
    }
  }
};
export {
  AiSearchService,
  GeocodeService,
  ShortUrlService,
  autoSubscribeAdmin,
  ensureProfileExists,
  generateSecureFileUrl,
  generateSignedUrl,
  getFullRedirectUrl,
  getOrCreateAlertConversation,
  getProfileByEmail,
  getSharedFileMetadata,
  getUserVouchers,
  handleAuthRedirect,
  initPushNotifications,
  pdfService,
  requestNativeAppPermissions,
  saveVoucher,
  scannerService,
  scannerUploadService,
  shareFileLink,
  triggerContactAlert,
  triggerGroupAlert,
  updateProfile,
  uploadVoucherBlob,
  uploadVoucherFile
};
//# sourceMappingURL=services.mjs.map