"use client";

import { useState } from "react";
import { MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    sport: string;
    sportEmoji: string;
    date: string;
    time: string;
    location: string;
    participants: number;
    maxParticipants: number;
    status: "open" | "full" | "happening";
    isOfficial: boolean;
    joined: boolean;
  };
}

const statusConfig = {
  open: {
    label: "Aberto",
    className: "bg-accent text-accent-foreground",
  },
  full: {
    label: "Lotado",
    className: "bg-destructive text-destructive-foreground",
  },
  happening: {
    label: "Acontecendo",
    className: "bg-primary text-primary-foreground",
  },
};

export function EventCard({ event }: EventCardProps) {
  const [isJoined, setIsJoined] = useState(event.joined);
  const [participantsCount, setParticipantsCount] = useState(event.participants);

  const status = statusConfig[event.status];
  const isFull = event.status === "full";

  const handleJoin = () => {
    if (isFull && !isJoined) return;
    setIsJoined(!isJoined);
    setParticipantsCount((prev) => (isJoined ? prev - 1 : prev + 1));
  };

  return (
    <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-2xl">
              {event.sportEmoji}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.sport}</p>
            </div>
          </div>
          <Badge className={cn("text-xs", status.className)}>
            {status.label}
          </Badge>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {event.date} - {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {participantsCount}/{event.maxParticipants} participantes
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-4">
          {event.isOfficial && (
            <Badge variant="outline" className="text-xs border-primary text-primary">
              Oficial
            </Badge>
          )}
          {!event.isOfficial && (
            <Badge variant="outline" className="text-xs">
              Informal
            </Badge>
          )}
        </div>

        {/* Join Button */}
        <Button
          onClick={handleJoin}
          disabled={isFull && !isJoined}
          className={cn(
            "w-full",
            isJoined
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {isJoined ? "Participando ✓" : "Participar"}
        </Button>
      </CardContent>
    </Card>
  );
}
