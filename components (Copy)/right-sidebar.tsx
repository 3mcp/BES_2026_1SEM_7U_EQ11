"use client";

import { Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { upcomingEvents, suggestedGroups } from "@/lib/mock-data";

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("pt-BR").format(num);
};

interface RightSidebarProps {
  onNavigate: (page: string) => void;
}

export function RightSidebar({ onNavigate }: RightSidebarProps) {
  return (
    <aside className="fixed right-0 top-16 bottom-0 w-80 bg-sidebar border-l border-sidebar-border hidden xl:block overflow-y-auto p-4">
      {/* Upcoming Events */}
      <Card className="bg-card border-border mb-4">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2 text-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            Proximos Eventos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-lg">
                {event.sportEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {event.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {event.date} - {event.time}
                </p>
              </div>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-primary hover:text-primary"
            onClick={() => onNavigate("events")}
          >
            Ver todos os eventos
          </Button>
        </CardContent>
      </Card>

      {/* Suggested Groups */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2 text-foreground">
            <Users className="h-4 w-4 text-primary" />
            Grupos Sugeridos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {suggestedGroups.map((group) => (
            <div
              key={group.id}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={group.coverImage}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {group.sportEmoji} {group.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(group.members)} membros
                </p>
              </div>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-primary hover:text-primary"
            onClick={() => onNavigate("groups")}
          >
            Ver todos os grupos
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
