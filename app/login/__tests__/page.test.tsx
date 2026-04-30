import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "@/app/login/page";
import { readSession } from "@/lib/auth";

const replaceMock = vi.fn();
const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
    replace: replaceMock,
  }),
}));

describe("<LoginPage />", () => {
  beforeEach(() => {
    pushMock.mockClear();
    replaceMock.mockClear();
  });

  it("renderiza titulo, campos e botao de entrada", () => {
    render(<LoginPage />);
    expect(screen.getByText(/OlympycShare/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  it("exibe erro quando credenciais sao invalidas", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText(/E-mail/i), "qualquer@email.com");
    await user.type(screen.getByLabelText(/Senha/i), "errada");
    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/invalidos/i);
    expect(readSession()).toBeNull();
    expect(pushMock).not.toHaveBeenCalled();
  });

  it("autentica e redireciona para o feed com credenciais validas", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText(/E-mail/i), "admin@email.com");
    await user.type(screen.getByLabelText(/Senha/i), "123456");
    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(pushMock).toHaveBeenCalledWith("/");
    expect(readSession()?.email).toBe("admin@email.com");
  });
});
