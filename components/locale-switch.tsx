"use client";

import { Button } from "@heroui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (nextLocale: "en" | "es") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        size="sm"
        variant={locale === "en" ? "flat" : "ghost"}
        onPress={() => changeLocale("en")}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={locale === "es" ? "flat" : "ghost"}
        onPress={() => changeLocale("es")}
      >
        ES
      </Button>
    </div>
  );
}