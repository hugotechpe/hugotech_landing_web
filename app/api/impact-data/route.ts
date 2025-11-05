import { NextResponse } from "next/server";

const SHEET_ID = "1TtNBTYc61-EfZWqdxIj88YnLwvLI_pD79RtPLyJidco";
const SHEET_NAME = "Hoja 1"; // Ajusta si tu hoja tiene otro nombre

export async function GET() {
  try {
    // URL pública para leer el Google Sheet en formato CSV
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Google Sheet");
    }

    const csvText = await response.text();

    // Parsear CSV simple
    const lines = csvText.split("\n").filter((line) => line.trim());

    // Procesar datos
    let totalRecaudado = 0;
    let totalSesiones = 0;
    const causas: { [key: string]: number } = {};
    let ultimaActualizacion = "";

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.replace(/"/g, "").trim());

      if (values.length >= 3) {
        const fecha = values[0];
        const monto = parseFloat(values[1]) || 0;
        const causa = values[2] || "Otras causas";

        totalRecaudado += monto;
        totalSesiones += 1;

        if (causas[causa]) {
          causas[causa] += monto;
        } else {
          causas[causa] = monto;
        }

        if (fecha && (!ultimaActualizacion || fecha > ultimaActualizacion)) {
          ultimaActualizacion = fecha;
        }
      }
    }

    return NextResponse.json({
      totalRecaudado,
      totalSesiones,
      causas,
      ultimaActualizacion,
      success: true,
    });
  } catch {
    // Error handling
    return NextResponse.json(
      {
        totalRecaudado: 0,
        totalSesiones: 0,
        causas: {},
        ultimaActualizacion: "",
        success: false,
        error: "No se pudo cargar los datos",
      },
      { status: 500 },
    );
  }
}
