'use client';

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

// src/stores/notification-store.ts
import { create as create2 } from "zustand";

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

// src/stores/notification-store.ts
var activeChannel = null;
var activeUserId = null;
var useNotificationStore = create2((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  fetchNotifications: async (userId) => {
    set({ isLoading: true });
    const supabase = createClient();
    try {
      const { data, error } = await supabase.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false });
      if (error) throw error;
      const notifications = data || [];
      const unreadCount = notifications.filter((n) => !n.read).length;
      set({ notifications, unreadCount });
    } catch (e) {
      console.error("[NotificationStore] Failed to fetch notifications:", e);
    } finally {
      set({ isLoading: false });
    }
  },
  markAsRead: async (notificationId) => {
    const supabase = createClient();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map(
          (n) => n.id === notificationId ? { ...n, read: true } : n
        );
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark notification as read:", e);
    }
  },
  markAllAsRead: async (userId) => {
    const supabase = createClient();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("user_id", userId).eq("read", false);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map((n) => ({ ...n, read: true }));
        return { notifications: updated, unreadCount: 0 };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark all notifications as read:", e);
    }
  },
  deleteNotification: async (notificationId) => {
    const supabase = createClient();
    try {
      const { error } = await supabase.from("notifications").delete().eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.filter((n) => n.id !== notificationId);
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to delete notification:", e);
    }
  },
  subscribeToNotifications: (userId) => {
    try {
      if (!userId) return;
      const supabase = createClient();
      if (activeChannel && activeUserId === userId) {
        return;
      }
      if (activeChannel) {
        try {
          supabase.removeChannel(activeChannel);
        } catch (_) {
        }
        activeChannel = null;
        activeUserId = null;
      }
      const channelTopic = `notifications-user-${userId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const channel = supabase.channel(channelTopic);
      channel.on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          const { eventType, new: newRecord, old: oldRecord } = payload;
          if (eventType === "INSERT") {
            const inserted = newRecord;
            set((state) => {
              if (state.notifications.some((n) => n.id === inserted.id)) {
                return {};
              }
              const updated = [inserted, ...state.notifications];
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          } else if (eventType === "UPDATE") {
            const updatedRecord = newRecord;
            set((state) => {
              const updated = state.notifications.map(
                (n) => n.id === updatedRecord.id ? updatedRecord : n
              );
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          } else if (eventType === "DELETE") {
            const deletedId = oldRecord?.id;
            if (!deletedId) return;
            set((state) => {
              const updated = state.notifications.filter((n) => n.id !== deletedId);
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          }
        }
      ).subscribe();
      activeChannel = channel;
      activeUserId = userId;
    } catch (err) {
      console.warn("[NotificationStore] Realtime subscription error:", err);
    }
  },
  unsubscribe: () => {
    try {
      if (activeChannel) {
        const supabase = createClient();
        supabase.removeChannel(activeChannel);
        activeChannel = null;
        activeUserId = null;
      }
    } catch (err) {
      console.warn("[NotificationStore] Unsubscribe error:", err);
    }
  }
}));

// src/stores/voucher-store.ts
import { create as create3 } from "zustand";
import { persist } from "zustand/middleware";
var useVoucherStore = create3()(
  persist(
    (set) => ({
      vouchers: [],
      selectedVoucher: null,
      dbLoaded: false,
      setSelectedVoucher: (voucher) => set({ selectedVoucher: voucher }),
      setDbLoaded: (v) => set({ dbLoaded: v }),
      setVouchers: (vouchers) => set((state) => {
        const map = /* @__PURE__ */ new Map();
        const getFileKey = (v) => {
          const name = (v.fileName || "").toLowerCase().trim();
          const url = (v.originalFileUrl || v.editedFileUrl || v.pdfUrl || "").trim();
          if (name && url) return `${name}_${url}`;
          if (name) return name;
          return v.id;
        };
        for (const v of vouchers) {
          const key = getFileKey(v);
          if (key) map.set(key, v);
        }
        for (const v of state.vouchers) {
          const key = getFileKey(v);
          if (key && !map.has(key)) map.set(key, v);
        }
        const merged = Array.from(map.values()).sort((a, b) => {
          const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return timeB - timeA;
        });
        return { vouchers: merged };
      }),
      addVoucher: (data) => {
        const fileUrlToUse = data.pdfUrl || data.editedFileUrl || data.originalFileUrl;
        const newVoucher = {
          ...data,
          pdfUrl: fileUrlToUse,
          id: `voucher-${Date.now()}`,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        set((state) => ({
          vouchers: [newVoucher, ...state.vouchers],
          selectedVoucher: newVoucher
        }));
        return newVoucher;
      },
      updateVoucher: (id, updates) => {
        set((state) => ({
          vouchers: state.vouchers.map(
            (v) => v.id === id ? { ...v, ...updates } : v
          ),
          selectedVoucher: state.selectedVoucher?.id === id ? { ...state.selectedVoucher, ...updates } : state.selectedVoucher
        }));
      },
      deleteVoucher: (id) => {
        set((state) => ({
          vouchers: state.vouchers.filter((v) => v.id !== id),
          selectedVoucher: state.selectedVoucher?.id === id ? null : state.selectedVoucher
        }));
      }
    }),
    {
      name: "vouchers-storage-v4",
      partialize: (state) => ({
        // Do NOT persist vouchers array globally in localStorage to prevent user data leakage across accounts
        selectedVoucher: null
      })
    }
  )
);

// src/features/link-maker/store.ts
import { create as create4 } from "zustand";
import { persist as persist2 } from "zustand/middleware";
var DEFAULT_CONFIG = {
  profile: {
    name: "Alex Rivera",
    bio: "Senior UX Architect & Tech Writer | Crafting digital experiences \u2728",
    avatarUrl: ""
  },
  links: [],
  socials: [],
  theme: {
    preset: "custom",
    appTheme: "system",
    appColorTheme: "zinc"
  }
};
var useLinkMakerStore = create4()(
  persist2(
    (set, get) => ({
      config: DEFAULT_CONFIG,
      projects: [],
      activeProjectId: null,
      activeShortUrl: null,
      activeShortUrlSuffix: null,
      activeExpiresAt: null,
      updateProfile: (profileUpdates) => set((state) => ({
        config: {
          ...state.config,
          profile: {
            ...state.config.profile,
            ...profileUpdates
          }
        }
      })),
      addLink: () => set((state) => {
        const newLink = {
          id: `link-${Date.now()}`,
          title: "New Social Link",
          url: "https://",
          icon: "Link2",
          isEnabled: true,
          animation: "none"
        };
        return {
          config: {
            ...state.config,
            links: [...state.config.links, newLink]
          }
        };
      }),
      updateLink: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          links: state.config.links.map(
            (link) => link.id === id ? { ...link, ...updates } : link
          )
        }
      })),
      removeLink: (id) => set((state) => ({
        config: {
          ...state.config,
          links: state.config.links.filter((link) => link.id !== id)
        }
      })),
      reorderLinks: (index, direction) => set((state) => {
        const links = [...state.config.links];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= links.length) {
          return {};
        }
        const temp = links[index];
        links[index] = links[targetIndex];
        links[targetIndex] = temp;
        return {
          config: {
            ...state.config,
            links
          }
        };
      }),
      updateSocial: (platform, url, isEnabled) => set((state) => {
        const platformExists = state.config.socials.some((s) => s.platform === platform);
        let socials = [];
        if (platformExists) {
          socials = state.config.socials.map(
            (s) => s.platform === platform ? { ...s, url, isEnabled } : s
          );
        } else {
          socials = [...state.config.socials, { platform, url, isEnabled }];
        }
        return {
          config: {
            ...state.config,
            socials
          }
        };
      }),
      updateTheme: (themeUpdates) => set((state) => ({
        config: {
          ...state.config,
          theme: {
            ...state.config.theme,
            ...themeUpdates
          }
        }
      })),
      saveProject: (name) => {
        const state = get();
        const projectId = state.activeProjectId || `proj-${Date.now()}`;
        const projectName = name || (state.activeProjectId ? state.projects.find((p) => p.id === state.activeProjectId)?.name || "My Link Tree" : "My Link Tree");
        const existingProject = state.projects.find((p) => p.id === projectId);
        const updatedProject = {
          id: projectId,
          name: projectName,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          config: state.config,
          shortUrl: state.activeShortUrl || existingProject?.shortUrl,
          shortUrlSuffix: state.activeShortUrlSuffix || existingProject?.shortUrlSuffix,
          expiresAt: state.activeExpiresAt || existingProject?.expiresAt
        };
        const projectIndex = state.projects.findIndex((p) => p.id === projectId);
        let updatedProjects = [...state.projects];
        if (projectIndex >= 0) {
          updatedProjects[projectIndex] = updatedProject;
        } else {
          updatedProjects.push(updatedProject);
        }
        set({
          projects: updatedProjects,
          activeProjectId: projectId
        });
        return projectId;
      },
      loadProject: (id) => {
        const state = get();
        const project = state.projects.find((p) => p.id === id);
        if (project) {
          set({
            config: project.config,
            activeProjectId: id,
            activeShortUrl: project.shortUrl || null,
            activeShortUrlSuffix: project.shortUrlSuffix || null,
            activeExpiresAt: project.expiresAt || null
          });
        }
      },
      deleteProject: (id) => set((state) => {
        const updatedProjects = state.projects.filter((p) => p.id !== id);
        const wasActive = state.activeProjectId === id;
        return {
          projects: updatedProjects,
          activeProjectId: wasActive ? null : state.activeProjectId,
          config: wasActive ? DEFAULT_CONFIG : state.config,
          activeShortUrl: wasActive ? null : state.activeShortUrl,
          activeShortUrlSuffix: wasActive ? null : state.activeShortUrlSuffix,
          activeExpiresAt: wasActive ? null : state.activeExpiresAt
        };
      }),
      createNewProject: (name) => {
        const id = `proj-${Date.now()}`;
        const newProject = {
          id,
          name,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          config: DEFAULT_CONFIG
        };
        set((state) => ({
          projects: [...state.projects, newProject],
          config: DEFAULT_CONFIG,
          activeProjectId: id,
          activeShortUrl: null,
          activeShortUrlSuffix: null,
          activeExpiresAt: null
        }));
      },
      resetConfig: () => set({
        config: DEFAULT_CONFIG,
        activeProjectId: null,
        activeShortUrl: null,
        activeShortUrlSuffix: null,
        activeExpiresAt: null
      }),
      setShortUrl: (shortUrl, suffix, expiresAt) => set((state) => {
        const updatedProjects = state.activeProjectId ? state.projects.map(
          (p) => p.id === state.activeProjectId ? { ...p, shortUrl, shortUrlSuffix: suffix, expiresAt } : p
        ) : state.projects;
        return {
          activeShortUrl: shortUrl,
          activeShortUrlSuffix: suffix,
          activeExpiresAt: expiresAt,
          projects: updatedProjects
        };
      })
    }),
    {
      name: "link-maker-workspace"
    }
  )
);
export {
  useAuthStore,
  useLinkMakerStore,
  useNotificationStore,
  useVoucherStore
};
//# sourceMappingURL=stores.mjs.map