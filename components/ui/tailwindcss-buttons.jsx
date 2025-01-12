"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full bg-white rounded-xl  bg-transparent dark:border-white/[0.2]  group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="relative z-40">{children}</div>
    </div>
  );
};
