"use client";

import React, { useEffect } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { 
  trackCalendlyWidgetLoaded, 
  trackCalendlyDateSelected, 
  trackCalendlyEventScheduled 
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
  }, []);

  // Listen to Calendly events
  useCalendlyEventListener({
    onDateAndTimeSelected: () => {
      trackCalendlyDateSelected();
    },
    onEventScheduled: (e) => {
      trackCalendlyEventScheduled(
        undefined,
        e.data?.payload?.invitee?.uri,
        e.data?.payload?.event?.uri
      );
    },
  });

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg">
      <InlineWidget
        url={url}
        prefill={prefill}
        utm={utm}
        styles={{
          height: height,
          width: '100%',
        }}
      />
    </div>
  );
}
