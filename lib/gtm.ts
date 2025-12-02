// Google Tag Manager Data Layer Types and Helpers

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export interface PageViewEvent extends GTMEvent {
  event: "page_view";
  page_path: string;
  page_title: string;
  page_locale?: string;
}

export interface CTAClickEvent extends GTMEvent {
  event: "cta_click";
  cta_location: string;
  cta_text: string;
  cta_destination?: string;
}

export interface CalendlyEvent extends GTMEvent {
  event:
    | "calendly_widget_loaded"
    | "calendly_date_selected"
    | "calendly_event_scheduled";
  event_type_name?: string;
  invitee_email?: string;
  event_start_time?: string;
}

export interface ScrollEvent extends GTMEvent {
  event: "scroll_to_section";
  section_name: string;
  scroll_depth?: number;
}

export interface WhatsAppClickEvent extends GTMEvent {
  event: "whatsapp_click";
  message?: string;
}

// Declare global dataLayer
declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

/**
 * Push event to Google Tag Manager Data Layer
 */
export const pushToDataLayer = (event: GTMEvent): void => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(event);
  }
};

/**
 * Track page view
 */
export const trackPageView = (
  path: string,
  title: string,
  locale?: string,
): void => {
  pushToDataLayer({
    event: "page_view",
    page_path: path,
    page_title: title,
    page_locale: locale,
  });
};

/**
 * Track CTA button click
 */
export const trackCTAClick = (
  location: string,
  text: string,
  destination?: string,
): void => {
  pushToDataLayer({
    event: "cta_click",
    cta_location: location,
    cta_text: text,
    cta_destination: destination,
  });
};

/**
 * Track WhatsApp button click
 */
export const trackWhatsAppClick = (message?: string): void => {
  pushToDataLayer({
    event: "whatsapp_click",
    message: message,
  });
};

/**
 * Track scroll to section
 */
export const trackScrollToSection = (
  sectionName: string,
  scrollDepth?: number,
): void => {
  pushToDataLayer({
    event: "scroll_to_section",
    section_name: sectionName,
    scroll_depth: scrollDepth,
  });
};

/**
 * Track Calendly widget loaded
 */
export const trackCalendlyWidgetLoaded = (): void => {
  pushToDataLayer({
    event: "calendly_widget_loaded",
  });
};

/**
 * Track Calendly date selected
 */
export const trackCalendlyDateSelected = (eventTypeName?: string): void => {
  pushToDataLayer({
    event: "calendly_date_selected",
    event_type_name: eventTypeName,
  });
};

/**
 * Track Calendly event scheduled (CONVERSION!)
 */
export const trackCalendlyEventScheduled = (
  eventTypeName?: string,
  inviteeEmail?: string,
  eventStartTime?: string,
): void => {
  pushToDataLayer({
    event: "calendly_event_scheduled",
    event_type_name: eventTypeName,
    invitee_email: inviteeEmail,
    event_start_time: eventStartTime,
  });
};
