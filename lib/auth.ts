export type Session = {
  email: string;
  loggedAt: string;
};

const SESSION_STORAGE_KEY = "olympycshare:session";

const DEMO_EMAIL = "admin@email.com";
const DEMO_PASSWORD = "123456";

export function authenticate(email: string, password: string): Session | null {
  const normalized = email.trim().toLowerCase();
  if (normalized !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return null;
  }
  return { email: normalized, loggedAt: new Date().toISOString() };
}

export function persistSession(session: Session): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function readSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
}
