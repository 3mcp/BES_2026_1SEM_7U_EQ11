"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GroupCard } from "@/components/group-card";
import { groups, sportFilters } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function GroupsPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = groups.filter((group) => {
    const sportMatch =
      selectedSport === "all" ||
      group.sport.toLowerCase() === selectedSport.toLowerCase();
    const searchMatch =
      searchQuery === "" ||
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());
    return sportMatch && searchMatch;
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-foreground">Grupos</h1>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar grupos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-secondary border-border"
        />
      </div>

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

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum grupo encontrado para os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
}
