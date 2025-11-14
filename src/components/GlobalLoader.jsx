"use client";
import React from "react";
import { useNavigationLoading } from "./NavigationEvents";

export default function GlobalLoader() {
  const isPending = useNavigationLoading();

  if (!isPending) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/70 flex items-center justify-center">
      <div className="h-10 w-10 animate-spin border-4 border-yellow-500 border-t-transparent rounded-full" />
    </div>
  );
}
