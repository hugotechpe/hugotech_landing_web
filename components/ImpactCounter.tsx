"use client";

import { useEffect, useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

import { AnimatedCounter } from "./AnimatedCounter";

interface ImpactData {
  totalRecaudado: number;
  totalSesiones: number;
  causas: { [key: string]: number };
  ultimaActualizacion: string;
  success: boolean;
}

interface ImpactCounterProps {
  title: string;
  subtitle: string;
  totalLabel: string;
  sessionsLabel: string;
  causesLabel: string;
  lastUpdateLabel: string;
  loadingText: string;
  errorText: string;
}

export default function ImpactCounter({
  title,
  subtitle,
  totalLabel,
  sessionsLabel,
  causesLabel,
  lastUpdateLabel,
  loadingText,
  errorText,
}: ImpactCounterProps) {
  const [data, setData] = useState<ImpactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Cache busting: agregar timestamp para evitar cache del navegador
    fetch(`/api/impact-data?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        if (!json.success) setError(true);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-success/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {loadingText}
          </p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-success/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {errorText}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-success/5 to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Total Recaudado */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-4 border-success-400 dark:border-success-600 bg-white dark:bg-gray-800">
              <CardBody className="p-8 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {totalLabel}
                </p>
                <div className="text-5xl md:text-6xl font-bold text-success-600 dark:text-success-400 mb-2">
                  {"S/ "}
                  <AnimatedCounter end={data.totalRecaudado} />
                </div>
                <Chip color="success" size="lg" variant="flat">
                  💰 100% a causas sociales
                </Chip>
              </CardBody>
            </Card>
          </motion.div>

          {/* Total Sesiones */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-4 border-primary-400 dark:border-primary-600 bg-white dark:bg-gray-800">
              <CardBody className="p-8 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {sessionsLabel}
                </p>
                <div className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  <AnimatedCounter end={data.totalSesiones} />
                </div>
                <Chip color="primary" size="lg" variant="flat">
                  🤝 Sesiones con impacto
                </Chip>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Desglose por Causas */}
        {Object.keys(data.causas).length > 0 && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  {causesLabel}
                </h3>
                <div className="space-y-4">
                  {Object.entries(data.causas).map(([causa, monto]) => (
                    <div
                      key={causa}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">
                          {causa.toLowerCase().includes("perr") ||
                          causa.toLowerCase().includes("alberg")
                            ? "🐾"
                            : "💻"}
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {causa}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-success-600 dark:text-success-400">
                        {"S/ "}
                        <AnimatedCounter end={monto} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}

        {/* Última actualización */}
        {data.ultimaActualizacion && (
          <motion.div
            animate={{ opacity: 1 }}
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {lastUpdateLabel}: {data.ultimaActualizacion}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
