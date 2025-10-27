"use client";

import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import {
  trackCalendlyWidgetLoaded,
  trackCalendlyDateSelected,
  trackCalendlyEventScheduled,
} from "@/lib/gtm";

interface CalendlyEmbedProps {
  url?: string;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
  height?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/hugotech/mentoria1a1",
  prefill,
  utm,
  height = "700px",
}: CalendlyEmbedProps) {
  // Track when widget loads
  useEffect(() => {
    trackCalendlyWidgetLoaded();

    // Listen to Calendly PostMessage events
    const handleCalendlyEvent = (e: MessageEvent) => {
      // Solo procesamos eventos de Calendly
      if (e.origin !== "https://calendly.com") return;

      const eventData = e.data;

      // Calendly envía eventos con esta estructura
      if (eventData.event) {
        if (process.env.NODE_ENV === 'development') {
          console.log("[Calendly Event]", eventData.event, eventData);
        }

        switch (eventData.event) {
          case "calendly.date_and_time_selected":
            trackCalendlyDateSelected();
            break;
          case "calendly.event_scheduled":
            trackCalendlyEventScheduled(
              eventData.payload?.event?.uri,
              eventData.payload?.invitee?.uri,
              eventData.payload?.event?.start_time,
            );
            break;
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg">
      <InlineWidget
        url={url}
        prefill={prefill}
        utm={utm}
        styles={{
          height: height,
          width: "100%",
        }}
      />
    </div>
  );
}
