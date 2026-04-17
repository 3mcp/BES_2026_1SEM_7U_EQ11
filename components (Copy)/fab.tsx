"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FABProps {
  onClick: () => void;
}

export function FAB({ onClick }: FABProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 z-40"
    >
      <Plus className="h-6 w-6" />
      <span className="sr-only">Criar novo evento ou post</span>
    </Button>
  );
}
