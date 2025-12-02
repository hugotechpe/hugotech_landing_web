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
import { useTranslations } from "next-intl";

import { LocaleSwitch } from "@/components/locale-switch";

export default function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const tNavbar = useTranslations("Navbar");
  const tAgenda = useTranslations("Sections.Agenda");

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
        className="bg-primary mx-auto max-w-1400"
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
            <Link href="/">
              <Image
                priority
                alt="HugoTech - Innovación con Alma, Tech con Propósito"
                className="h-7 sm:h-10 md:h-14 w-auto"
                height={54}
                src="/images/logo-hugotech.png"
                width={180}
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
                className="text-sm font-medium text-white hover:text-brand transition-colors"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          {/* Locale Switch - Visible en todos los tamaños */}
          <NavbarItem>
            <LocaleSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="bg-white text-primary font-bold"
              color="primary"
              href="/#cita"
              size="md"
              variant="solid"
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

          {/* CTA Button en mobile */}
          <NavbarMenuItem className="md:hidden mt-4">
            <Button
              as={Link}
              className="bg-primary text-white font-bold w-full"
              color="primary"
              href="/#cita"
              size="lg"
              variant="solid"
              onPress={() => setIsMenuOpen(false)}
            >
              {tAgenda("title")}
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
