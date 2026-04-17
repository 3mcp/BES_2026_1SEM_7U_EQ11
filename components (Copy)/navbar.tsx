"use client";

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-card border-b border-border">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
            <span className="text-xl font-bold text-primary-foreground">O</span>
          </div>
          <span className="hidden sm:block text-xl font-bold text-foreground">
            OlympycShare
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar eventos, grupos, pessoas..."
              className="pl-10 bg-secondary border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] font-bold flex items-center justify-center text-primary-foreground">
              3
            </span>
          </Button>
          <Avatar className="h-9 w-9 border-2 border-primary cursor-pointer">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
