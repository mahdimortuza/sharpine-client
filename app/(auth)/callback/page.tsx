"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();

  useEffect(() => {
    const error = searchParams.get("error");

    if (error) {
      console.error("OAuth error:", error);
      router.push("/?error=auth_failed");
      return;
    }

    // If user is already authenticated (cookie set by backend), redirect to chat
    if (user) {
      router.push("/chat");
    } else {
      // Wait a bit for cookie to be set, then check again
      setTimeout(() => {
        window.location.href = "/chat";
      }, 1000);
    }
  }, [searchParams, user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Signing you in...</p>
      </div>
    </div>
  );
}
