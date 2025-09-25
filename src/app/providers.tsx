"use client";

import { useRouter } from "next/navigation";
import { HeroUIProvider } from "@heroui/system";
import { NavigationProvider } from "../lib/contexts/NavigationContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NavigationProvider>{children}</NavigationProvider>
    </HeroUIProvider>
  );
}
