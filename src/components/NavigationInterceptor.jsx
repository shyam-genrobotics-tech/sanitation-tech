"use client";
import { useEffect } from "react";

export default function NavigationInterceptor({ onNavigate }) {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = target.href.replace(window.location.origin, "");
        onNavigate(url);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onNavigate]);

  return null;
}
