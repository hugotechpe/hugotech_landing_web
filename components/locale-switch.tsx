"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import Image from "next/image";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

export type LocaleSwitchVariant = "onPrimary" | "onWhite" | "onDark";

export function LocaleSwitch({
  variant = "onPrimary",
}: {
  variant?: LocaleSwitchVariant;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (nextLocale: "en" | "es") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  const palette = {
    onPrimary: {
      btn: "text-white border-white/40 hover:border-white/60",
      menu: "bg-white text-customgray",
      itemActive: "bg-gray-100 text-customgray",
    },
    onWhite: {
      btn: "text-customgray border-gray-300 hover:border-primary/80",
      menu: "bg-white text-customgray",
      itemActive: "bg-gray-100 text-customgray",
    },
    onDark: {
      btn: "text-white border-white/40 hover:border-white/60",
      menu: " text-white border-none",
      itemActive: "bg-gray-100 text-customgray",
    },
  } as const;

  const ui = palette[variant];

  const options: Array<{
    code: "en" | "es";
    label: string;
    name: string;
    iconSrc: string;
  }> = [
    {
      code: "es",
      label: "ES",
      name: "Español",
      iconSrc: "/images/flag/pe.svg",
    },
    {
      code: "en",
      label: "EN",
      name: "English",
      iconSrc: "/images/flag/us.svg",
    },
  ];

  const current = options.find((o) => o.code === locale) ?? options[0];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          aria-label="Cambiar idioma"
          className={`rounded-lg px-3 py-2 gap-2 min-w-20 ${ui.btn}`}
          size="sm"
          variant="bordered"
          suppressHydrationWarning
        >
          <Image
            alt={`${current.name} flag`}
            className="rounded-sm"
            height={14}
            src={current.iconSrc}
            width={20}
            suppressHydrationWarning
          />
          <span className="font-semibold" suppressHydrationWarning>{current.label}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Selecciona idioma"
        className={`min-w-[8rem] shadow-medium ${ui.menu}`}
        selectedKeys={[locale]}
        selectionMode="single"
        onAction={(key) => changeLocale(key as "en" | "es")}
      >
        {options.map((o) => (
          <DropdownItem
            key={o.code}
            className={locale === o.code ? ui.itemActive : ""}
          >
            <div className="flex items-center gap-2 bg-red">
              <Image
                alt={`${o.name} flag`}
                className="rounded-sm"
                height={14}
                src={o.iconSrc}
                width={20}
              />
              <span className="font-semibold">{o.label}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
