"use client";

import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/mock-data";

interface FeedProps {
  onNavigate: (page: string) => void;
}

export function Feed({ onNavigate }: FeedProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-foreground">Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
