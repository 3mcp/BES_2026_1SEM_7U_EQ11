import { describe, expect, it } from "vitest";
import {
  authenticate,
  clearSession,
  persistSession,
  readSession,
} from "@/lib/auth";

describe("authenticate", () => {
  it("aceita as credenciais de demonstracao", () => {
    const session = authenticate("admin@email.com", "123456");
    expect(session).not.toBeNull();
    expect(session?.email).toBe("admin@email.com");
  });

  it("normaliza o e-mail para minusculas e remove espacos", () => {
    const session = authenticate("  Admin@Email.com  ", "123456");
    expect(session?.email).toBe("admin@email.com");
  });

  it("rejeita senha incorreta", () => {
    expect(authenticate("admin@email.com", "errada")).toBeNull();
  });

  it("rejeita e-mail desconhecido", () => {
    expect(authenticate("outro@email.com", "123456")).toBeNull();
  });
});

describe("session persistence", () => {
  it("persiste e recupera a sessao do localStorage", () => {
    const session = authenticate("admin@email.com", "123456");
    expect(session).not.toBeNull();
    persistSession(session!);

    const stored = readSession();
    expect(stored?.email).toBe("admin@email.com");
    expect(stored?.loggedAt).toBe(session!.loggedAt);
  });

  it("retorna null quando nao ha sessao salva", () => {
    expect(readSession()).toBeNull();
  });

  it("limpa a sessao salva", () => {
    const session = authenticate("admin@email.com", "123456")!;
    persistSession(session);
    clearSession();
    expect(readSession()).toBeNull();
  });

  it("retorna null para conteudo corrompido no storage", () => {
    window.localStorage.setItem("olympycshare:session", "{nao-json");
    expect(readSession()).toBeNull();
  });
});
