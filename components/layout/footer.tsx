"use client";

import * as React from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useMessages, useTranslations } from "next-intl";

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
    <footer className="bg-primary text-white mt-16 md:mt-20" role="contentinfo">
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
            <h2 className="text-lg font-bold mb-4" id="footer-contact">
              {t("contact.title")}
            </h2>
            <div className="space-y-4">
              {/* WhatsApp */}
              <Link
                isExternal
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                href="https://wa.me/51946483010?text=Hola%20Hugo,%20me%20gustaría%20agendar%20una%20sesión"
                title={t("contact.whatsappTitle")}
              >
                <div className="bg-green-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {t("contact.whatsappLabel")}
                  </p>
                  <p className="text-sm">+51 946 483 010</p>
                </div>
              </Link>

              {/* Email */}
              <Link
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                href="mailto:hola@hugotech.pe"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {t("contact.emailLabel")}
                  </p>
                  <p className="text-sm">hola@hugotech.pe</p>
                </div>
              </Link>
            </div>
          </section>

          {/* Información Legal */}
          <section aria-labelledby="footer-legal">
            <h2 className="text-lg font-bold" id="footer-legal">
              {t("legal.title")}
            </h2>
            <nav aria-label={t("legal.title")}>
              <ul className="mt-4 space-y-6">
                {legalLinks.map(
                  (link: { label: string; href: string }, idx: number) => (
                    <li key={`legal-${idx}`}>
                      <Link
                        className="text-white/90 hover:text-white"
                        href={link.href}
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
            <h2 className="text-lg font-bold" id="footer-menu">
              {t("menu.title")}
            </h2>
            <nav aria-label={t("menu.title")}>
              <ul className="mt-4 space-y-6">
                {menuItems.map(
                  (item: { label: string; href: string }, idx: number) => (
                    <li key={`menu-${idx}`}>
                      <Link
                        className="text-white/90 hover:text-white"
                        href={item.href}
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
            <h2 className="text-lg font-bold" id="footer-newsletter">
              {newsletter.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90">
              {newsletter.description}
            </p>
            <form
              aria-label={newsletter.title}
              className="mt-4 flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                {newsletter.placeholder}
              </label>
              <Input
                required
                aria-label={newsletter.placeholder}
                autoComplete="email"
                className="flex-1"
                classNames={{
                  input: "placeholder:!text-gray-900",
                }}
                id="newsletter-email"
                name="email"
                placeholder={newsletter.placeholder}
                size="lg"
                type="email"
                variant="flat"
              />
              <Button
                className="bg-[#115C5B] text-white hover:bg-[#183F33] w-full sm:w-auto"
                color="default"
                size="lg"
                type="submit"
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
            
            {/* Modelo Non-Profit */}
            {messages?.Sections?.Footer?.bottom?.donation && (
              <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <span>{messages.Sections.Footer.bottom.donation.emoji}</span>
                  {messages.Sections.Footer.bottom.donation.title}
                </p>
                <p
                  className="text-xs text-white/90"
                  dangerouslySetInnerHTML={{
                    __html: messages.Sections.Footer.bottom.donation.text,
                  }}
                />
              </div>
            )}

            {/* Mantra/Propósito */}
            <p className="mt-3 text-sm md:text-base font-medium text-white/90 italic max-w-2xl">
              &ldquo;{t("bottom.mantra")}&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              isExternal
              aria-label="Instagram de HugoTech"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
              href="https://www.instagram.com/hugotech.pe"
              title="Sígueme en Instagram @hugotech.pe"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn de Hugo Casanova"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
              href="https://www.linkedin.com/in/hcasanovam/"
              title="Conéctate en LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              isExternal
              aria-label="TikTok de HugoTech"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
              href="https://www.tiktok.com/@hugotech.pe"
              title="Sígueme en TikTok @hugotech.pe"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link
              isExternal
              aria-label="WhatsApp de Hugo"
              className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
              href="https://wa.me/51946483010?text=Hola%20Hugo,%20me%20gustaría%20agendar%20una%20sesión"
              title="Escríbeme por WhatsApp"
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
