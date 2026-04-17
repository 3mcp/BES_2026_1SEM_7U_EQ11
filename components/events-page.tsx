"use client";

import { useState } from "react";
import { EventCard } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { events, sportFilters } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function EventsPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [showOfficial, setShowOfficial] = useState<boolean | null>(null);

  const filteredEvents = events.filter((event) => {
    const sportMatch =
      selectedSport === "all" ||
      event.sport.toLowerCase() === selectedSport.toLowerCase();
    const officialMatch =
      showOfficial === null || event.isOfficial === showOfficial;
    return sportMatch && officialMatch;
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground">Eventos</h1>

      {/* Sport Filters */}
      <div className="flex flex-wrap gap-2">
        {sportFilters.map((sport) => (
          <Button
            key={sport.value}
            variant={selectedSport === sport.value ? "default" : "secondary"}
            size="sm"
            onClick={() => setSelectedSport(sport.value)}
            className={cn(
              selectedSport === sport.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {sport.emoji} {sport.label}
          </Button>
        ))}
      </div>

      {/* Official/Informal Toggle */}
      <div className="flex gap-2">
        <Button
          variant={showOfficial === null ? "default" : "outline"}
          size="sm"
          onClick={() => setShowOfficial(null)}
        >
          Todos
        </Button>
        <Button
          variant={showOfficial === true ? "default" : "outline"}
          size="sm"
          onClick={() => setShowOfficial(true)}
        >
          Oficiais
        </Button>
        <Button
          variant={showOfficial === false ? "default" : "outline"}
          size="sm"
          onClick={() => setShowOfficial(false)}
        >
          Informais
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum evento encontrado para os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
}
