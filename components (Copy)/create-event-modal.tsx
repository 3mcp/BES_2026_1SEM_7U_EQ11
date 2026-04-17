"use client";

import { useState } from "react";
import { X, MapPin, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { sportFilters } from "@/lib/mock-data";

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const [isOfficial, setIsOfficial] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    date: "",
    time: "",
    location: "",
    maxParticipants: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event created:", { ...formData, isOfficial });
    // Reset form
    setFormData({
      name: "",
      sport: "",
      date: "",
      time: "",
      location: "",
      maxParticipants: "",
      description: "",
    });
    setIsOfficial(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <h2 className="text-lg font-semibold text-foreground">
            Criar Novo Evento
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
          {/* Event Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-foreground">Nome do Evento</Label>
            <Input
              id="name"
              placeholder="Ex: Corrida Matinal"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-secondary border-border"
            />
          </div>

          {/* Sport Type */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="sport" className="text-foreground">Tipo de Esporte</Label>
            <Select
              value={formData.sport}
              onValueChange={(value) =>
                setFormData({ ...formData, sport: value })
              }
              required
            >
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Selecione o esporte" />
              </SelectTrigger>
              <SelectContent>
                {sportFilters
                  .filter((s) => s.value !== "all")
                  .map((sport) => (
                    <SelectItem key={sport.value} value={sport.value}>
                      {sport.emoji} {sport.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date" className="text-foreground">Data</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className="pl-10 bg-secondary border-border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="time" className="text-foreground">Horario</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                  className="pl-10 bg-secondary border-border"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="location" className="text-foreground">Local</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="Ex: Parque Ibirapuera"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Max Participants */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="maxParticipants" className="text-foreground">Maximo de Participantes</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="maxParticipants"
                type="number"
                min="2"
                placeholder="Ex: 20"
                value={formData.maxParticipants}
                onChange={(e) =>
                  setFormData({ ...formData, maxParticipants: e.target.value })
                }
                required
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-foreground">Descricao</Label>
            <Textarea
              id="description"
              placeholder="Descreva o evento..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="bg-secondary border-border resize-none"
            />
          </div>

          {/* Official Toggle */}
          <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
            <div>
              <Label className="text-foreground font-medium">Evento Oficial</Label>
              <p className="text-xs text-muted-foreground">
                Eventos oficiais sao destacados na plataforma
              </p>
            </div>
            <Switch checked={isOfficial} onCheckedChange={setIsOfficial} />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Criar Evento
          </Button>
        </form>
      </div>
    </div>
  );
}
