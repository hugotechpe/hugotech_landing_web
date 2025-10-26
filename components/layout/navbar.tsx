"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { LocaleSwitch } from "@/components/locale-switch";
import { useMessages, useTranslations, useLocale } from "next-intl";

export default function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const messages = useMessages() as any;
  const tNavbar = useTranslations("Navbar");
  const tAgenda = useTranslations("Sections.Agenda");
  const locale = useLocale();

  // Menu items con rutas completas (evita hydration mismatch)
  const menuItems = [
    {
      label: tNavbar("menuItems.myStory"),
      href: "/about",
    },
    {
      label: tNavbar("menuItems.home"),
      href: "/#inicio",
    },
    {
      label: tNavbar("menuItems.aboutMe"),
      href: "/#mepresento",
    },
    {
      label: tNavbar("menuItems.testimonials"),
      href: "/#testimonios",
    },
    {
      label: tNavbar("menuItems.companies"),
      href: "/empresas",
    },
  ];

  return (
    <header className="bg-primary shadow-sm border-b border-[#115C5B]">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        maxWidth="full"
        className="bg-primary mx-auto max-w-1400"
        height="5rem"
        shouldHideOnScroll={false}
      >
        {/* Mobile Menu Toggle + Logo */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? tNavbar("closeMenu") : tNavbar("openMenu")}
            className="lg:hidden text-white font-bold"
          />
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/images/logo-hugotech.png"
                alt="HugoTech - Innovación con Alma, Tech con Propósito"
                width={180}
                height={54}
                priority
                className="h-7 sm:h-10 md:h-14 w-auto"
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
                color="foreground"
                href={item.href}
                className="text-sm font-medium text-white hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem className="hidden lg:flex">
            <LocaleSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              color="primary"
              href="/#cita"
              variant="solid"
              size="md"
              className="bg-white text-primary font-bold"
            >
              {tAgenda("title")}
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="p-6 bg-white !h-fit">
          {menuItems.map((item: any, index: number) => (
            <NavbarMenuItem key={`mobile-${item.label}-${index}`}>
              <Link
                color="foreground"
                className="w-full text-sm text-black py-2 block hover:text-primary transition-colors"
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
