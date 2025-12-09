import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";

/**
 * API Route para incrementar views de un post
 * POST /api/increment-views
 * Body: { slug: string }
 */
export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: "Slug es requerido" },
        { status: 400 }
      );
    }

    // Buscar el post por slug
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] { _id, views }`,
      { slug }
    );

    if (!post) {
      return NextResponse.json(
        { error: "Post no encontrado" },
        { status: 404 }
      );
    }

    // Incrementar views
    const currentViews = post.views || 0;
    await client
      .patch(post._id)
      .set({ views: currentViews + 1 })
      .commit();

    return NextResponse.json({ 
      success: true, 
      views: currentViews + 1 
    });
  } catch (error) {
    console.error("Error incrementando views:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
