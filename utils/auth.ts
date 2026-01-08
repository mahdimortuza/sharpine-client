import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

/**
 * Global Google sign-in function
 */
export const useGlobalSignIn = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignIn = () => {
    if (user) {
      router.push("/chat");
    } else {
      // Redirect to backend Google OAuth
      window.location.href = `${API_URL}/auth/google`;
    }
  };

  return { handleSignIn, user };
};
