"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    sport: string;
    sportEmoji: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    timestamp: string;
    liked: boolean;
  };
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.liked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground">
                {post.user.name}
              </span>
              <Badge
                variant="secondary"
                className="text-xs bg-secondary text-secondary-foreground"
              >
                {post.sportEmoji} {post.sport}
              </Badge>
            </div>
            <span className="text-xs text-muted-foreground">
              {post.timestamp}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-foreground mb-3 leading-relaxed">{post.content}</p>

        {/* Image */}
        {post.image && (
          <div className="relative rounded-xl overflow-hidden mb-3 -mx-4 sm:mx-0">
            <img
              src={post.image}
              alt="Post image"
              className="w-full h-auto object-cover max-h-96"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-1 pt-2 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center gap-2",
              isLiked && "text-red-500 hover:text-red-600"
            )}
            onClick={handleLike}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
            <span className="text-sm">{likesCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{post.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">{post.shares}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
