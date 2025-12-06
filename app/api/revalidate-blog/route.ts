import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const secret = searchParams.get("secret");

    // Protección básica (opcional)
    if (secret && secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    if (slug) {
      // Revalidar un artículo específico
      revalidatePath(`/[locale]/blog/${slug}`, "page");
      revalidatePath(`/es/blog/${slug}`);
      revalidatePath(`/en/blog/${slug}`);
    } else {
      // Revalidar todas las páginas del blog
      revalidatePath("/[locale]/blog", "layout");
      revalidatePath("/es/blog");
      revalidatePath("/en/blog");

      // Revalidar artículos específicos conocidos
      const slugs = [
        "5-senales-burnout-tech",
        "estancamiento-senior-developer-2026",
        "burnout-silencioso-tech-2026",
        "liderazgo-tech-leads-introvertidos-2026",
      ];

      slugs.forEach((s) => {
        revalidatePath(`/es/blog/${s}`);
        revalidatePath(`/en/blog/${s}`);
      });
    }

    return NextResponse.json({
      revalidated: true,
      slug: slug || "all",
      message: "Blog cache actualizado exitosamente",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        revalidated: false,
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
