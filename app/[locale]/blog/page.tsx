import Link from "next/link";

import { title } from "@/components/primitives";

const articles = [
  {
    slug: "burnout-silencioso-tech-2026",
    title:
      "Burnout Silencioso en Tech: Lo que nadie te dice sobre el agotamiento invisible",
    excerpt:
      "¿Trabajas pero te sientes vacío? 7 señales de burnout silencioso + Plan de 30 días para recuperar tu energía sin renunciar.",
    date: "2025-12-03",
    readTime: "14 min",
    tags: ["Mental Health", "Burnout", "Work-Life Balance"],
  },
  {
    slug: "liderazgo-tech-leads-introvertidos-2026",
    title:
      "Liderazgo para Tech Leads Introvertidos: No necesitas fingir ser extrovertido",
    excerpt:
      "5 mitos que te limitan + 7 herramientas prácticas para liderar equipos tech sin perder tu esencia.",
    date: "2025-12-03",
    readTime: "15 min",
    tags: ["Tech Leadership", "Introvert Leaders", "Soft Skills"],
  },
  {
    slug: "estancamiento-senior-developer-2026",
    title: "¿Estancado como Senior Developer? Guía 2026 para tu Siguiente Paso",
    excerpt:
      "Manager, Staff Engineer o Emprender: Cómo decidir tu siguiente paso como Senior Developer sin morir en el intento (y sin que la IA te quite el sueño).",
    date: "2025-12-03",
    readTime: "12 min",
    tags: ["Career Development", "Senior Developer", "Tech Leadership"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className={title()}>Blog</h1>
      <p className="mt-4 text-lg text-default-600 mb-12">
        Reflexiones sobre carrera tech, liderazgo y desarrollo personal
      </p>

      <div className="grid gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="block rounded-lg border border-default-200 p-6 transition-all hover:border-primary hover:shadow-lg"
            href={`/es/blog/${article.slug}`}
          >
            <div className="mb-2 flex items-center gap-3 text-sm text-default-500">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{article.readTime} de lectura</span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-foreground">
              {article.title}
            </h2>

            <p className="mb-4 text-default-600">{article.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 text-primary font-semibold">
              Leer artículo →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
