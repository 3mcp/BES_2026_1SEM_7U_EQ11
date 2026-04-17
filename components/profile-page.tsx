"use client";

import { Edit2, Calendar, Users, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser, userActivity, friends } from "@/lib/mock-data";

export function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Cover & Avatar */}
      <div className="relative">
        <div className="h-32 sm:h-48 rounded-xl overflow-hidden">
          <img
            src={currentUser.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-12 left-4 sm:left-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
            >
              <Edit2 className="h-4 w-4" />
              <span className="sr-only">Editar foto</span>
            </Button>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="pt-12 sm:pt-8 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {currentUser.name}
            </h1>
            <p className="text-muted-foreground">{currentUser.username}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {currentUser.location}
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            <Edit2 className="h-4 w-4 mr-2" />
            Editar Perfil
          </Button>
        </div>
        <p className="text-foreground mt-4">{currentUser.bio}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-4 sm:px-6">
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {currentUser.eventsAttended}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Eventos</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <UserPlus className="h-4 w-4 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {currentUser.friends}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Amigos</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {currentUser.groupsJoined}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Grupos</p>
          </CardContent>
        </Card>
      </div>

      {/* Sport Preferences */}
      <div className="px-4 sm:px-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Esportes Favoritos
        </h2>
        <div className="flex flex-wrap gap-2">
          {currentUser.sports.map((sport) => (
            <Badge
              key={sport}
              variant="secondary"
              className="bg-secondary text-secondary-foreground px-3 py-1"
            >
              {sport}
            </Badge>
          ))}
        </div>
      </div>

      {/* Activity Feed */}
      <div className="px-4 sm:px-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Atividade Recente
        </h2>
        <Card className="bg-card border-border">
          <CardContent className="p-0">
            {userActivity.map((activity, index) => (
              <div
                key={activity.id}
                className={`p-4 flex items-center gap-3 ${
                  index !== userActivity.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                  {activity.type === "event" && (
                    <Calendar className="h-5 w-5 text-primary" />
                  )}
                  {activity.type === "post" && (
                    <Edit2 className="h-5 w-5 text-primary" />
                  )}
                  {activity.type === "group" && (
                    <Users className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.date}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Friends Preview */}
      <div className="px-4 sm:px-6 pb-4">
        <h2 className="text-lg font-semibold text-foreground mb-3">Amigos</h2>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 flex-wrap">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex flex-col items-center gap-1"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground text-center max-w-[60px] truncate">
                    {friend.name.split(" ")[0]}
                  </span>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="h-12 px-4 text-xs"
              >
                Ver todos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
