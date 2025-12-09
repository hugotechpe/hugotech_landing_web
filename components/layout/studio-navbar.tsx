"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

export default function StudioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Inicio", href: "/es" },
    { label: "Blog", href: "/es/blog" },
    { label: "Sobre mí", href: "/es/about" },
    { label: "Testimonios", href: "/es/testimonials" },
    { label: "Empresas", href: "/es/empresas" },
  ];

  return (
    <header className="border-b border-[#115C5B] bg-primary shadow-sm">
      <Navbar
        className="mx-auto max-w-1400 bg-primary"
        height="5rem"
        isMenuOpen={isMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Mobile menu toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
          />
        </NavbarContent>

        {/* Logo - centered on mobile, left on desktop */}
        <NavbarContent className="pr-3 sm:hidden" justify="center">
          <NavbarBrand>
            <Link href="/es">
              <Image
                priority
                alt="HugoTech Logo"
                height={60}
                src="/images/logo.png"
                width={60}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop logo */}
        <NavbarContent className="hidden gap-4 sm:flex" justify="start">
          <NavbarBrand>
            <Link href="/es">
              <Image
                priority
                alt="HugoTech Logo"
                height={60}
                src="/images/logo.png"
                width={60}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop menu items */}
        <NavbarContent className="hidden gap-8 sm:flex" justify="center">
          <NavbarItem>
            <Link className="text-white hover:text-[#00E5CC]" href="/es">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white hover:text-[#00E5CC]" href="/es/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white hover:text-[#00E5CC]" href="/es/about">
              Sobre mí
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white hover:text-[#00E5CC]"
              href="/es/testimonials"
            >
              Testimonios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white hover:text-[#00E5CC]"
              href="/es/empresas"
            >
              Empresas
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right section - Studio indicator */}
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <span className="rounded-full bg-[#00E5CC]/20 px-4 py-2 text-sm font-semibold text-[#00E5CC]">
              📝 Studio
            </span>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu className="bg-primary pt-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full text-white hover:text-[#00E5CC]"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <div className="mt-4 rounded-lg bg-[#00E5CC]/20 px-4 py-3">
              <span className="text-sm font-semibold text-[#00E5CC]">
                📝 Panel de Administración
              </span>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
