"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-FTY3Y5NX6V";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname, search]);

  return null;
}
