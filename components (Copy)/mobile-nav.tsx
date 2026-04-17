"use client";

import { Home, Calendar, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "feed", label: "Feed", icon: Home },
  { id: "events", label: "Eventos", icon: Calendar },
  { id: "groups", label: "Grupos", icon: Users },
  { id: "profile", label: "Perfil", icon: User },
];

export function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border lg:hidden">
      <ul className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
