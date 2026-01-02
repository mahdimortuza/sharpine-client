import Header from "@/components/shared/Header";
import { ReactNode } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;
