import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.TermsAndConditions");
  
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function TerminosYCondicionesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4 leading-tight">
            Términos y Condiciones
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Última actualización: 25 de octubre de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-10">
          
          {/* Sección 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar los servicios de HugoTech, aceptas estar vinculado por estos 
              Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
              no debes utilizar nuestros servicios.
            </p>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              2. Descripción de los Servicios
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              HugoTech ofrece servicios profesionales de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Mentoring y coaching tecnológico individual (1 a 1)</li>
              <li>Programas de desarrollo para equipos de tecnología</li>
              <li>Consultoría en agilidad y transformación digital</li>
              <li>Talleres de liderazgo y desarrollo de equipos de alto rendimiento</li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              3. Uso de los Servicios
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al utilizar nuestros servicios, te comprometes a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Proporcionar información veraz y actualizada</li>
              <li>Mantener la confidencialidad de tu cuenta si corresponde</li>
              <li>No utilizar los servicios para fines ilegales o no autorizados</li>
              <li>Respetar la propiedad intelectual de HugoTech y sus materiales</li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              4. Reservas y Pagos
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>4.1 Reserva de Sesiones:</strong> Las sesiones de mentoring y coaching 
                se reservan a través de nuestro sistema de calendario. Al reservar, te comprometes 
                a asistir a la hora acordada.
              </p>
              <p>
                <strong>4.2 Pagos:</strong> Los pagos se procesan de forma segura a través de 
                plataformas autorizadas. Los precios están sujetos a cambios sin previo aviso.
              </p>
              <p>
                <strong>4.3 Cancelaciones:</strong> Las cancelaciones deben realizarse con al menos 
                24 horas de anticipación. Cancelaciones tardías pueden resultar en cargos.
              </p>
              <p>
                <strong>4.4 Reembolsos:</strong> Los reembolsos se evaluarán caso por caso según 
                nuestra política de satisfacción del cliente.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              5. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido, materiales, metodologías y recursos proporcionados por HugoTech 
              son propiedad exclusiva de Hugo Casanova / HugoTech y están protegidos por las leyes 
              de propiedad intelectual. No está permitida su reproducción, distribución o uso 
              comercial sin autorización expresa.
            </p>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              6. Confidencialidad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              HugoTech se compromete a mantener la confidencialidad de toda la información 
              compartida durante las sesiones de mentoring y coaching. Del mismo modo, esperamos 
              que los clientes mantengan la confidencialidad de las metodologías y materiales 
              compartidos.
            </p>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              7. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              HugoTech proporciona servicios de mentoring y coaching con el objetivo de apoyar 
              el desarrollo profesional. Sin embargo, no garantizamos resultados específicos y 
              no nos hacemos responsables de decisiones tomadas por los clientes basadas en 
              nuestras sesiones. Los resultados dependen del compromiso y aplicación del cliente.
            </p>
          </section>

          {/* Sección 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              8. Modificaciones de los Términos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              HugoTech se reserva el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en 
              este sitio web. Es tu responsabilidad revisar periódicamente estos términos.
            </p>
          </section>

          {/* Sección 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              9. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa 
              será resuelta en los tribunales competentes de Lima, Perú.
            </p>
          </section>

          {/* Sección 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              10. Contacto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para cualquier consulta sobre estos Términos y Condiciones, puedes contactarnos:
            </p>
            <ul className="list-none space-y-2 text-gray-700 mt-4">
              <li><strong>Email:</strong> info@hugotech.pe</li>
              <li><strong>Sitio Web:</strong> https://hugotech.pe</li>
              <li><strong>LinkedIn:</strong> linkedin.com/in/hcasanovam</li>
            </ul>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="/es/privacy-policy" 
            className="text-primary hover:text-primary/80 font-medium text-center"
          >
            Ver Políticas de Privacidad →
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a 
            href="/es/libro-de-reclamaciones" 
            className="text-primary hover:text-primary/80 font-medium text-center"
          >
            Libro de Reclamaciones →
          </a>
        </div>
      </div>
    </div>
  );
}
