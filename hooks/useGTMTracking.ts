"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { trackScrollToSection } from "@/lib/gtm";

interface UseSectionTrackingOptions {
  sectionId: string;
  sectionName: string;
  threshold?: number;
}

/**
 * Custom hook to track when user scrolls to a section
 * Uses IntersectionObserver to detect when section becomes visible
 */
export function useSectionTracking({
  sectionId,
  sectionName,
  threshold = 0.5,
}: UseSectionTrackingOptions) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (!section || hasTrackedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedRef.current) {
            trackScrollToSection(sectionName);
            hasTrackedRef.current = true;
          }
        });
      },
      { threshold },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, sectionName, threshold]);
}

/**
 * Custom hook to track page views automatically
 * Tracks on route changes
 */
export function usePageTracking(locale?: string) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize dataLayer if it doesn't exist
      window.dataLayer = window.dataLayer || [];

      // Track page view
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_title: document.title,
        page_locale: locale,
      });
    }
  }, [pathname, locale]);
}
