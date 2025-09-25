import { cn } from "@heroui/theme";
import React, { PropsWithChildren } from "react";
import GradientBorder from "../ui/GradientBorder";

export default function PageHeader ({
  children,
  borderClassName = "max-w-xl",
}: PropsWithChildren & {
  borderClassName?: string;
}) {
  return (
    <header>
      <h1 className="text-2xl lg:text-3xl text-center font-bold tracking-wide mb-1">
        {children}
      </h1>
      <GradientBorder className={cn("mx-auto", borderClassName)} />
    </header>
  );
};

