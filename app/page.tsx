"use client";

import { useState } from "react";
import { AuthGuard } from "@/components/auth-guard";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { RightSidebar } from "@/components/right-sidebar";
import { FAB } from "@/components/fab";
import { Feed } from "@/components/feed";
import { EventsPage } from "@/components/events-page";
import { GroupsPage } from "@/components/groups-page";
import { ProfilePage } from "@/components/profile-page";
import { CreateEventModal } from "@/components/create-event-modal";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("feed");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "feed":
        return <Feed onNavigate={handleNavigate} />;
      case "events":
        return <EventsPage />;
      case "groups":
        return <GroupsPage />;
      case "profile":
        return <ProfilePage />;
      case "friends":
        return <ProfilePage />;
      default:
        return <Feed onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
        <MobileNav currentPage={currentPage} onNavigate={handleNavigate} />

        {currentPage === "feed" && <RightSidebar onNavigate={handleNavigate} />}

        <main className="pt-16 pb-20 lg:pb-0 lg:pl-64 xl:pr-80">
          <div className="max-w-2xl mx-auto p-4 lg:p-6">{renderPage()}</div>
        </main>

        <FAB onClick={() => setIsModalOpen(true)} />

        <CreateEventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </AuthGuard>
  );
}
