"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

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
