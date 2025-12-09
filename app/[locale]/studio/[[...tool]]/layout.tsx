import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HugoTech Studio",
  description: "Panel de administración del blog",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
