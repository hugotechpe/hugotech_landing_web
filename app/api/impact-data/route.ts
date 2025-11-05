import { NextResponse } from "next/server";

const SHEET_ID = "1TtNBTYc61-EfZWqdxIj88YnLwvLI_pD79RtPLyJidco";

export async function GET() {
  try {
    // URL pública para leer el Google Sheet en formato CSV (gid=0 es la primera hoja)
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache por 1 hora
      redirect: "follow", // Seguir redirects
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Google Sheet");
    }

    const csvText = await response.text();

    // Parsear CSV - Separar por líneas y procesar
    const lines = csvText.split("\n").filter((line) => line.trim());

    // Saltar la primera línea (headers)
    let totalRecaudado = 0;
    let totalSesiones = 0;
    const causas: { [key: string]: number } = {};
    let ultimaActualizacion = "";

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      
      // Simple CSV parsing - split por coma y limpiar comillas
      const values = line.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));

      if (values.length >= 3) {
        const fecha = values[0];
        const montoStr = values[1];
        const causa = values[2];

        // Parsear monto
        const monto = parseFloat(montoStr);
        
        if (!isNaN(monto) && monto > 0) {
          totalRecaudado += monto;
          totalSesiones += 1;

          // Agrupar por causa
          if (causas[causa]) {
            causas[causa] += monto;
          } else {
            causas[causa] = monto;
          }

          // Actualizar última fecha
          if (fecha && (!ultimaActualizacion || fecha > ultimaActualizacion)) {
            ultimaActualizacion = fecha;
          }
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
