"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";

import HomeLayout from "../homeLayout";

export default function LibroReclamacionesPage() {
  const [formData, setFormData] = useState({
    tipoSolicitud: "",
    nombre: "",
    apellidos: "",
    tipoDocumento: "",
    numeroDocumento: "",
    email: "",
    telefono: "",
    direccion: "",
    departamento: "",
    provincia: "",
    distrito: "",
    tipoContratacion: "",
    detalleProductoServicio: "",
    montoReclamado: "",
    descripcionHechos: "",
    pedido: "",
    fechaIncidente: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí iría la lógica para enviar el formulario
    // Por ahora simulamos el envío
    setTimeout(() => {
      setSubmitMessage(
        "Tu reclamo ha sido registrado exitosamente. Recibirás una respuesta en un plazo máximo de 30 días calendario.",
      );
      setIsSubmitting(false);
      // Resetear formulario
      setFormData({
        tipoSolicitud: "",
        nombre: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: "",
        email: "",
        telefono: "",
        direccion: "",
        departamento: "",
        provincia: "",
        distrito: "",
        tipoContratacion: "",
        detalleProductoServicio: "",
        montoReclamado: "",
        descripcionHechos: "",
        pedido: "",
        fechaIncidente: "",
      });
    }, 2000);
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-5xl px-6 py-16">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              Libro de Reclamaciones
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              En cumplimiento del Código de Protección y Defensa del Consumidor
              (Ley N° 29571), ponemos a tu disposición nuestro Libro de
              Reclamaciones virtual.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-900 text-sm">
                <strong>Importante:</strong> La presentación de un reclamo no
                impide acudir a otras vías de solución de controversias ni es
                requisito previo para interponer una denuncia ante el INDECOPI.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">📋 ¿Qué es una Queja?</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 text-sm">
                  Disconformidad no relacionada con los servicios prestados,
                  sino con la atención al cliente o aspectos del proceso de
                  contratación.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">⚠️ ¿Qué es un Reclamo?</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 text-sm">
                  Disconformidad relacionada directamente con los servicios
                  prestados o con la facturación, cuando consideras que hay un
                  incumplimiento contractual.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Form */}
          <Card className="bg-white">
            <CardBody className="p-8 md:p-12">
              {submitMessage ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Registro Exitoso!
                  </h3>
                  <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                    {submitMessage}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    Hemos enviado una copia de tu registro al correo electrónico
                    proporcionado.
                  </p>
                  <Button color="primary" onPress={() => setSubmitMessage("")}>
                    Enviar otro reclamo
                  </Button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Sección 1: Tipo de Solicitud */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      1. Tipo de Solicitud
                    </h3>
                    <Select
                      isRequired
                      label="Selecciona el tipo"
                      placeholder="¿Es una queja o un reclamo?"
                      value={formData.tipoSolicitud}
                      onChange={(e) =>
                        handleChange("tipoSolicitud", e.target.value)
                      }
                    >
                      <SelectItem key="queja">Queja</SelectItem>
                      <SelectItem key="reclamo">Reclamo</SelectItem>
                    </Select>
                  </div>

                  {/* Sección 2: Datos del Consumidor */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      2. Datos del Consumidor
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        isRequired
                        label="Nombres"
                        placeholder="Tus nombres"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                      />
                      <Input
                        isRequired
                        label="Apellidos"
                        placeholder="Tus apellidos"
                        value={formData.apellidos}
                        onChange={(e) =>
                          handleChange("apellidos", e.target.value)
                        }
                      />
                      <Select
                        isRequired
                        label="Tipo de Documento"
                        placeholder="Selecciona"
                        value={formData.tipoDocumento}
                        onChange={(e) =>
                          handleChange("tipoDocumento", e.target.value)
                        }
                      >
                        <SelectItem key="dni">DNI</SelectItem>
                        <SelectItem key="ce">Carné de Extranjería</SelectItem>
                        <SelectItem key="pasaporte">Pasaporte</SelectItem>
                        <SelectItem key="ruc">RUC</SelectItem>
                      </Select>
                      <Input
                        isRequired
                        label="Número de Documento"
                        placeholder="12345678"
                        value={formData.numeroDocumento}
                        onChange={(e) =>
                          handleChange("numeroDocumento", e.target.value)
                        }
                      />
                      <Input
                        isRequired
                        label="Correo Electrónico"
                        placeholder="tu@email.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                      <Input
                        isRequired
                        label="Teléfono"
                        placeholder="987654321"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) =>
                          handleChange("telefono", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Sección 3: Domicilio */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      3. Domicilio
                    </h3>
                    <div className="grid md:grid-cols-1 gap-4 mb-4">
                      <Input
                        isRequired
                        label="Dirección"
                        placeholder="Calle, número, urbanización"
                        value={formData.direccion}
                        onChange={(e) =>
                          handleChange("direccion", e.target.value)
                        }
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Input
                        isRequired
                        label="Departamento"
                        placeholder="Lima"
                        value={formData.departamento}
                        onChange={(e) =>
                          handleChange("departamento", e.target.value)
                        }
                      />
                      <Input
                        isRequired
                        label="Provincia"
                        placeholder="Lima"
                        value={formData.provincia}
                        onChange={(e) =>
                          handleChange("provincia", e.target.value)
                        }
                      />
                      <Input
                        isRequired
                        label="Distrito"
                        placeholder="Miraflores"
                        value={formData.distrito}
                        onChange={(e) =>
                          handleChange("distrito", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Sección 4: Detalle del Servicio */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      4. Identificación del Servicio Contratado
                    </h3>
                    <div className="grid md:grid-cols-1 gap-4">
                      <Select
                        isRequired
                        label="Tipo de Contratación"
                        placeholder="Selecciona"
                        value={formData.tipoContratacion}
                        onChange={(e) =>
                          handleChange("tipoContratacion", e.target.value)
                        }
                      >
                        <SelectItem key="mentoria-individual">
                          Mentoría Individual 1 a 1
                        </SelectItem>
                        <SelectItem key="programa-empresas">
                          Programa para Empresas
                        </SelectItem>
                        <SelectItem key="servicio-business">
                          Servicio Business
                        </SelectItem>
                        <SelectItem key="taller">Taller o Workshop</SelectItem>
                        <SelectItem key="otro">Otro</SelectItem>
                      </Select>
                      <Textarea
                        isRequired
                        label="Detalle del Servicio"
                        minRows={3}
                        placeholder="Describe el servicio específico contratado"
                        value={formData.detalleProductoServicio}
                        onChange={(e) =>
                          handleChange(
                            "detalleProductoServicio",
                            e.target.value,
                          )
                        }
                      />
                      <Input
                        label="Monto Reclamado (opcional)"
                        placeholder="S/. 0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              S/.
                            </span>
                          </div>
                        }
                        type="number"
                        value={formData.montoReclamado}
                        onChange={(e) =>
                          handleChange("montoReclamado", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Sección 5: Detalle del Reclamo */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      5. Detalle de la Queja o Reclamo
                    </h3>
                    <div className="grid md:grid-cols-1 gap-4">
                      <Input
                        isRequired
                        label="Fecha del Incidente"
                        type="date"
                        value={formData.fechaIncidente}
                        onChange={(e) =>
                          handleChange("fechaIncidente", e.target.value)
                        }
                      />
                      <Textarea
                        isRequired
                        label="Descripción de los Hechos"
                        minRows={5}
                        placeholder="Describe detalladamente lo sucedido"
                        value={formData.descripcionHechos}
                        onChange={(e) =>
                          handleChange("descripcionHechos", e.target.value)
                        }
                      />
                      <Textarea
                        isRequired
                        label="Pedido / Solución Solicitada"
                        minRows={3}
                        placeholder="¿Qué esperas que hagamos para resolver esta situación?"
                        value={formData.pedido}
                        onChange={(e) => handleChange("pedido", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Información Legal */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">
                      📋 Información Importante
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>
                        • La empresa dará respuesta en un plazo máximo de{" "}
                        <strong>30 días calendario</strong>.
                      </li>
                      <li>
                        • Recibirás una copia de este registro en el correo
                        proporcionado.
                      </li>
                      <li>
                        • La respuesta será enviada al correo y dirección
                        indicados.
                      </li>
                      <li>
                        • Este registro no impide que puedas acudir a INDECOPI u
                        otras instancias.
                      </li>
                    </ul>
                  </div>

                  {/* Botón de Envío */}
                  <div className="flex justify-center pt-6">
                    <Button
                      className="min-w-[200px]"
                      color="primary"
                      isLoading={isSubmitting}
                      size="lg"
                      type="submit"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Reclamo"}
                    </Button>
                  </div>
                </form>
              )}
            </CardBody>
          </Card>

          {/* Información de Contacto */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Datos de la Empresa
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p>
                  <strong>Razón Social:</strong> Hugo Casanova / HugoTech
                </p>
                <p>
                  <strong>RUC:</strong> [Número de RUC]
                </p>
                <p>
                  <strong>Dirección:</strong> Lima, Perú
                </p>
              </div>
              <div>
                <p>
                  <strong>Email:</strong> info@hugotech.pe
                </p>
                <p>
                  <strong>Web:</strong> https://hugotech.pe
                </p>
                <p>
                  <strong>LinkedIn:</strong> linkedin.com/in/hcasanovam
                </p>
              </div>
            </div>
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
              href="/es/privacy-policy"
            >
              Ver Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
