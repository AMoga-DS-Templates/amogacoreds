'use client';

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

// src/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
var clientSingleton = null;
var cachedChatUrl = null;
var cachedChatKey = null;
var storageClientSingleton = null;
var cachedStorageUrl = null;
var cachedStorageKey = null;
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
function getStorageSupabaseClient() {
  if (typeof window === "undefined") {
    return createClient();
  }
  try {
    const raw = localStorage.getItem("email-settings-workspace");
    if (raw) {
      const parsed = JSON.parse(raw);
      const storageAccounts = parsed?.state?.config?.storageAccounts;
      const activeAccount = Array.isArray(storageAccounts) ? storageAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl && acc.supabaseAnonKey) : null;
      if (activeAccount) {
        const cleanUrl = sanitizeSupabaseUrl(activeAccount.supabaseUrl);
        const cleanKey = activeAccount.supabaseAnonKey.trim();
        if (!storageClientSingleton || cachedStorageUrl !== cleanUrl || cachedStorageKey !== cleanKey) {
          cachedStorageUrl = cleanUrl;
          cachedStorageKey = cleanKey;
          storageClientSingleton = createBrowserClient(cleanUrl, cleanKey);
        }
        return storageClientSingleton;
      }
      const storage = parsed?.state?.config?.storage;
      if (storage?.isCustomEnabled && storage?.supabaseUrl && storage?.supabaseAnonKey) {
        const cleanUrl = sanitizeSupabaseUrl(storage.supabaseUrl);
        const cleanKey = storage.supabaseAnonKey.trim();
        if (!storageClientSingleton || cachedStorageUrl !== cleanUrl || cachedStorageKey !== cleanKey) {
          cachedStorageUrl = cleanUrl;
          cachedStorageKey = cleanKey;
          storageClientSingleton = createBrowserClient(cleanUrl, cleanKey);
        }
        return storageClientSingleton;
      }
    }
  } catch (e) {
    console.error("Failed to read custom storage settings from localStorage:", e);
  }
  return createClient();
}
function getStorageSupabaseUrl() {
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("email-settings-workspace");
      if (raw) {
        const parsed = JSON.parse(raw);
        const storageAccounts = parsed?.state?.config?.storageAccounts;
        const activeAccount = Array.isArray(storageAccounts) ? storageAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl) : null;
        if (activeAccount?.supabaseUrl) {
          return sanitizeSupabaseUrl(activeAccount.supabaseUrl);
        }
        const storage = parsed?.state?.config?.storage;
        if (storage?.isCustomEnabled && storage?.supabaseUrl) {
          return sanitizeSupabaseUrl(storage.supabaseUrl);
        }
      }
    } catch {
    }
  }
  return sanitizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL || "");
}
var emailStorageClientSingleton = null;
var cachedEmailStorageUrl = null;
var cachedEmailStorageKey = null;
function getEmailStorageSupabaseClient() {
  if (typeof window === "undefined") {
    return createClient();
  }
  try {
    const raw = localStorage.getItem("email-settings-workspace");
    if (raw) {
      const parsed = JSON.parse(raw);
      const emailFileAccounts = parsed?.state?.config?.emailFileAccounts;
      const activeAccount = Array.isArray(emailFileAccounts) ? emailFileAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl && acc.supabaseAnonKey) : null;
      if (activeAccount) {
        const cleanUrl = sanitizeSupabaseUrl(activeAccount.supabaseUrl);
        const cleanKey = activeAccount.supabaseAnonKey.trim();
        if (!emailStorageClientSingleton || cachedEmailStorageUrl !== cleanUrl || cachedEmailStorageKey !== cleanKey) {
          cachedEmailStorageUrl = cleanUrl;
          cachedEmailStorageKey = cleanKey;
          emailStorageClientSingleton = createBrowserClient(cleanUrl, cleanKey);
        }
        return emailStorageClientSingleton;
      }
    }
  } catch (e) {
    console.error("Failed to read custom email storage settings from localStorage:", e);
  }
  return getStorageSupabaseClient();
}
function getEmailStorageConfig() {
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("email-settings-workspace");
      if (raw) {
        const parsed = JSON.parse(raw);
        const emailFileAccounts = parsed?.state?.config?.emailFileAccounts;
        const activeAccount = Array.isArray(emailFileAccounts) ? emailFileAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl && acc.supabaseAnonKey) : null;
        if (activeAccount) {
          return {
            bucketName: activeAccount.bucketName || "email-attachments",
            defaultFolder: activeAccount.defaultFolder || "EmailAttachments"
          };
        }
      }
    } catch {
    }
  }
  return {
    bucketName: "email-attachments",
    defaultFolder: "EmailAttachments"
  };
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
import crypto from "crypto";
var SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
var SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
function stringToUuid(str) {
  if (!str) return crypto.randomUUID();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(str)) {
    return str;
  }
  const hash = crypto.createHash("md5").update(str).digest("hex");
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
          const supabase = createSupabaseClient(SUPABASE_URL, SUPABASE_KEY);
          const fallbackUuid = stringToUuid(user.id || user.email);
          const { data: existingProfile } = await supabase.from("profiles").select("id, auth_user_id").eq("email", user.email.toLowerCase()).maybeSingle();
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
            await supabase.from("profiles").update(profileData).eq("id", existingProfile.id);
          } else {
            await supabase.from("profiles").insert(profileData);
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
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();
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
  async get(path, options) {
    const headers = await getHeaders(options?.headers);
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "GET",
      headers
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async post(path, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async patch(path, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async delete(path, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "DELETE",
      headers
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  }
};

// src/lib/client.ts
import { createBrowserClient as createBrowserClient2 } from "@supabase/ssr";

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
export {
  ApiError,
  QueryBuilder,
  apiClient,
  buildSelfContainedShortUrl,
  createQuery,
  generateShortId,
  getEmailStorageConfig,
  getEmailStorageSupabaseClient,
  getHeaders,
  getStorageSupabaseClient,
  getStorageSupabaseUrl,
  handleError,
  sanitizeSupabaseUrl,
  toBase64Url
};
//# sourceMappingURL=sdk.mjs.map