"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";
import StudioNavbar from "@/components/layout/studio-navbar";

export default function StudioPage() {
  return (
    <div className="flex h-screen flex-col">
      <StudioNavbar />
      <div className="flex-1 overflow-hidden">
        <NextStudio config={config} />
      </div>
    </div>
  );
}
