"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Trophy, Mail, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { authenticate, persistSession } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const session = authenticate(email, password);
    if (!session) {
      setError("E-mail ou senha invalidos.");
      setSubmitting(false);
      return;
    }

    persistSession(session);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/15 via-background to-secondary/40">
      <Card className="w-full max-w-md shadow-lg border-border/60">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-md">
            <Trophy className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">OlympycShare</CardTitle>
          <CardDescription className="text-base">
            Entre para acessar o feed esportivo
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="admin@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="********"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>
            {error && (
              <p
                role="alert"
                className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2"
              >
                {error}
              </p>
            )}
            <Button type="submit" className="w-full h-11 text-base font-semibold" disabled={submitting}>
              {submitting ? "Entrando..." : "Entrar"}
            </Button>
            <div className="rounded-md border border-border bg-secondary/50 px-3 py-2 text-center">
              <p className="text-xs text-muted-foreground">
                Acesso de demonstracao
              </p>
              <p className="text-xs font-mono text-foreground mt-1">
                admin@email.com / 123456
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
