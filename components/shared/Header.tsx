"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  showLogin?: boolean;
};

const Header = ({ showLogin = false }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium text-foreground">
          Sharpine
        </Link>

        <nav className="flex items-center gap-6">
          {showLogin && (
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
