"use client";
import React from 'react';
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
import { useMessages, useTranslations } from "next-intl";

export default function HerohNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const messages = useMessages() as any;
  const tNavbar = useTranslations("Navbar");
  const tAgenda = useTranslations("Sections.Agenda");

  // Tomamos las etiquetas del footer pero LIMITAMOS a los enlaces originales
  const footerItems = messages?.Sections?.Footer?.menu?.items ?? [];
  const allowedAnchors = ["#inicio", "#mepresento", "#empresas", "#cccausa", "#testimonios"];
  const fallbackLabels: Record<string, string> = {
    "#inicio": "Inicio",
    "#mepresento": "Me Presento",
    "#empresas": "Empresas",
    "#cccausa": "Coaching con causa",
    "#testimonios": "Testimonios",
  };
  const getAnchor = (href: string) => {
    const i = href?.indexOf('#');
    return i >= 0 ? href.substring(i) : href;
  };
  const menuItems = allowedAnchors.map((anchor) => {
    const match = footerItems.find((it: any) => getAnchor(it?.href) === anchor);
    return {
      label: match?.label ?? fallbackLabels[anchor],
      href: anchor,
    };
  });

  return (
    <header className='bg-primary shadow-sm border-b border-[#115C5B]'>
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
              <img 
                src="https://hugotech.pe/wp-content/uploads/2025/08/1Recurso-1.svg" 
                alt="HugoTech Logo" 
                className="h-6 md:h-9 w-auto"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu - Hidden on mobile/tablet */}
        <NavbarContent className="gap-8" justify="end">
          {menuItems.map((item: any, index: number) => (
            <NavbarItem key={`desktop-${item.label}-${index}`} className='hidden lg:block'>
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
          <NavbarItem>
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
        <NavbarMenu  className="p-6 bg-white !h-fit">
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