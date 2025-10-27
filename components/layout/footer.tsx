"use client";

import * as React from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useMessages, useTranslations } from "next-intl";

import FacebookIcon from "@/common/icons/social/FacebookIcon";
import InstagramIcon from "@/common/icons/social/InstagramIcon";
import LinkedInIcon from "@/common/icons/social/LinkedInIcon";
import TikTokIcon from "@/common/icons/social/TikTokIcon";
import WhatsAppIcon from "@/common/icons/social/WhatsAppIcon";

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
    <footer role="contentinfo" className="bg-primary text-white mt-16 md:mt-20">
      <div className="container mx-auto max-w-screen-xl px-6 py-12 md:py-16">
        {/* Misión y Visión */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💚</span> {mission.title}
            </h2>
            <p className="text-white/90 leading-[1.8] text-base">
              {mission.text}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🌱</span> {vision.title}
            </h2>
            <p className="text-white/90 leading-[1.8] text-base">
              {vision.text}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Información de Contacto Directo */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-lg font-bold mb-4">
              {t("contact.title")}
            </h2>
            <div className="space-y-4">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/51946483010?text=Hola%20Hugo,%20me%20gustaría%20agendar%20una%20sesión"
                isExternal
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                title={t("contact.whatsappTitle")}
              >
                <div className="bg-green-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">{t("contact.whatsappLabel")}</p>
                  <p className="text-sm">+51 946 483 010</p>
                </div>
              </Link>

              {/* Email */}
              <Link
                href="mailto:hola@hugotech.pe"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                title={t("contact.emailTitle")}
              >
                <div className="bg-brand p-2 rounded-full group-hover:scale-110 transition-transform">
                  <svg
                    className="h-5 w-5 text-customgray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("contact.emailLabel")}</p>
                  <p className="text-sm">hola@hugotech.pe</p>
                </div>
              </Link>
            </div>
          </section>

          {/* Información Legal */}
          <section aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-lg font-bold">
              {t("legal.title")}
            </h2>
            <nav aria-label={t("legal.title")}>
              <ul className="mt-4 space-y-6">
                {legalLinks.map(
                  (link: { label: string; href: string }, idx: number) => (
                    <li key={`legal-${idx}`}>
                      <Link
                        href={link.href}
                        className="text-white/90 hover:text-white"
                        title={link.label}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </section>

          {/* Menú */}
          <section aria-labelledby="footer-menu">
            <h2 id="footer-menu" className="text-lg font-bold">
              {t("menu.title")}
            </h2>
            <nav aria-label={t("menu.title")}>
              <ul className="mt-4 space-y-6">
                {menuItems.map(
                  (item: { label: string; href: string }, idx: number) => (
                    <li key={`menu-${idx}`}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </section>

          {/* Newsletter */}
          <section aria-labelledby="footer-newsletter">
            <h2 id="footer-newsletter" className="text-lg font-bold">
              {newsletter.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90">
              {newsletter.description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col sm:flex-row gap-3"
              aria-label={newsletter.title}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {newsletter.placeholder}
              </label>
              <Input
                id="newsletter-email"
                aria-label={newsletter.placeholder}
                name="email"
                type="email"
                size="lg"
                variant="flat"
                placeholder={newsletter.placeholder}
                autoComplete="email"
                required
                className="flex-1"
                classNames={{
                  input: "placeholder:!text-gray-600"
                }}
              />
              <Button
                type="submit"
                size="lg"
                color="default"
                className="bg-[#115C5B] text-white hover:bg-[#183F33] w-full sm:w-auto"
              >
                {newsletter.cta}
              </Button>
            </form>
          </section>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
          <div className="flex-1 text-center md:text-left">
            <p className="text-white/80 text-xs sm:text-sm">{copyright}</p>
            {/* Mantra/Propósito */}
            <p className="mt-3 text-sm md:text-base font-medium text-white/90 italic max-w-2xl">
              &ldquo;{t("bottom.mantra")}&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.instagram.com/hugotech.pe"
              isExternal
              aria-label="Instagram de HugoTech"
              title="Sígueme en Instagram @hugotech.pe"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hcasanovam/"
              isExternal
              aria-label="LinkedIn de Hugo Casanova"
              title="Conéctate en LinkedIn"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@hugotech.pe"
              isExternal
              aria-label="TikTok de HugoTech"
              title="Sígueme en TikTok @hugotech.pe"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/51946483010?text=Hola%20Hugo,%20me%20gustaría%20agendar%20una%20sesión"
              isExternal
              aria-label="WhatsApp de Hugo"
              title="Escríbeme por WhatsApp"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
