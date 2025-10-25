"use client";

import * as React from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useMessages, useTranslations } from "next-intl";

import FacebookIcon from "@/common/icons/social/FacebookIcon";
import InstagramIcon from "@/common/icons/social/InstagramIcon";
import LinkedInIcon from "@/common/icons/social/LinkedInIcon";

const Footer: React.FC = () => {
  const messages = useMessages() as any;
  const t = useTranslations("Sections.Footer");

  const legalLinks = messages?.Sections?.Footer?.legal?.links ?? [];
  const menuItems = messages?.Sections?.Footer?.menu?.items ?? [];
  const newsletter = messages?.Sections?.Footer?.newsletter ?? {};
  const mission = messages?.Sections?.Footer?.mission ?? {};
  const vision = messages?.Sections?.Footer?.vision ?? {};
  const copyright = messages?.Sections?.Footer?.bottom?.copyright ?? "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrar servicio real de suscripción (e.g. API/Sendinblue/Mailchimp)
  };

  return (
    <footer role="contentinfo" className="bg-primary text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-12">
        {/* Misión y Visión */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">💚 {mission.title}</h2>
            <p className="text-white/80 leading-relaxed">{mission.text}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">🌱 {vision.title}</h2>
            <p className="text-white/80 leading-relaxed">{vision.text}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Información Legal */}
          <section aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-lg font-bold">{t("legal.title")}</h2>
            <nav aria-label={t("legal.title")}>
              <ul className="mt-4 space-y-6">
                {legalLinks.map((link: { label: string; href: string }, idx: number) => (
                  <li key={`legal-${idx}`}>
                    <Link href={link.href} className="text-white/50 hover:text-white" title={link.label}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Menú */}
          <section aria-labelledby="footer-menu">
            <h2 id="footer-menu" className="text-lg font-bold">{t("menu.title")}</h2>
            <nav aria-label={t("menu.title")}>
              <ul className="mt-4 space-y-6">
                {menuItems.map((item: { label: string; href: string }, idx: number) => (
                  <li key={`menu-${idx}`}>
                    <Link href={item.href} className="text-white/50 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Newsletter */}
          <section aria-labelledby="footer-newsletter">
            <h2 id="footer-newsletter" className="text-lg font-bold">{newsletter.title}</h2>
            <p className="mt-3 text-white/50">{newsletter.description}</p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3" aria-label={newsletter.title}>
              <Input
                aria-label={newsletter.placeholder}
                name="email"
                type="email"
                size="lg"
                variant="flat"
                placeholder={newsletter.placeholder}
                autoComplete="email"
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" color="default" className="bg-[#115C5B] text-white hover:bg-[#183F33]">
                {newsletter.cta}
              </Button>
            </form>
          </section>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-6">
          <p className="text-white/80 text-sm">{copyright}</p>
          <div className="mt-4 md:mt-0 flex items-center gap-5">
            <Link href="https://facebook.com/" aria-label="Facebook" title="Facebook" className="text-white/50 hover:text-white">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com/" aria-label="Instagram" title="Instagram" className="text-white/50 hover:text-white">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/" aria-label="LinkedIn" title="LinkedIn" className="text-white/50 hover:text-white">
              <LinkedInIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;