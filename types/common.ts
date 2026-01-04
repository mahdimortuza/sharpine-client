export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}
