"use client";

import { NextStudio } from "next-sanity/studio";
import Link from "next/link";

import config from "@/sanity.config";

export default function StudioPage() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header simple para el Studio */}
      <header className="border-b border-divider bg-background/70 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
          <Link href="/es" className="flex items-center gap-2">
            <span className="text-xl font-bold">HugoTech</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              className="text-sm text-default-600 hover:text-primary"
              href="/es/blog"
            >
              Ver Blog
            </Link>
            <Link
              className="text-sm text-default-600 hover:text-primary"
              href="/es"
            >
              Inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Studio ocupa el resto del espacio */}
      <div className="flex-1">
        <NextStudio config={config} />
      </div>
    </div>
  );
}
