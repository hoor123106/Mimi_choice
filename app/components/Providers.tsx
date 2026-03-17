"use client";

import { TooltipProvider } from "../components/tooltip";
import { Toaster } from "../components/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
