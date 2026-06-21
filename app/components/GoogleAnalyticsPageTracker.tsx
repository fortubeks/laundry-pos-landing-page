"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const hasTrackedInitialPage = useRef(false);

  useEffect(() => {
    if (
      typeof window.gtag !== "function" &&
      typeof window.fbq !== "function"
    ) {
      return;
    }

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true;
      return;
    }

    const pagePath = search ? `${pathname}?${search}` : pathname;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, search]);

  return null;
}
