var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server/index.ts
var server_exports = {};
__export(server_exports, {
  UI_RENDER_SYSTEM_PROMPT: () => UI_RENDER_SYSTEM_PROMPT,
  handleChatPost: () => handleChatPost,
  handleContactsGet: () => handleContactsGet,
  handleContactsPost: () => handleContactsPost,
  handleConversationsGet: () => handleConversationsGet,
  handleGeocodeRequest: () => handleGeocodeRequest,
  handleGroupsGet: () => handleGroupsGet,
  handleGroupsPost: () => handleGroupsPost,
  handleMailInboxGet: () => handleMailInboxGet,
  handleMailSendPost: () => handleMailSendPost,
  handleMailSentGet: () => handleMailSentGet,
  handleMailTestGet: () => handleMailTestGet,
  handleMessagesGet: () => handleMessagesGet,
  handleMessagesPost: () => handleMessagesPost,
  handleNotificationsGet: () => handleNotificationsGet,
  handleNotificationsPatch: () => handleNotificationsPatch,
  handleNotificationsPost: () => handleNotificationsPost,
  handleProfilesGet: () => handleProfilesGet,
  handleSearchPost: () => handleSearchPost,
  handleShortenOptions: () => handleShortenOptions,
  handleShortenPost: () => handleShortenPost,
  handleVouchersGet: () => handleVouchersGet,
  handleVouchersPost: () => handleVouchersPost
});
module.exports = __toCommonJS(server_exports);

// src/server/chat.handler.ts
var import_ai_sdk_provider = require("@openrouter/ai-sdk-provider");
var import_ai = require("ai");
var import_server = require("next/server");
var UI_RENDER_SYSTEM_PROMPT = `
You are a UI Schema Generator. Your task is to generate a valid UI schema in JSON format based on the user's request.
You MUST output ONLY valid JSON. Do not write any explanations, do not wrap it in markdown code blocks, do not write anything else.

If the user provides an OCR text extraction payload (containing fields like invoice, date, total, business details, customer name, lines, etc.), you MUST analyze the text, extract the key values, and construct an editable Form containing corresponding inputs (e.g. Input with defaultValue, Textarea) so the user can verify, edit, and submit the extracted details.

The schema MUST follow this exact TypeScript interface:
interface UiSchema {
  root: string; // The ID of the root element (usually "root")
  elements: {
    [elementId: string]: {
      type: 'Stack' | 'Card' | 'Form' | 'Input' | 'Textarea' | 'Button' | 'Checkbox' | 'Badge' | 'Alert' | 'Separator' | 'Progress' | 'Heading' | 'Text' | 'Price' | 'FeatureList' | 'Tabs' | 'Calendar' | 'Switch' | 'RadioGroup' | 'PremiumStats';
      props?: Record<string, any>;
      children?: string[]; // Array of element IDs that are children of this element
    }
  }
}

Common Components & Props:
1. Stack: props: { direction: 'vertical' | 'horizontal', gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl', align: 'start' | 'center' | 'end' }
2. Form: props: { onSubmit?: string }
3. Card: props: { title?: string, description?: string, className?: string, maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full', centered?: boolean }
4. Input: props: { label?: string, name?: string, placeholder?: string, required?: boolean, type?: string, defaultValue?: any }
5. Textarea: props: { label?: string, name?: string, placeholder?: string, required?: boolean, defaultValue?: any }
6. Button: props: { label: string, type?: 'button' | 'submit', variant?: 'default' | 'outline' | 'destructive' | 'ghost', className?: string }
7. Heading: props: { level: '1' | '2' | '3' | '4' | '5' | '6', children: string }
8. Text: props: { children: string, size?: 'sm' | 'base' | 'lg' | 'xl', className?: string }
`;
async function handleChatPost(request) {
  try {
    const { message, model, tool, apiKey } = await request.json();
    if (!message) {
      return import_server.NextResponse.json({ error: "Message is required" }, { status: 400 });
    }
    const openRouterApiKey = apiKey?.trim() || process.env.OPENROUTER_API_KEY;
    if (!openRouterApiKey) {
      return import_server.NextResponse.json(
        { error: "OpenRouter API key is not configured. Please add your key in App Settings -> AI API." },
        { status: 500 }
      );
    }
    const openrouter = (0, import_ai_sdk_provider.createOpenRouter)({
      apiKey: openRouterApiKey
    });
    const isUiRender = tool === "ui-render";
    const { text } = await (0, import_ai.generateText)({
      model: openrouter.chat(model || "google/gemini-2.5-flash"),
      system: isUiRender ? UI_RENDER_SYSTEM_PROMPT : void 0,
      prompt: message
    });
    return import_server.NextResponse.json({ text });
  } catch (error) {
    console.error("Error in handleChatPost:", error);
    return import_server.NextResponse.json(
      { error: error?.message || "Failed to generate response" },
      { status: 500 }
    );
  }
}

// src/server/geocode.handler.ts
var import_server2 = require("next/server");
async function handleGeocodeRequest(req) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  if (!lat || !lon) {
    return import_server2.NextResponse.json({ error: "Latitude and Longitude are required" }, { status: 400 });
  }
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
      {
        headers: {
          "User-Agent": "AmogaDS/1.0 (contact@amoga.io)",
          "Accept-Language": "en"
        },
        next: { revalidate: 3600 }
      }
    );
    if (!response.ok) {
      throw new Error(`Nominatim returned status ${response.status}`);
    }
    const data = await response.json();
    return import_server2.NextResponse.json(data);
  } catch (error) {
    console.error("Server-side geocoding failed:", error);
    return import_server2.NextResponse.json({ error: error.message || "Geocoding failed" }, { status: 500 });
  }
}

// src/server/shorten.handler.ts
var import_server3 = require("next/server");

