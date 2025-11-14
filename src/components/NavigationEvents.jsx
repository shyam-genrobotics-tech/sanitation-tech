"use client";
import React, {
  useState,
  useEffect,
  useTransition,
  createContext,
  useContext,
} from "react";
import { useRouter } from "next/navigation";
import NavigationInterceptor from "./NavigationInterceptor";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [pendingRoute, setPendingRoute] = useState(null);

  useEffect(() => {
    if (!pendingRoute) return;

    startTransition(() => {
      router.push(pendingRoute);
      setPendingRoute(null);
    });
  }, [pendingRoute]);

  const handleRouteChange = (url) => {
    setPendingRoute(url);
  };

  return (
    <NavigationContext.Provider value={{ isPending }}>
      <NavigationInterceptor onNavigate={handleRouteChange} />
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationLoading() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationLoading must be used within NavigationProvider"
    );
  }
  return context.isPending;
}
