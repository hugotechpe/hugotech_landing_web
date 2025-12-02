"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { useMessages, useTranslations, useLocale } from "next-intl";
import Image from "next/image";

import { LocaleSwitch } from "@/components/locale-switch";

export default function NavbarSecondary() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const messages = useMessages() as any;
  const tNavbar = useTranslations("Navbar");
  const locale = useLocale();

  // Tomamos las etiquetas del footer y mostramos TODAS las opciones, ajustando hrefs al home
  const footerItems = messages?.Sections?.Footer?.menu?.items ?? [];
  // Construimos los ítems usando los anchors del home; casos especiales: Empresas (página dedicada) y Blog (#blog)
  const menuItems = footerItems.map((it: any) => {
    const href: string = it?.href ?? "";
    const labelLower = (it?.label ?? "").toLowerCase();
    const i = href.indexOf("#");
    const isAnchor = i >= 0;
    const anchor = isAnchor ? href.substring(i) : "";

    let finalHref = `/${locale}/`;

    if (labelLower === "blog" || href.includes("/blog")) {
      finalHref = `/${locale}/#blog`;
    } else if (anchor === "#empresas") {
      finalHref = `/${locale}/empresas`;
    } else if (isAnchor) {
      finalHref = `/${locale}/${anchor}`;
    }

    return { label: it.label, href: finalHref };
  });

  return (
    <header className="bg-white shadow-sm">
      <Navbar
        className="bg-white mx-auto max-w-1400"
        height="5rem"
        isMenuOpen={isMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Mobile Menu Toggle + Logo */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? tNavbar("closeMenu") : tNavbar("openMenu")}
            className="lg:hidden text-white font-bold"
          />
          <NavbarBrand>
            <Link href={`/${locale}/`}>
              <Image
                priority
                alt="HugoTech - Innovación con Alma, Tech con Propósito"
                className="h-7 sm:h-9 md:h-11 w-auto"
                height={48}
                src="/images/logo-hugotech.png"
                width={160}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu - Hidden on mobile/tablet */}
        <NavbarContent className="gap-8" justify="end">
          {menuItems.map((item: any, index: number) => (
            <NavbarItem
              key={`desktop-${item.label}-${index}`}
              className="hidden lg:block"
            >
              <Link
                className="text-sm font-medium text-customgray hover:text-primary transition-colors"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem className="hidden lg:flex">
            <LocaleSwitch variant="onWhite" />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="p-6 bg-white !h-fit">
          {menuItems.map((item: any, index: number) => (
            <NavbarMenuItem key={`mobile-${item.label}-${index}`}>
              <Link
                className="w-full text-sm text-black py-2 block hover:text-primary transition-colors"
                color="foreground"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
