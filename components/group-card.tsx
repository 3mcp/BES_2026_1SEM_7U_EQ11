"use client";

import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GroupCardProps {
  group: {
    id: string;
    name: string;
    sport: string;
    sportEmoji: string;
    coverImage: string;
    members: number;
    description: string;
  };
}

export function GroupCard({ group }: GroupCardProps) {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors">
      {/* Cover Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={group.coverImage}
          alt={group.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <span className="text-2xl">{group.sportEmoji}</span>
          <span className="text-xs font-medium text-foreground bg-secondary/80 px-2 py-1 rounded">
            {group.sport}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{group.name}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <Users className="h-4 w-4" />
          <span>{new Intl.NumberFormat("pt-BR").format(group.members)} membros</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {group.description}
        </p>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Entrar no Grupo
        </Button>
      </CardContent>
    </Card>
  );
}
