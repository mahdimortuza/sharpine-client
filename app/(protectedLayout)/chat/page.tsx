"use client";

import IdeaCard from "@/components/layout/IdeaCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LogOut, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for MVP
const mockIdeas = [
  {
    id: "1",
    title: "AI-powered customer support triage",
    preview:
      "What if we used LLMs to automatically categorize and route support tickets? Could reduce first-response time significantly...",
    createdAt: "2 hours ago",
    status: "structured" as const,
  },
  {
    id: "2",
    title: "Subscription fatigue dashboard",
    preview:
      "A tool that aggregates all your SaaS subscriptions and shows true cost vs actual usage. Integration with bank APIs?",
    createdAt: "Yesterday",
    status: "draft" as const,
  },
  {
    id: "3",
    title: "Founder accountability pods",
    preview:
      "Matching founders with similar stage/industry for weekly check-ins. Like a support group but focused on execution...",
    createdAt: "3 days ago",
    status: "structured" as const,
  },
];

const ChatPage = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // TODO: Implement AI chat functionality
    // For now, just echo back
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "AI response will be implemented here.",
        },
      ]);
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              height={100}
              width={100}
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* main chatting content */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-medium text-foreground">
                Your Ideas
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Capture messy thoughts. Get structured clarity.
              </p>
            </div>
            <Button asChild>
              <Link href="/chat/capture">
                <Plus className="w-4 h-4" />
                New idea
              </Link>
            </Button>
          </div>

          {mockIdeas.length > 0 ? (
            <div className="space-y-3">
              {mockIdeas.map((idea) => (
                <IdeaCard key={idea.id} {...idea} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-border rounded-md">
              <p className="text-muted-foreground">No ideas yet.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start by capturing your first messy thought.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
