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

export default function HerohNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Me Presento", href: "#mepresento" },
    { label: "Empresas", href: "/empresas" },
    { label: "Coaching con Causa", href: "#cccausa" },
    { label: "Testimonios", href: "#testimonios" }
  ];

  return (
    <header className='bg-primary shadow-sm'>
      <Navbar 
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        maxWidth="full"
        className="bg-primary mx-auto max-w-screen-2xl"
        height="5rem"
        shouldHideOnScroll={false}
      >
        {/* Mobile Menu Toggle + Logo */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          {menuItems.map((item, index) => (
            <NavbarItem key={`desktop-${item.label}-${index}`} className='hidden lg:block'>
              <Link
                color="foreground"
                href={item.href}
                className="text-sm font-medium hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Button 
              as={Link}
              color="primary"
              href="/#cita"
              variant="solid"
              size="md"
              className="bg-white text-primary font-bold"
            >
              Agenda tu Sesión
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu  className="p-6 bg-white !h-fit">
          {menuItems.map((item, index) => (
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