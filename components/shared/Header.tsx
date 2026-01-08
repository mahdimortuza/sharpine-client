"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context"; // global auth hook
import Link from "next/link";
import { useRouter } from "next/navigation";

type HeaderProps = {
  showLogin?: boolean;
};

const Header = ({ showLogin = true }: HeaderProps) => {
  const { user } = useAuth();
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // global sign-in logic
  const handleSignIn = () => {
    if (user) {
      router.push("/chat");
    } else {
      window.location.href = `${API_URL}/auth/google`;
    }
  };

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium text-foreground">
          Sharpine
        </Link>

        <nav className="flex items-center gap-6">
          {showLogin && (
            <Button onClick={handleSignIn} size="sm">
              {user ? "Chat" : "Sign In"}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
