import { ViewTransition } from "react";

// Mounted per page so each route change animates the old page out and the new one in.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
