"use client";

import { useTranslations } from "next-intl";
import ImpactCounter from "@/components/ImpactCounter";

export default function ImpactSection() {
  const t = useTranslations("Sections.CoachingConCausa.impact");

  return (
    <ImpactCounter
      causesLabel={t("causesLabel")}
      errorText={t("errorText")}
      lastUpdateLabel={t("lastUpdateLabel")}
      loadingText={t("loadingText")}
      sessionsLabel={t("sessionsLabel")}
      subtitle={t("subtitle")}
      title={t("title")}
      totalLabel={t("totalLabel")}
    />
  );
}
