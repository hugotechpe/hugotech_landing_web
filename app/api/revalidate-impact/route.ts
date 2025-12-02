import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Opcional: agregar un secret para proteger el endpoint
    const searchParams = request.nextUrl.searchParams;
    const secret = searchParams.get("secret");

    // Si quieres protegerlo, descomenta esto y usa: ?secret=tu_secreto_aqui
    // if (secret !== process.env.REVALIDATE_SECRET) {
    //   return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    // }

    // Revalidar la ruta que consume los datos de impacto
    revalidatePath("/[locale]/pricing", "page");
    revalidatePath("/es/pricing");
    revalidatePath("/en/pricing");

    // También forzar revalidación del endpoint de datos
    await fetch(
      `${request.nextUrl.origin}/api/impact-data?nocache=${Date.now()}`,
      { cache: "no-store" }
    );

    return NextResponse.json({
      revalidated: true,
      message: "Cache actualizado exitosamente",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        revalidated: false,
        message: "Error al actualizar cache",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
