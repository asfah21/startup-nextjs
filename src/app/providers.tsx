"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
