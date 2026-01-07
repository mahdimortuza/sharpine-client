import { Suspense } from "react";
import CallbackContent from "./CallbackContent";

export default function CallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  );
}