// src/lib/short-url-store.ts
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_supabase_js = require("@supabase/supabase-js");
var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
var supabase = supabaseUrl && supabaseAnonKey ? (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey) : null;
var URLS_FILE = import_path.default.join(process.cwd(), "src/features/link-builder/data/urls.json");
var ID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function getMemoryStore() {
  const g = globalThis;
  if (!g.__shortUrlStore) {
    g.__shortUrlStore = /* @__PURE__ */ new Map();
  }
  return g.__shortUrlStore;
}
function generateShortId(length = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += ID_CHARS.charAt(Math.floor(Math.random() * ID_CHARS.length));
  }
  return result;
}
function isKvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
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
    const raw = await import_fs.promises.readFile(URLS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
async function writeFileStore(entries) {
  try {
    await import_fs.promises.writeFile(URLS_FILE, JSON.stringify(entries, null, 2), "utf-8");
    return true;
  } catch {
    return false;
  }
}
async function saveShortUrl(targetUrl, expiresAtMs) {
  const id = generateShortId();
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

// src/server/shorten.handler.ts
function getOrigin(request) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  if (host) return `${proto}://${host}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return request.nextUrl.origin;
}
async function handleShortenPost(request) {
  try {
    const body = await request.json();
    const { url, durationHours = 1 } = body;
    if (!url || typeof url !== "string") {
      return import_server3.NextResponse.json({ error: "URL is required" }, { status: 400 });
    }
    const expiresAtMs = Date.now() + durationHours * 60 * 60 * 1e3;
    const expiresAt = new Date(expiresAtMs).toISOString();
    let urlWithExpiration = url;
    if (url.includes("/l/")) {
      const parts = url.split("/l/");
      const domain = parts[0];
      const config = parts[1];
      urlWithExpiration = `${domain}/l?c=${config}&exp=${expiresAtMs}`;
    } else if (url.includes("/l?")) {
      const parsed = new URL(url);
      parsed.searchParams.set("exp", String(expiresAtMs));
      urlWithExpiration = parsed.toString();
    } else {
      const separator = url.includes("?") ? "&" : "?";
      urlWithExpiration = `${url}${separator}exp=${expiresAtMs}`;
    }
    const origin = getOrigin(request);
    const { shortUrlSuffix } = await saveShortUrl(urlWithExpiration, expiresAtMs);
    const shortUrl = `${origin}/go/${shortUrlSuffix}`;
    return import_server3.NextResponse.json(
      { shortUrl, expiresAt },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }
    );
  } catch (err) {
    console.error("URL shortening API exception:", err);
    return import_server3.NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
async function handleShortenOptions() {
  return new import_server3.NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

// src/server/vouchers.handler.ts
var import_server4 = require("next/server");

// src/lib/supabase/server.ts
var import_ssr = require("@supabase/ssr");
var import_headers = require("next/headers");
async function createClient2() {
  const cookieStore = await (0, import_headers.cookies)();
  return (0, import_ssr.createServerClient)(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(
              ({ name, value, options }) => cookieStore.set(name, value, options)
            );
          } catch {
          }
        }
      }
    }
  );
}

// src/server/vouchers.handler.ts
var import_next_auth = require("next-auth");

// src/lib/auth.ts
var import_google = __toESM(require("next-auth/providers/google"));
var import_supabase_js2 = require("@supabase/supabase-js");
var import_crypto = __toESM(require("crypto"));
var SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
var SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
function stringToUuid(str) {
  if (!str) return import_crypto.default.randomUUID();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(str)) {
    return str;
  }
  const hash = import_crypto.default.createHash("md5").update(str).digest("hex");
  return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-4${hash.substring(13, 16)}-a${hash.substring(17, 20)}-${hash.substring(20, 32)}`;
}
var authOptions = {
  providers: [
    (0, import_google.default)({
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
        const { cookies: cookies2 } = await import("next/headers");
        const cookieStore = await cookies2();
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
          const supabase2 = (0, import_supabase_js2.createClient)(SUPABASE_URL, SUPABASE_KEY);
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

// src/server/vouchers.handler.ts
async function handleVouchersGet() {
  try {
    const session = await (0, import_next_auth.getServerSession)(authOptions);
    const supabase2 = await createClient2();
    let userId = null;
    let userEmail = null;
    if (session?.user) {
      const user = session.user;
      userEmail = user.email ? user.email.toLowerCase() : null;
      userId = stringToUuid(user.id || user.email);
    } else {
      const { data: { user } } = await supabase2.auth.getUser();
      if (user?.id) {
        userId = user.id;
        userEmail = user.email ? user.email.toLowerCase() : null;
      }
    }
    let voucherRows = [];
    try {
      if (userId) {
        const { data: vData } = await supabase2.from("vouchers").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(100);
        if (vData && vData.length > 0) {
          voucherRows = vData;
        } else if (userEmail) {
          const { data: profileRow } = await supabase2.from("profiles").select("id").eq("email", userEmail).maybeSingle();
          if (profileRow?.id) {
            const { data: vByProfile } = await supabase2.from("vouchers").select("*").eq("user_id", profileRow.id).order("created_at", { ascending: false }).limit(100);
            if (vByProfile && vByProfile.length > 0) {
              voucherRows = vByProfile;
            }
          }
        }
      }
      if (voucherRows.length === 0) {
        const { data: fallbackVData } = await supabase2.from("vouchers").select("*").order("created_at", { ascending: false }).limit(100);
        if (fallbackVData) voucherRows = fallbackVData;
      }
    } catch (e) {
      console.warn("[GET /api/vouchers] Vouchers table fetch warning:", e);
    }
    let chatFileRows = [];
    try {
      if (userId) {
        const [rOwner, rSender] = await Promise.all([
          supabase2.from("chat_messages").select("*").eq("owner_user_id", userId).not("file_url", "is", null).order("created_at", { ascending: false }).limit(100),
          supabase2.from("chat_messages").select("*").eq("sender_user_id", userId).not("file_url", "is", null).order("created_at", { ascending: false }).limit(100)
        ]);
        const userMsgs = [...rOwner.data ?? [], ...rSender.data ?? []];
        if (userMsgs.length > 0) {
          chatFileRows = userMsgs.map((msg) => ({
            id: `chat-file-${msg.id}`,
            voucher_no: msg.id ? String(msg.id).slice(0, 8) : "file",
            file_name: msg.file_name || "Attached File",
            original_file_url: msg.file_url ?? void 0,
            edited_file_url: msg.file_url ?? void 0,
            vendor_name: msg.sender_name || "Uploaded Document",
            customer_name: userEmail ? userEmail.split("@")[0] : "User",
            user_name: userEmail ? userEmail.split("@")[0] : "User",
            created_at: msg.created_at || (/* @__PURE__ */ new Date()).toISOString(),
            status: msg.processing_status || "Active",
            edited_json: msg.file_content_json || null
          }));
        }
      }
      if (chatFileRows.length === 0) {
        const { data: fallbackMsgs } = await supabase2.from("chat_messages").select("*").not("file_url", "is", null).order("created_at", { ascending: false }).limit(100);
        if (fallbackMsgs && fallbackMsgs.length > 0) {
          chatFileRows = fallbackMsgs.map((msg) => ({
            id: `chat-file-${msg.id}`,
            voucher_no: msg.id ? String(msg.id).slice(0, 8) : "file",
            file_name: msg.file_name || "Attached File",
            original_file_url: msg.file_url ?? void 0,
            edited_file_url: msg.file_url ?? void 0,
            vendor_name: msg.sender_name || "Uploaded Document",
            customer_name: userEmail ? userEmail.split("@")[0] : "User",
            user_name: userEmail ? userEmail.split("@")[0] : "User",
            created_at: msg.created_at || (/* @__PURE__ */ new Date()).toISOString(),
            status: msg.processing_status || "Active",
            edited_json: msg.file_content_json || null
          }));
        }
      }
    } catch (e) {
      console.warn("[GET /api/vouchers] Chat files fetch warning:", e);
    }
    const allFiles = [...voucherRows, ...chatFileRows];
    allFiles.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    const seen = /* @__PURE__ */ new Set();
    const uniqueFiles = [];
    for (const f of allFiles) {
      const key = `${f.id}|${f.file_name ?? ""}|${f.original_file_url ?? ""}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueFiles.push(f);
      }
    }
    return import_server4.NextResponse.json({ success: true, data: uniqueFiles });
  } catch (err) {
    console.error("[GET /api/vouchers] Internal error:", err);
    return import_server4.NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
async function handleVouchersPost(request) {
  try {
    const session = await (0, import_next_auth.getServerSession)(authOptions);
    const supabase2 = await createClient2();
    let userId = null;
    let userEmail = null;
    if (session?.user) {
      const user = session.user;
      userEmail = user.email ? user.email.toLowerCase() : null;
      userId = stringToUuid(user.id || user.email);
    } else {
      const { data: { user } } = await supabase2.auth.getUser();
      if (user?.id) {
        userId = user.id;
        userEmail = user.email?.toLowerCase() ?? null;
      }
    }
    if (!userId) {
      return import_server4.NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (userEmail) {
      const { data: profileRow } = await supabase2.from("profiles").select("id").eq("email", userEmail).maybeSingle();
      if (profileRow?.id) userId = profileRow.id;
    }
    const body = await request.json();
    const {
      voucher_no,
      file_name,
      original_file_url,
      edited_file_url,
      edited_json,
      vendor_name,
      customer_name,
      invoice_date,
      total,
      currency
    } = body;
    if (!voucher_no || !file_name) {
      return import_server4.NextResponse.json({ error: "voucher_no and file_name are required" }, { status: 400 });
    }
    const { data: row, error } = await supabase2.from("vouchers").insert({
      user_id: userId,
      voucher_no,
      file_name,
      original_file_url: original_file_url || null,
      edited_file_url: edited_file_url || null,
      edited_json: edited_json || null,
      vendor_name: vendor_name || null,
      customer_name: customer_name || null,
      invoice_date: invoice_date || null,
      total: total || null,
      currency: currency || "USD",
      status: "Active"
    }).select("*").single();
    if (error) {
      return import_server4.NextResponse.json({ error: error.message }, { status: 500 });
    }
    return import_server4.NextResponse.json({ success: true, data: row }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/vouchers] Internal error:", err);
    return import_server4.NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}

// src/server/search.handler.ts
var import_server6 = require("next/server");

// src/services/ai-search.service.ts
var import_axios = __toESM(require("axios"));
var AiSearchService = class {
  /**
   * Executes web search through Tavily API.
   */
  static async searchWeb(query, apiKey) {
    if (!apiKey) {
      throw new Error("Tavily API key is not configured.");
    }
    const res = await import_axios.default.post(
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
    const res = await import_axios.default.post(
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

// src/server/search.handler.ts
async function handleSearchPost(request) {
  try {
    const body = await request.json();
    const { query, toolPrompt, toolId } = body;
    if (!query || typeof query !== "string") {
      return import_server6.NextResponse.json({ error: "Query is required" }, { status: 400 });
    }
    const tavilyKey = process.env.TAVILY_API_KEY || process.env.NEXT_PUBLIC_TAVILY_API_KEY || "";
    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
    if (!tavilyKey) {
      return import_server6.NextResponse.json({ error: "Tavily API key is not configured" }, { status: 500 });
    }
    const { results, images } = await AiSearchService.searchWeb(query, tavilyKey);
    if (results.length === 0) {
      return import_server6.NextResponse.json({
        answer: "No search results found for your query. Please try a different search term.",
        sources: [],
        images: []
      });
    }
    const context = results.map((item) => `Title: ${item.title}
Content: ${item.content}
URL: ${item.url}`).join("\n\n");
    const systemPrompt = toolPrompt || "You are an AI Search Assistant. Give comprehensive answers using the search results provided. Use headings and bullet points when useful, and always cite your sources.";
    const prompt = `
${systemPrompt}

Question:
${query}

Search Results:
${context}

Instructions:
- Give a comprehensive answer based on search results.
- Use headings and bullet points for readability.
- Cite sources accurately.
`;
    let answer = "";
    if (geminiKey) {
      answer = await AiSearchService.generateAnswer(prompt, geminiKey);
    }
    return import_server6.NextResponse.json({
      answer,
      sources: results,
      images
    });
  } catch (err) {
    console.error("Error in handleSearchPost:", err);
    return import_server6.NextResponse.json(
      { error: err.message || "Failed to process AI search request" },
      { status: 500 }
    );
  }
}

// src/server/messages.handler.ts
var import_server7 = require("next/server");

// src/lib/supabase/client.ts
var import_ssr2 = require("@supabase/ssr");
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
function createClient3() {
  const envUrl = sanitizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL || "");
  const envKey = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "").trim();
  if (typeof window === "undefined") {
    return (0, import_ssr2.createBrowserClient)(envUrl, envKey);
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
          clientSingleton = (0, import_ssr2.createBrowserClient)(cleanUrl, cleanKey);
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
    clientSingleton = (0, import_ssr2.createBrowserClient)(envUrl, envKey);
  }
  return clientSingleton;
}

// src/stores/auth-store.ts
var import_zustand = require("zustand");

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
var useAuthStore = (0, import_zustand.create)()((set) => {
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

// src/features/chattemplate/shared/api/auth.ts
async function getAccessToken() {
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
  try {
    const storeToken = useAuthStore.getState().auth.accessToken;
    if (storeToken && typeof storeToken === "string" && storeToken.split(".").length === 3) {
      return storeToken;
    }
    const supabase2 = createClient3();
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
  async get(path3, options) {
    const headers = await getHeaders(options?.headers);
    const response = await fetch(`${BASE_URL}${path3}`, {
      method: "GET",
      headers
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async post(path3, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path3}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async patch(path3, body, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path3}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      await handleError(response);
    }
    return parseResponse(response);
  },
  async delete(path3, options) {
    const defaultHeaders = {
      "Prefer": "return=representation"
    };
    const headers = await getHeaders({ ...defaultHeaders, ...options?.headers });
    const response = await fetch(`${BASE_URL}${path3}`, {
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
async function getConversationMessages(conversationId, userId, options) {
  try {
    const query = createQuery().select(
      `
        *,
        sender:profiles!sender_user_id (
          id,
          name,
          email,
          avatar
        )
      `
    ).eq("conversation_id", conversationId).eq("owner_user_id", userId).or("deleted.eq.false,deleted_by.not.is.null");
    if (options?.before) query.lt("created_at", options.before);
    query.order("created_at", { ascending: !options?.limit });
    if (options?.limit) query.limit(options.limit);
    const response = await apiClient.get(
      `/rest/v1/chat_messages${query.toString()}`
    );
    const data = options?.limit ? [...response].reverse() : response;
    if (!data) return [];
    const messages = data.map((d) => ({
      id: d.id,
      conversation_id: d.conversation_id,
      owner_user_id: d.owner_user_id,
      sender_user_id: d.sender_user_id,
      message: d.message,
      message_type: d.message_type,
      direction: d.direction,
      sent: d.sent,
      received: d.received,
      created_at: d.created_at,
      message_status: d.message_status || void 0,
      client_message_id: d.client_message_id || void 0,
      queued_at: d.queued_at || void 0,
      delivered_at: d.delivered_at || void 0,
      read_at: d.read_at || void 0,
      retry_count: d.retry_count ? Number(d.retry_count) : void 0,
      file_url: d.file_url || void 0,
      file_name: d.file_name || void 0,
      file_size: d.file_size ? Number(d.file_size) : void 0,
      mime_type: d.mime_type || void 0,
      duration: d.duration ? Number(d.duration) : void 0,
      thumbnail: d.thumbnail || void 0,
      file_content_text: d.file_content_text || void 0,
      file_content_json: d.file_content_json || void 0,
      processing_status: d.processing_status || void 0,
      thumb: !!d.thumb,
      favorite: !!d.favorite,
      flag: !!d.flag,
      star: !!d.star,
      pin: !!d.pin,
      archive: !!d.archive,
      deleted: !!d.deleted,
      action_this: !!d.action_this,
      reply: !!d.reply,
      forward: !!d.forward,
      deleted_at: d.deleted_at || void 0,
      deleted_by: d.deleted_by || void 0,
      replyemoji: d.replyemoji || void 0,
      replyto_message_id: d.replyto_message_id || void 0,
      replyto_user_id: d.replyto_user_id || void 0,
      parent_message_id: d.parent_message_id || void 0,
      forwardemoji: d.forwardemoji || void 0,
      forwardto_message_id: d.forwardto_message_id || void 0,
      forwardto_user_id: d.forwardto_user_id || void 0,
      sender_message_id: d.sender_message_id || void 0,
      sender: d.sender ? {
        id: d.sender.id,
        name: d.sender.name,
        email: d.sender.email,
        avatar_url: d.sender.avatar || void 0
      } : void 0,
      location_data: d.location_data || void 0,
      location_type: d.location_type || void 0
    }));
    for (const msg of messages) {
      if (msg.reply && msg.replyto_message_id) {
        const localReply = messages.find(
          (candidate) => candidate.id === msg.replyto_message_id || candidate.sender_message_id === msg.replyto_message_id
        );
        if (localReply) {
          msg.replyto_message = localReply;
          msg.replyMetadata = {
            replyemoji: msg.replyemoji || null,
            replyto_message_id: msg.replyto_message_id,
            replyto_user_id: msg.replyto_user_id || null,
            parent_message_id: msg.parent_message_id || null,
            replyMessageText: localReply.deleted ? "Original message unavailable" : localReply.message_type === "text" ? localReply.message || "" : `Attachment: ${localReply.file_name || "File"}`,
            replySenderName: localReply.sender?.name || "User"
          };
          continue;
        }
        const replyQuery = createQuery().select(
          `
            id,
            sender_user_id,
            created_at,
            message,
            message_type,
            file_name,
            deleted,
            sender:profiles!sender_user_id(name)
          `
        ).eq("id", msg.replyto_message_id).limit(1);
        try {
          const replyMsgs = await apiClient.get(
            `/rest/v1/chat_messages${replyQuery.toString()}`
          );
          const replyMsg = replyMsgs[0] || null;
          if (replyMsg) {
            msg.replyto_message = {
              id: replyMsg.id,
              conversation_id: msg.conversation_id,
              owner_user_id: msg.owner_user_id,
              sender_user_id: replyMsg.sender_user_id,
              message: replyMsg.deleted ? "Original message unavailable" : replyMsg.message,
              message_type: replyMsg.message_type || "text",
              direction: "Received",
              sent: true,
              received: true,
              created_at: replyMsg.created_at || msg.created_at,
              file_name: replyMsg.file_name || void 0,
              thumb: false,
              favorite: false,
              flag: false,
              star: false,
              pin: false,
              archive: false,
              deleted: !!replyMsg.deleted,
              action_this: false,
              reply: false,
              forward: false,
              sender: replyMsg.sender ? {
                id: replyMsg.sender_user_id,
                name: replyMsg.sender.name || "User",
                email: ""
              } : void 0
            };
            msg.replyMetadata = {
              replyemoji: msg.replyemoji || null,
              replyto_message_id: msg.replyto_message_id,
              replyto_user_id: msg.replyto_user_id || null,
              parent_message_id: msg.parent_message_id || null,
              replyMessageText: replyMsg.deleted ? "Original message unavailable" : replyMsg.message_type === "text" ? replyMsg.message : `Attachment: ${replyMsg.file_name || "File"}`,
              replySenderName: replyMsg.sender?.name || "User"
            };
          } else {
            msg.replyMetadata = {
              replyemoji: msg.replyemoji || null,
              replyto_message_id: msg.replyto_message_id,
              replyto_user_id: msg.replyto_user_id || null,
              parent_message_id: msg.parent_message_id || null,
              replyMessageText: "Original message unavailable",
              replySenderName: "User"
            };
          }
        } catch (e) {
          console.warn(
            "[Messages API] Failed to fetch reply message details:",
            e
          );
        }
      }
    }
    return messages;
  } catch (e) {
    console.error("[Messages API] Failed to get conversation messages:", e);
    return [];
  }
}
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
async function getConversationMessages2(conversationId, userId, options) {
  return getConversationMessages(conversationId, userId, options);
}
async function createMessage2(msg) {
  return createMessage(msg);
}

// src/features/chattemplate/chat/api/conversations.api.ts
async function getUserConversations(userId) {
  try {
    const businessUserId = stringToUuid(userId);
    const memberQuery = createQuery().select("conversation_id").eq("user_id", businessUserId);
    const memberOf = await apiClient.get(`/rest/v1/conversation_members${memberQuery.toString()}`);
    if (!memberOf || memberOf.length === 0) return [];
    const convoIds = memberOf.map((m) => m.conversation_id);
    const convosQuery = createQuery().select(`
        *,
        conversation_members (
          role,
          joined_at,
          user_id,
          unread_count,
          profiles (
            id,
            name,
            email,
            avatar,
            last_seen
          )
        ),
        chat_messages (
          id,
          conversation_id,
          sender_user_id,
          message,
          message_type,
          file_url,
          file_name,
          file_size,
          mime_type,
          duration,
          created_at,
          deleted,
          deleted_by,
          message_status
        )
      `).in("id", convoIds).eq("chat_messages.owner_user_id", businessUserId);
    const convos = await apiClient.get(`/rest/v1/conversations${convosQuery.toString()}`);
    if (!convos) return [];
    const mapped = convos.map((c) => {
      const members = (c.conversation_members || []).map((cm) => {
        if (!cm.profiles) return null;
        return {
          id: cm.profiles.id,
          name: cm.profiles.name,
          email: cm.profiles.email,
          avatar_url: cm.profiles.avatar || void 0,
          last_seen: cm.profiles.last_seen || void 0
        };
      }).filter(Boolean);
      const messageCopies = [...c.chat_messages || []].filter((m) => !m.deleted || m.deleted_by !== null).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      const lastMessage = messageCopies[0] || void 0;
      let displayName = c.name || "";
      let displayImage = c.image || "";
      if (c.type === "direct") {
        const otherMember = members.find((m) => m.id !== businessUserId);
        if (otherMember) {
          displayName = otherMember.name;
          displayImage = otherMember.avatar_url || "";
        } else {
          displayName = "Chat Note (You)";
          const selfMember = members.find((m) => m.id === businessUserId);
          displayImage = selfMember?.avatar_url || "";
        }
      }
      const selfMemberRecord = (c.conversation_members || []).find((cm) => cm.user_id === businessUserId);
      const unreadCount = selfMemberRecord?.unread_count || 0;
      return {
        id: c.id,
        type: c.type,
        name: displayName,
        image: displayImage,
        created_by: c.created_by || void 0,
        created_at: c.created_at,
        lastMessage: lastMessage ? {
          id: lastMessage.id,
          conversation_id: lastMessage.conversation_id,
          sender_user_id: lastMessage.sender_user_id || "system",
          message: lastMessage.message || "",
          message_type: lastMessage.message_type,
          file_url: lastMessage.file_url || void 0,
          file_name: lastMessage.file_name || void 0,
          file_size: lastMessage.file_size || void 0,
          mime_type: lastMessage.mime_type || void 0,
          duration: lastMessage.duration || void 0,
          created_at: lastMessage.created_at,
          deleted: !!lastMessage.deleted
        } : void 0,
        unreadCount,
        members
      };
    });
    const seenDirectRecipients = /* @__PURE__ */ new Set();
    const deduplicated = [];
    const sorted = [...mapped].sort((a, b) => {
      const timeA = a.lastMessage ? new Date(a.lastMessage.created_at).getTime() : new Date(a.created_at).getTime();
      const timeB = b.lastMessage ? new Date(b.lastMessage.created_at).getTime() : new Date(b.created_at).getTime();
      return timeB - timeA;
    });
    for (const convo of sorted) {
      if (convo.type === "direct") {
        const otherMember = convo.members.find((m) => m.id !== businessUserId);
        const recipientId = otherMember ? otherMember.id : businessUserId;
        if (seenDirectRecipients.has(recipientId)) {
          continue;
        }
        seenDirectRecipients.add(recipientId);
      }
      deduplicated.push(convo);
    }
    return deduplicated;
  } catch (err) {
    console.error("[Conversations API] Failed to get user conversations:", err);
    return [];
  }
}
async function getOrCreateDirectConversation(userAId, userBId) {
  try {
    const businessUserAId = userAId;
    const businessUserBId = userBId;
    const queryA = createQuery().select("conversation_id, conversations!inner(*)").eq("user_id", businessUserAId).eq("conversations.type", "direct");
    const membersA = await apiClient.get(`/rest/v1/conversation_members${queryA.toString()}`);
    if (membersA && membersA.length > 0) {
      const convoIds = membersA.map((m) => m.conversation_id);
      const queryB = createQuery().select("conversation_id").in("conversation_id", convoIds).eq("user_id", businessUserBId);
      const membersB = await apiClient.get(`/rest/v1/conversation_members${queryB.toString()}`);
      if (membersB && membersB.length > 0) {
        return membersB[0].conversation_id;
      }
    }
    const insertedConvos = await apiClient.post("/rest/v1/conversations", {
      type: "direct",
      created_by: businessUserAId
    });
    const newConvo = insertedConvos[0] || null;
    if (!newConvo) {
      throw new Error("Failed to create conversation.");
    }
    const membersToInsert = [
      { conversation_id: newConvo.id, user_id: businessUserAId }
    ];
    if (businessUserAId !== businessUserBId) {
      membersToInsert.push({ conversation_id: newConvo.id, user_id: businessUserBId });
    }
    await apiClient.post("/rest/v1/conversation_members", membersToInsert);
    return newConvo.id;
  } catch (err) {
    console.error("[Conversations API] Failed to get or create direct conversation:", err);
    return null;
  }
}

// src/features/chattemplate/chat/repositories/conversation-repository.ts
async function getUserConversations2(userId) {
  return getUserConversations(userId);
}
async function getOrCreateDirectConversation2(userAId, userBId) {
  return getOrCreateDirectConversation(userAId, userBId);
}

// src/server/messages.handler.ts
async function handleMessagesGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get("conversationId");
    const recipientId = searchParams.get("recipientId");
    const senderId = searchParams.get("senderId");
    if (!conversationId && !recipientId) {
      return import_server7.NextResponse.json({ error: "conversationId or recipientId is required" }, { status: 400 });
    }
    if (!senderId) {
      return import_server7.NextResponse.json({ error: "senderId (owner_user_id) is required" }, { status: 400 });
    }
    let targetConvoId = conversationId;
    if (!targetConvoId && recipientId) {
      targetConvoId = await getOrCreateDirectConversation2(senderId, recipientId);
    }
    if (!targetConvoId) {
      return import_server7.NextResponse.json([]);
    }
    const messages = await getConversationMessages2(targetConvoId, senderId);
    return import_server7.NextResponse.json(messages);
  } catch (err) {
    console.error("GET messages error:", err);
    return import_server7.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
async function handleMessagesPost(request) {
  try {
    const body = await request.json();
    const isAttachment = body.messageType && body.messageType !== "text";
    const hasContent = body.message?.trim() || isAttachment && body.fileUrl;
    if (!hasContent) {
      return import_server7.NextResponse.json(
        { error: "message (or fileUrl for attachments) is required" },
        { status: 400 }
      );
    }
    let targetConvoId = body.conversationId;
    if (!targetConvoId && body.recipientId) {
      const senderId = body.senderId;
      if (!senderId) {
        return import_server7.NextResponse.json(
          { error: "senderId is required to resolve conversation" },
          { status: 400 }
        );
      }
      targetConvoId = await getOrCreateDirectConversation2(senderId, body.recipientId);
    }
    if (!targetConvoId) {
      return import_server7.NextResponse.json(
        { error: "Could not resolve or create conversation" },
        { status: 400 }
      );
    }
    const msg = await createMessage2({
      conversationId: targetConvoId,
      senderId: body.senderId,
      message: body.message,
      messageType: body.messageType || "text",
      fileUrl: body.fileUrl,
      replyMetadata: body.replyToMessageId ? {
        replyto_message_id: body.replyToMessageId,
        replyto_user_id: body.replyToUserId || null,
        replyemoji: null,
        parent_message_id: null
      } : void 0,
      locationData: body.location
    });
    if (!msg) {
      return import_server7.NextResponse.json(
        { error: "Failed to create message" },
        { status: 500 }
      );
    }
    return import_server7.NextResponse.json(msg, { status: 201 });
  } catch (err) {
    console.error("POST message error:", err);
    return import_server7.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create message" },
      { status: 500 }
    );
  }
}

// src/server/contacts.handler.ts
var import_server8 = require("next/server");

// src/features/chattemplate/contacts/api/contacts.mapper.ts
function mapToContact(dbRecord) {
  const u = dbRecord.contact_user || {};
  const contactEmail = dbRecord.email || u.email || "";
  return {
    id: dbRecord.id,
    ownerId: dbRecord.owner_id,
    contactUserId: dbRecord.contact_user_id,
    fullName: dbRecord.nickname || u.name || contactEmail.split("@")[0] || "Unknown",
    email: contactEmail,
    avatarUrl: u.avatar || void 0,
    company: u.company || void 0,
    mobile: u.mobile || void 0,
    status: "Active",
    nickname: dbRecord.nickname || void 0,
    createdAt: dbRecord.created_at
  };
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
  const supabase2 = createClient3();
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
async function triggerContactAlert(action, ownerId, contactUserId) {
  const supabase2 = createClient3();
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
  const supabase2 = createClient3();
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

// src/features/chattemplate/chat/services/chat-storage.service.ts
async function initializeContactStorage(contactEmail) {
  return Promise.resolve();
}

// src/features/chattemplate/contacts/api/contacts.api.ts
async function getContacts(userId) {
  try {
    const validUserId = stringToUuid(userId);
    const query = createQuery().select(`
        id,
        owner_id,
        contact_user_id,
        nickname,
        email,
        created_at,
        contact_user:profiles!contacts_contact_user_id_fkey (
          id,
          name,
          email,
          avatar,
          company,
          mobile
        )
      `).eq("owner_id", validUserId).order("created_at", { ascending: false });
    const data = await apiClient.get(`/rest/v1/contacts${query.toString()}`);
    if (!data) return [];
    return data.map(mapToContact);
  } catch (error) {
    console.error("[Contacts API] Failed to get user contacts:", error);
    return [];
  }
}
async function createContact(ownerId, contactEmail, nickname, ownerEmail) {
  try {
    const validOwnerId = stringToUuid(ownerId);
    const emailLower = contactEmail.trim().toLowerCase();
    const profileQuery = createQuery().select("id, name, email, avatar, company, mobile").eq("email", emailLower).limit(1);
    const profiles = await apiClient.get(`/rest/v1/profiles${profileQuery.toString()}`);
    const profile = profiles[0] || null;
    if (profile && profile.id === validOwnerId) {
      return { success: false, error: "You cannot add yourself as a contact." };
    }
    if (profile) {
      const existingQuery = createQuery().select("id").eq("owner_id", validOwnerId).or(`email.ilike.${emailLower},contact_user_id.eq.${profile.id}`).limit(1);
      const existing = await apiClient.get(`/rest/v1/contacts${existingQuery.toString()}`);
      if (existing.length > 0) {
        return { success: false, error: "This contact is already in your list." };
      }
    } else {
      const existingQuery = createQuery().select("id").eq("owner_id", validOwnerId).ilike("email", emailLower).limit(1);
      const existing = await apiClient.get(`/rest/v1/contacts${existingQuery.toString()}`);
      if (existing.length > 0) {
        return { success: false, error: "This contact is already in your list." };
      }
    }
    let contactUserId;
    if (profile) {
      contactUserId = profile.id;
    } else {
      const displayName = nickname || emailLower.split("@")[0];
      const newUserId = crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
      const newProfileData = {
        id: newUserId,
        email: emailLower,
        name: displayName,
        avatar: null,
        company: null,
        mobile: null,
        status: "offline",
        online: false,
        offline: true,
        last_seen: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      const insertedProfiles = await apiClient.post("/rest/v1/profiles", newProfileData);
      const newProfile = insertedProfiles[0] || null;
      if (!newProfile) {
        return { success: false, error: "Failed to create contact profile." };
      }
      contactUserId = newProfile.id;
    }
    const contactData = {
      owner_id: validOwnerId,
      contact_user_id: contactUserId,
      nickname: nickname?.trim() || null,
      email: emailLower,
      user_uuid: validOwnerId
    };
    await apiClient.post("/rest/v1/contacts", contactData);
    triggerContactAlert("create", ownerId, contactUserId).catch(
      (err) => console.error("[DB Alerts] Error sending contact created alert:", err)
    );
    if (emailLower) {
      void initializeContactStorage(emailLower).catch(
        (err) => console.error("[Contact Storage] Error initializing contact file space:", err)
      );
    }
    if (ownerEmail) {
      void initializeContactStorage(ownerEmail).catch(
        (err) => console.error("[Contact Storage] Error initializing owner file space:", err)
      );
    }
    return { success: true };
  } catch (error) {
    console.error("[Contacts API] Failed to create contact:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to create contact" };
  }
}

// src/features/chattemplate/contacts/repositories/contact-repository.ts
async function getUserContacts(userId) {
  return getContacts(userId);
}
async function createContact2(ownerId, contactEmail, nickname, ownerEmail) {
  return createContact(ownerId, contactEmail, nickname, ownerEmail);
}

// src/server/contacts.handler.ts
async function handleContactsGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return import_server8.NextResponse.json({ error: "userId query parameter is required" }, { status: 400 });
    }
    const contacts = await getUserContacts(userId);
    return import_server8.NextResponse.json(contacts);
  } catch (err) {
    console.error("GET contacts error:", err);
    return import_server8.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
async function handleContactsPost(request) {
  try {
    const body = await request.json();
    if (!body.ownerId) {
      return import_server8.NextResponse.json({ error: "ownerId is required" }, { status: 400 });
    }
    if (!body.email) {
      return import_server8.NextResponse.json({ error: "email is required" }, { status: 400 });
    }
    const result = await createContact2(body.ownerId, body.email, body.nickname);
    if (!result.success) {
      return import_server8.NextResponse.json({ error: result.error || "Failed to create contact" }, { status: 409 });
    }
    return import_server8.NextResponse.json({ success: true, message: "Contact added successfully" }, { status: 201 });
  } catch (err) {
    console.error("POST contact error:", err);
    return import_server8.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create contact" },
      { status: 500 }
    );
  }
}

// src/server/conversations.handler.ts
var import_server9 = require("next/server");
async function handleConversationsGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return import_server9.NextResponse.json({ error: "userId query parameter is required" }, { status: 400 });
    }
    const conversations = await getUserConversations2(userId);
    return import_server9.NextResponse.json(conversations);
  } catch (err) {
    console.error("GET conversations error:", err);
    return import_server9.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}

// src/server/groups.handler.ts
var import_server10 = require("next/server");

// src/features/chattemplate/groups/api/groups.mapper.ts
function mapToGroup(dbRecord) {
  return {
    id: dbRecord.id,
    groupName: dbRecord.name,
    description: dbRecord.description || "",
    groupImage: dbRecord.image_url || "",
    users: Array.isArray(dbRecord.users) ? dbRecord.users : [],
    status: dbRecord.status,
    email: dbRecord.email || void 0,
    userUuid: dbRecord.user_uuid || void 0,
    createdAt: dbRecord.created_at,
    updatedAt: dbRecord.updated_at
  };
}

// src/features/chattemplate/groups/api/groups.api.ts
async function saveGroup(group) {
  const id = group.id || crypto.randomUUID();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let userUuid = null;
  const groupEmail = group.email?.trim().toLowerCase();
  if (group.userUuid) {
    userUuid = group.userUuid;
  } else if (groupEmail) {
    try {
      const profileQuery = createQuery().select("id").eq("email", groupEmail).limit(1);
      const profiles = await apiClient.get(`/rest/v1/profiles${profileQuery.toString()}`);
      const existing = profiles[0] || null;
      if (existing) {
        userUuid = existing.id;
      } else {
        const newUserId = crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
        const newProfile = {
          id: newUserId,
          email: groupEmail,
          name: group.groupName || groupEmail.split("@")[0],
          avatar: group.groupImage || null,
          status: "offline",
          online: false,
          offline: true,
          last_seen: now,
          updated_at: now
        };
        const inserted = await apiClient.post("/rest/v1/profiles", newProfile);
        if (inserted && inserted[0]) {
          userUuid = inserted[0].id;
        }
      }
    } catch (err) {
      console.error("[Groups API] Failed to get or create group user:", err);
    }
  }
  console.log("[Groups API] Saving group with userUuid:", userUuid);
  const record = {
    id,
    name: group.groupName,
    description: group.description || null,
    image_url: group.groupImage || null,
    users: group.users || [],
    status: group.status || "Active",
    email: groupEmail || null,
    user_uuid: userUuid,
    created_at: group.createdAt || now,
    updated_at: now
  };
  let isNew = true;
  try {
    const checkQuery = createQuery().select("id").eq("id", id).limit(1);
    const existing = await apiClient.get(`/rest/v1/chat_group${checkQuery.toString()}`);
    if (existing && existing.length > 0) {
      isNew = false;
    }
  } catch (err) {
  }
  try {
    const data = await apiClient.post("/rest/v1/chat_group", record, {
      headers: {
        "Prefer": "resolution=merge-duplicates,return=representation"
      }
    });
    const savedRecord = data && data[0] ? data[0] : null;
    if (!savedRecord) {
      return null;
    }
    triggerGroupAlert(isNew ? "create" : "update", userUuid || "", group.groupName).catch(
      (err) => console.error("[DB Alerts] Error sending group saved alert:", err)
    );
    return mapToGroup(savedRecord);
  } catch (error) {
    console.error("[Groups API] Supabase saveGroup error:", error);
    return null;
  }
}

// src/features/chattemplate/groups/repositories/group-repository.ts
async function saveGroup2(group) {
  return saveGroup(group);
}

// src/server/groups.handler.ts
var import_supabase_js3 = require("@supabase/supabase-js");
async function handleGroupsGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    if (!email) {
      return import_server10.NextResponse.json([]);
    }
    const supabaseUrl2 = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey2 = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    if (!supabaseUrl2 || !supabaseAnonKey2) {
      return import_server10.NextResponse.json([]);
    }
    const supabase2 = (0, import_supabase_js3.createClient)(supabaseUrl2, supabaseAnonKey2);
    const { data, error } = await supabase2.from("chat_group").select("*").contains("users", JSON.stringify([email])).order("created_at", { ascending: false });
    if (error) throw error;
    const mapped = (data || []).map((d) => ({
      id: d.id,
      groupName: d.name,
      description: d.description || "",
      groupImage: d.image_url || "",
      users: Array.isArray(d.users) ? d.users : [],
      status: d.status,
      email: d.email || void 0,
      userUuid: d.user_uuid || void 0,
      createdAt: d.created_at,
      updatedAt: d.updated_at
    }));
    return import_server10.NextResponse.json(mapped);
  } catch (err) {
    console.error("GET groups error:", err);
    return import_server10.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch groups" },
      { status: 500 }
    );
  }
}
async function handleGroupsPost(request) {
  try {
    const body = await request.json();
    if (!body.groupName || !body.users || !body.status || !body.email) {
      return import_server10.NextResponse.json(
        { error: "groupName, users, status, and email are required fields" },
        { status: 400 }
      );
    }
    const saved = await saveGroup2({
      groupName: body.groupName,
      description: body.description,
      groupImage: body.groupImage,
      users: body.users,
      status: body.status,
      email: body.email,
      userUuid: body.userUuid
    });
    if (!saved) {
      return import_server10.NextResponse.json({ error: "Failed to create group in database" }, { status: 500 });
    }
    return import_server10.NextResponse.json(saved, { status: 201 });
  } catch (err) {
    console.error("POST group error:", err);
    return import_server10.NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error while creating group" },
      { status: 500 }
    );
  }
}

// src/server/profiles.handler.ts
var import_server11 = require("next/server");

// src/features/chattemplate/chat/api/profiles.api.ts
async function getProfileByEmail(email) {
  try {
    const query = createQuery().select("*").eq("email", email).limit(1);
    const profiles = await apiClient.get(`/rest/v1/profiles${query.toString()}`);
    const data = profiles[0] || null;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      avatar_url: data.avatar || void 0
    };
  } catch (err) {
    console.error("[profiles.api] Failed to get profile by email:", err);
    return null;
  }
}
async function getAllProfiles() {
  try {
    const query = createQuery().select("*").order("name", { ascending: true });
    const data = await apiClient.get(`/rest/v1/profiles${query.toString()}`);
    if (!data) return [];
    return data.map((d) => ({
      id: d.id,
      name: d.name,
      email: d.email,
      avatar_url: d.avatar || void 0
    }));
  } catch (err) {
    console.error("[profiles.api] Failed to get all profiles:", err);
    return [];
  }
}

// src/features/chattemplate/chat/repositories/profile-repository.ts
async function getProfileByEmail2(email) {
  return getProfileByEmail(email);
}
async function getAllProfiles2() {
  return getAllProfiles();
}

// src/server/profiles.handler.ts
async function handleProfilesGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    if (email) {
      const profile = await getProfileByEmail2(email);
      if (!profile) {
        return import_server11.NextResponse.json({ error: "Profile not found" }, { status: 404 });
      }
      return import_server11.NextResponse.json(profile);
    }
    const profiles = await getAllProfiles2();
    return import_server11.NextResponse.json(profiles);
  } catch (err) {
    console.error("GET profiles error:", err);
    return import_server11.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch profiles" },
      { status: 500 }
    );
  }
}

// src/server/notifications.handler.ts
var import_server12 = require("next/server");
async function handleNotificationsGet(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const readFilter = searchParams.get("read");
    const limit = searchParams.get("limit");
    if (!userId) {
      return import_server12.NextResponse.json({ error: "userId query parameter is required" }, { status: 400 });
    }
    const query = createQuery().select("*").eq("user_id", userId).order("created_at", { ascending: false });
    if (readFilter !== null) {
      query.eq("read", readFilter);
    }
    if (limit) {
      query.limit(parseInt(limit, 10));
    }
    const notifications = await apiClient.get(`/rest/v1/notifications${query.toString()}`);
    return import_server12.NextResponse.json(notifications);
  } catch (err) {
    console.error("GET notifications error:", err);
    return import_server12.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch notifications" },
      { status: 500 }
    );
  }
}
async function handleNotificationsPost(request) {
  try {
    const body = await request.json();
    if (!body.userId || !body.messageText) {
      return import_server12.NextResponse.json(
        { error: "userId and messageText are required" },
        { status: 400 }
      );
    }
    const newNotification = await apiClient.post("/rest/v1/notifications", {
      user_id: body.userId,
      sender_id: body.senderId || null,
      message_id: body.messageId || null,
      message_text: body.messageText,
      read: false
    });
    return import_server12.NextResponse.json(newNotification, { status: 201 });
  } catch (err) {
    console.error("POST notification error:", err);
    return import_server12.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create notification" },
      { status: 500 }
    );
  }
}
async function handleNotificationsPatch(request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return import_server12.NextResponse.json({ error: "id is required" }, { status: 400 });
    }
    const query = createQuery().eq("id", body.id);
    const updated = await apiClient.patch(`/rest/v1/notifications${query.toString()}`, {
      read: body.read !== void 0 ? body.read : true
    });
    return import_server12.NextResponse.json(updated);
  } catch (err) {
    console.error("PATCH notification error:", err);
    return import_server12.NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to update notification" },
      { status: 500 }
    );
  }
}

// src/server/mail.handler.ts
var import_server13 = require("next/server");

// src/lib/email/imap.ts
var import_imapflow = require("imapflow");

// config/mail.json
var mail_default = {
  email: "ask@morrai.com",
  password: "0un:ZX3JOs&E",
  smtp: {
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    requireTLS: true
  },
  imap: {
    host: "imap.hostinger.com",
    port: 993,
    secure: true
  }
};

// src/lib/email/imap.ts
function createImapClient() {
  return new import_imapflow.ImapFlow({
    host: mail_default.imap.host,
    port: mail_default.imap.port,
    secure: mail_default.imap.secure,
    auth: {
      user: mail_default.email,
      pass: mail_default.password
    },
    // Hostinger and some other providers benefit from lower concurrency/logger configurations
    logger: false
  });
}

// src/lib/email/email-parser.ts
var import_mailparser = require("mailparser");
async function parseEmail(source, seq, isRead) {
  const parsed = await (0, import_mailparser.simpleParser)(source);
  let fromAddress = "";
  const fromObj = parsed.from;
  if (fromObj && fromObj.value && fromObj.value.length > 0) {
    const fromVal = fromObj.value[0];
    fromAddress = fromVal.address || fromVal.name || "";
  }
  let toAddress = "";
  const toObj = parsed.to;
  if (toObj && toObj.value && toObj.value.length > 0) {
    const toVal = toObj.value[0];
    toAddress = toVal.address || toVal.name || "";
  }
  const formatSize2 = (bytes) => {
    if (!bytes || bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };
  const attachments = (parsed.attachments || []).map((att, idx) => {
    const mimeType = att.contentType || "application/octet-stream";
    let fileUrl = "";
    let formattedSize = formatSize2(att.size || (att.content ? att.content.length : 0));
    if (att.content) {
      try {
        const buf = Buffer.isBuffer(att.content) ? att.content : Buffer.from(att.content);
        fileUrl = `data:${mimeType};base64,${buf.toString("base64")}`;
      } catch (err) {
        console.error("Error processing attachment:", err);
      }
    }
    return {
      id: `att-${seq}-${idx}`,
      name: att.filename || `attachment-${idx + 1}`,
      type: mimeType,
      size: formattedSize,
      url: fileUrl
    };
  });
  return {
    id: String(seq),
    from: fromAddress,
    fromName: parsed.from?.text || fromAddress,
    to: toAddress,
    subject: parsed.subject || "(No Subject)",
    date: parsed.date ? parsed.date.toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
    text: parsed.text || "",
    html: parsed.html || parsed.textAsHtml || "",
    isRead,
    attachments
  };
}

// src/lib/email/mailer.ts
var import_nodemailer = __toESM(require("nodemailer"));
var transporter = import_nodemailer.default.createTransport({
  host: mail_default.smtp.host,
  port: mail_default.smtp.port,
  secure: mail_default.smtp.secure,
  requireTLS: mail_default.smtp.requireTLS,
  auth: {
    user: mail_default.email,
    pass: mail_default.password
  }
});

// src/lib/email/attachment-storage.ts
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var UPLOAD_DIR = import_path2.default.join(process.cwd(), "public", "uploads", "mail-attachments");
function ensureDirectoryExists() {
  if (!import_fs2.default.existsSync(UPLOAD_DIR)) {
    import_fs2.default.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}
function formatSize(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
function saveAttachmentLocally(originalFilename, content) {
  try {
    ensureDirectoryExists();
    const sanitizeName = (originalFilename || "attachment").replace(/[^a-zA-Z0-9._-]/g, "_").substring(0, 100);
    const timestamp = Date.now();
    const safeFilename = `${timestamp}_${sanitizeName}`;
    const filePath = import_path2.default.join(UPLOAD_DIR, safeFilename);
    let buffer;
    if (Buffer.isBuffer(content)) {
      buffer = content;
    } else if (typeof content === "string") {
      let raw = content;
      if (raw.includes(";base64,")) {
        raw = raw.split(";base64,").pop() || "";
      }
      buffer = Buffer.from(raw, "base64");
    } else {
      buffer = Buffer.from(content);
    }
    import_fs2.default.writeFileSync(filePath, buffer);
    const publicUrl = `/uploads/mail-attachments/${safeFilename}`;
    const formattedSize = formatSize(buffer.length);
    return {
      url: publicUrl,
      size: formattedSize
    };
  } catch (err) {
    console.error("Failed to save attachment locally:", err);
    return {
      url: "",
      size: "0 B"
    };
  }
}

// src/server/mail.handler.ts
async function handleMailInboxGet(request) {
  const url = new URL(request.url);
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
  const limit = Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10));
  const client = createImapClient();
  let hasMore = false;
  let totalMessages = 0;
  try {
    await client.connect();
    const lock = await client.getMailboxLock("INBOX");
    const emailsList = [];
    try {
      const status = await client.status("INBOX", { messages: true });
      totalMessages = status.messages || 0;
      if (totalMessages > 0) {
        const offset = (page - 1) * limit;
        const endSeq = Math.max(0, totalMessages - offset);
        const startSeq = Math.max(1, endSeq - limit + 1);
        if (endSeq >= 1) {
          const range = `${startSeq}:${endSeq}`;
          hasMore = startSeq > 1;
          for await (const message of client.fetch(range, { source: true, flags: true })) {
            const isRead = message.flags && message.flags.has("\\Seen");
            try {
              const parsed = await parseEmail(message.source, message.seq, !!isRead);
              emailsList.push(parsed);
            } catch (parseErr) {
              console.error(`Failed to parse email sequence ${message.seq}:`, parseErr);
            }
          }
          emailsList.reverse();
        }
      }
    } finally {
      lock.release();
    }
    await client.logout();
    return import_server13.NextResponse.json({
      success: true,
      emails: emailsList,
      hasMore,
      total: totalMessages,
      page,
      limit
    });
  } catch (error) {
    console.error("Error reading mailbox via IMAP:", error);
    try {
      await client.logout();
    } catch (_) {
    }
    return import_server13.NextResponse.json(
      {
        success: false,
        message: `Failed to load inbox emails: ${error.message || error}`
      },
      { status: 500 }
    );
  }
}
async function handleMailSentGet(request) {
  const url = new URL(request.url);
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
  const limit = Math.max(1, parseInt(url.searchParams.get("limit") || "20", 10));
  const client = createImapClient();
  let hasMore = false;
  let totalMessages = 0;
  try {
    await client.connect();
    let mailboxName = "INBOX.Sent";
    let lock;
    try {
      lock = await client.getMailboxLock(mailboxName);
    } catch (_) {
      mailboxName = "Sent";
      lock = await client.getMailboxLock(mailboxName);
    }
    const emailsList = [];
    try {
      const status = await client.status(mailboxName, { messages: true });
      totalMessages = status.messages || 0;
      if (totalMessages > 0) {
        const offset = (page - 1) * limit;
        const endSeq = Math.max(0, totalMessages - offset);
        const startSeq = Math.max(1, endSeq - limit + 1);
        if (endSeq >= 1) {
          const range = `${startSeq}:${endSeq}`;
          hasMore = startSeq > 1;
          for await (const message of client.fetch(range, { source: true, flags: true })) {
            try {
              const parsed = await parseEmail(message.source, message.seq, true);
              emailsList.push({
                ...parsed,
                isSent: true
              });
            } catch (parseErr) {
              console.error(`Failed to parse sent email sequence ${message.seq}:`, parseErr);
            }
          }
          emailsList.reverse();
        }
      }
    } finally {
      if (lock) {
        lock.release();
      }
    }
    await client.logout();
    return import_server13.NextResponse.json({
      success: true,
      emails: emailsList,
      hasMore,
      total: totalMessages,
      page,
      limit
    });
  } catch (error) {
    console.error("Error reading sent mailbox via IMAP:", error);
    try {
      await client.logout();
    } catch (_) {
    }
    return import_server13.NextResponse.json(
      {
        success: false,
        message: `Failed to load sent emails: ${error.message || error}`
      },
      { status: 500 }
    );
  }
}
async function handleMailSendPost(request) {
  try {
    const body = await request.json();
    const { to, subject, html } = body;
    if (!to || !subject || !html) {
      return import_server13.NextResponse.json(
        {
          success: false,
          message: "Validation failed: 'to', 'subject', and 'html' are required fields."
        },
        { status: 400 }
      );
    }
    const attachments = (body.attachments || []).map((att) => {
      let rawContent = att.content || att.url || "";
      const filename = att.filename || att.name || "attachment";
      const contentType = att.contentType || att.type || "application/octet-stream";
      const saved = saveAttachmentLocally(filename, rawContent);
      if (rawContent.includes(";base64,")) {
        rawContent = rawContent.split(";base64,").pop() || "";
      }
      return {
        filename,
        contentType,
        content: Buffer.from(rawContent, "base64"),
        url: saved.url,
        size: saved.size
      };
    });
    const mailOptions = {
      from: body.from || `"${mail_default.email.split("@")[0]}" <${mail_default.email}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html
    };
    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }
    const info = await transporter.sendMail(mailOptions);
    try {
      const MailComposer = require("nodemailer/lib/mail-composer");
      const composer = new MailComposer(mailOptions);
      const rawMimeBuffer = await composer.compile().build();
      const client = createImapClient();
      await client.connect();
      await client.append("INBOX.Sent", rawMimeBuffer, ["\\Seen"]);
      await client.logout();
    } catch (imapErr) {
      console.warn("Could not save to IMAP INBOX.Sent:", imapErr);
    }
    const returnedAttachments = attachments.map((att, idx) => ({
      id: `sent-att-${Date.now()}-${idx}`,
      name: att.filename,
      type: att.contentType,
      size: att.size,
      url: att.url
    }));
    return import_server13.NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
      attachments: returnedAttachments
    });
  } catch (error) {
    console.error("Error sending email via Nodemailer:", error);
    return import_server13.NextResponse.json(
      {
        success: false,
        message: `Failed to send email: ${error.message || error}`
      },
      { status: 500 }
    );
  }
}
async function handleMailTestGet() {
  try {
    await transporter.verify();
    return import_server13.NextResponse.json({
      success: true,
      message: "SMTP connection successful"
    });
  } catch (error) {
    console.error("SMTP verification error:", error);
    return import_server13.NextResponse.json(
      {
        success: false,
        message: `SMTP connection failed: ${error.message || error}`
      },
      { status: 500 }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UI_RENDER_SYSTEM_PROMPT,
  handleChatPost,
  handleContactsGet,
  handleContactsPost,
  handleConversationsGet,
  handleGeocodeRequest,
  handleGroupsGet,
  handleGroupsPost,
  handleMailInboxGet,
  handleMailSendPost,
  handleMailSentGet,
  handleMailTestGet,
  handleMessagesGet,
  handleMessagesPost,
  handleNotificationsGet,
  handleNotificationsPatch,
  handleNotificationsPost,
  handleProfilesGet,
  handleSearchPost,
  handleShortenOptions,
  handleShortenPost,
  handleVouchersGet,
  handleVouchersPost
});
//# sourceMappingURL=server.js.map