import Link from "next/link";
import { Metadata } from "next";

import HomeLayout from "../homeLayout";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | HugoTech",
  description:
    "Políticas de privacidad y protección de datos personales de HugoTech. Conoce cómo recopilamos, usamos y protegemos tu información.",
};

export default function PrivacyPolicyPage() {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6 py-16">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              Políticas de Privacidad
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Última actualización: 25 de octubre de 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-10">
            {/* Introducción */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                Introducción
              </h2>
              <p className="text-gray-700 leading-[1.9] tracking-wide text-[15px] md:text-base">
                En HugoTech, valoramos y respetamos tu privacidad. Esta política
                describe cómo recopilamos, utilizamos, almacenamos y protegemos
                tu información personal de acuerdo con la Ley N° 29733 - Ley de
                Protección de Datos Personales de Perú y el Reglamento General
                de Protección de Datos (GDPR) de la Unión Europea.
              </p>
            </section>

            {/* Sección 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                1. Información que Recopilamos
              </h2>
              <div className="space-y-4 text-gray-700 text-[15px] md:text-base">
                <p className="leading-[1.9] tracking-wide">
                  <strong>
                    1.1 Información Personal que nos proporcionas:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Empresa u organización (si aplica)</li>
                  <li>Cargo o rol profesional</li>
                  <li>
                    Información profesional relevante para nuestros servicios
                  </li>
                </ul>

                <p className="mt-4 leading-[1.9] tracking-wide">
                  <strong>1.2 Información recopilada automáticamente:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de navegación</li>
                  <li>Datos de cookies y tecnologías similares</li>
                  <li>Origen de referencia (cómo llegaste a nuestro sitio)</li>
                </ul>
              </div>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                2. Cómo Utilizamos tu Información
              </h2>
              <p className="text-gray-700 leading-[1.9] tracking-wide mb-4 text-[15px] md:text-base">
                Utilizamos tu información personal para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-[15px] md:text-base leading-relaxed">
                <li>Proporcionar nuestros servicios de mentoring y coaching</li>
                <li>Programar y gestionar sesiones individuales o grupales</li>
                <li>Comunicarnos contigo sobre nuestros servicios</li>
                <li>
                  Enviar información relevante, newsletters y recursos
                  educativos (con tu consentimiento)
                </li>
                <li>Procesar pagos y gestionar facturación</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>
                  Analizar tendencias y comportamiento en nuestro sitio web
                </li>
              </ul>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                3. Base Legal para el Procesamiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Procesamos tu información personal bajo las siguientes bases
                legales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Consentimiento:</strong> Cuando nos das tu
                  consentimiento explícito
                </li>
                <li>
                  <strong>Ejecución de contrato:</strong> Para proporcionar los
                  servicios contratados
                </li>
                <li>
                  <strong>Interés legítimo:</strong> Para mejorar nuestros
                  servicios y comunicación
                </li>
                <li>
                  <strong>Obligación legal:</strong> Cuando lo requiere la ley
                  peruana
                </li>
              </ul>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                4. Compartir Información con Terceros
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos tu información personal. Podemos compartir tu
                información solo con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Proveedores de servicios:</strong> Plataformas de
                  pago, email marketing, calendario (como Stripe, Mailchimp,
                  Calendly), bajo acuerdos de confidencialidad
                </li>
                <li>
                  <strong>Autoridades:</strong> Cuando lo requiera la ley o para
                  proteger derechos legales
                </li>
                <li>
                  <strong>Empresas contratantes:</strong> Si trabajas con
                  nosotros a través de tu empleador, podemos compartir
                  información relevante del programa
                </li>
              </ul>
            </section>

            {/* Sección 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                5. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Recordar tus preferencias (idioma, tema)</li>
                <li>Analizar el uso del sitio web (Google Analytics)</li>
                <li>Mejorar la funcionalidad y rendimiento</li>
                <li>Personalizar tu experiencia</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Puedes gestionar las cookies desde la configuración de tu
                navegador. Ten en cuenta que deshabilitar cookies puede afectar
                la funcionalidad del sitio.
              </p>
            </section>

            {/* Sección 6 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                6. Seguridad de la Información
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para
                proteger tu información personal contra acceso no autorizado,
                pérdida, destrucción o alteración. Esto incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>Cifrado SSL/TLS para transmisión de datos</li>
                <li>Acceso restringido a información personal</li>
                <li>Almacenamiento seguro en servidores protegidos</li>
                <li>Revisión regular de nuestras prácticas de seguridad</li>
              </ul>
            </section>

            {/* Sección 7 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                7. Retención de Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos tu información personal solo durante el tiempo
                necesario para cumplir con los propósitos descritos en esta
                política, a menos que la ley requiera o permita un período de
                retención más largo. Los datos de facturación se conservan por
                el período requerido por las leyes tributarias peruanas
                (generalmente 5 años).
              </p>
            </section>

            {/* Sección 8 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                8. Tus Derechos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bajo la legislación peruana y el GDPR, tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Acceso:</strong> Solicitar una copia de tus datos
                  personales
                </li>
                <li>
                  <strong>Rectificación:</strong> Corregir datos inexactos o
                  incompletos
                </li>
                <li>
                  <strong>Eliminación:</strong> Solicitar la eliminación de tus
                  datos (derecho al olvido)
                </li>
                <li>
                  <strong>Portabilidad:</strong> Recibir tus datos en formato
                  estructurado y legible
                </li>
                <li>
                  <strong>Oposición:</strong> Oponerte al procesamiento de tus
                  datos
                </li>
                <li>
                  <strong>Limitación:</strong> Solicitar la limitación del
                  procesamiento
                </li>
                <li>
                  <strong>Revocación:</strong> Retirar tu consentimiento en
                  cualquier momento
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer estos derechos, contáctanos en:{" "}
                <strong>info@hugotech.pe</strong>
              </p>
            </section>

            {/* Sección 9 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                9. Transferencias Internacionales
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Algunos de nuestros proveedores de servicios pueden estar
                ubicados fuera de Perú. En estos casos, nos aseguramos de que
                existan garantías adecuadas para la protección de tu
                información, como cláusulas contractuales estándar aprobadas por
                la UE o certificaciones de Privacy Shield.
              </p>
            </section>

            {/* Sección 10 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                10. Menores de Edad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios están dirigidos a adultos. No recopilamos
                intencionalmente información personal de menores de 18 años sin
                el consentimiento de sus padres o tutores legales.
              </p>
            </section>

            {/* Sección 11 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                11. Cambios en esta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta política de privacidad periódicamente.
                Te notificaremos sobre cambios significativos mediante un aviso
                en nuestro sitio web o por correo electrónico. Te recomendamos
                revisar esta página regularmente.
              </p>
            </section>

            {/* Sección 12 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                12. Autoridad de Control
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si consideras que tus derechos de protección de datos han sido
                vulnerados, puedes presentar una reclamación ante:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 font-semibold">
                  Autoridad Nacional de Protección de Datos Personales
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Ministerio de Justicia y Derechos Humanos
                </p>
                <p className="text-gray-600 text-sm">Lima, Perú</p>
                <p className="text-gray-600 text-sm">Web: www.minjus.gob.pe</p>
              </div>
            </section>

            {/* Sección 13 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
                13. Contacto
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta sobre esta Política de Privacidad o
                sobre el tratamiento de tus datos personales, contáctanos:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li>
                  <strong>Responsable:</strong> Hugo Casanova / HugoTech
                </li>
                <li>
                  <strong>Email:</strong> info@hugotech.pe
                </li>
                <li>
                  <strong>Sitio Web:</strong> https://hugotech.pe
                </li>
                <li>
                  <strong>LinkedIn:</strong> linkedin.com/in/hcasanovam
                </li>
              </ul>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              className="text-primary hover:text-primary/80 font-medium text-center"
              href="/es/terminos-y-condiciones"
            >
              ← Ver Términos y Condiciones
            </Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link
              className="text-primary hover:text-primary/80 font-medium text-center"
              href="/es/libro-de-reclamaciones"
            >
              Libro de Reclamaciones →
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
