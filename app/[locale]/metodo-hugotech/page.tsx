import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { use } from "react";

import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MetodoHugotech" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t("keywords"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "article",
    },
  };
}

export default function MetodoHugotechPage({ params }: Props) {
  const resolvedParams = use(params);
  const { locale } = resolvedParams;
  const t = useTranslations("MetodoHugotech");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: t("title"), url: `/${locale}/metodo-hugotech` },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Chip className="mb-6" color="primary" size="lg" variant="flat">
            {t("hero.badge")}
          </Chip>
          <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-2xl text-default-700 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-16">
          <Card>
            <CardBody className="p-8 md:p-12">
              <p className="text-xl text-default-700 leading-relaxed mb-6">
                {t("intro.p1")}
              </p>
              <p className="text-xl text-default-700 leading-relaxed mb-6">
                {t("intro.p2")}
              </p>
              <p className="text-xl text-default-700 leading-relaxed">
                {t("intro.p3")}
              </p>
            </CardBody>
          </Card>
        </section>

        {/* Por qué nace el método */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("origin.title")}
          </h2>
          <Card className="mb-6">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🔥</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-3">
                    {t("origin.problem1.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {t("origin.problem1.content")}
                  </p>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("origin.problem1.impact")}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-6">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-3">
                    {t("origin.problem2.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {t("origin.problem2.content")}
                  </p>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("origin.problem2.impact")}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎭</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-3">
                    {t("origin.problem3.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {t("origin.problem3.content")}
                  </p>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("origin.problem3.impact")}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Los 5 pilares del método */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("pillars.title")}
          </h2>
          <p className="text-xl text-default-700 mb-10 leading-relaxed">
            {t("pillars.subtitle")}
          </p>

          {/* Pilar 1 */}
          <Card className="mb-8">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Chip color="primary" size="lg" variant="solid">
                  1
                </Chip>
                <h3 className="text-3xl font-bold text-customgray">
                  {t("pillars.pillar1.title")}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {t("pillars.pillar1.content")}
              </p>
              <div className="bg-default-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-customgray mb-4">
                  {t("pillars.pillar1.practiceTitle")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar1.practice1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar1.practice2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar1.practice3")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg italic text-default-600">
                  {t("pillars.pillar1.quote")}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Pilar 2 */}
          <Card className="mb-8">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Chip color="primary" size="lg" variant="solid">
                  2
                </Chip>
                <h3 className="text-3xl font-bold text-customgray">
                  {t("pillars.pillar2.title")}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {t("pillars.pillar2.content")}
              </p>
              <div className="bg-default-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-customgray mb-4">
                  {t("pillars.pillar2.practiceTitle")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar2.practice1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar2.practice2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar2.practice3")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg italic text-default-600">
                  {t("pillars.pillar2.quote")}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Pilar 3 */}
          <Card className="mb-8">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Chip color="primary" size="lg" variant="solid">
                  3
                </Chip>
                <h3 className="text-3xl font-bold text-customgray">
                  {t("pillars.pillar3.title")}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {t("pillars.pillar3.content")}
              </p>
              <div className="bg-default-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-customgray mb-4">
                  {t("pillars.pillar3.practiceTitle")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar3.practice1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar3.practice2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar3.practice3")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg italic text-default-600">
                  {t("pillars.pillar3.quote")}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Pilar 4 */}
          <Card className="mb-8">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Chip color="primary" size="lg" variant="solid">
                  4
                </Chip>
                <h3 className="text-3xl font-bold text-customgray">
                  {t("pillars.pillar4.title")}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {t("pillars.pillar4.content")}
              </p>
              <div className="bg-default-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-customgray mb-4">
                  {t("pillars.pillar4.practiceTitle")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar4.practice1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar4.practice2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar4.practice3")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg italic text-default-600">
                  {t("pillars.pillar4.quote")}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Pilar 5 */}
          <Card className="mb-8">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Chip color="primary" size="lg" variant="solid">
                  5
                </Chip>
                <h3 className="text-3xl font-bold text-customgray">
                  {t("pillars.pillar5.title")}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {t("pillars.pillar5.content")}
              </p>
              <div className="bg-default-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-customgray mb-4">
                  {t("pillars.pillar5.practiceTitle")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar5.practice1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar5.practice2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-lg text-default-700">
                      {t("pillars.pillar5.practice3")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg italic text-default-600">
                  {t("pillars.pillar5.quote")}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Diferenciadores únicos */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("differentiators.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("differentiators.diff1.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed">
                  {t("differentiators.diff1.content")}
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("differentiators.diff2.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed">
                  {t("differentiators.diff2.content")}
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("differentiators.diff3.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed">
                  {t("differentiators.diff3.content")}
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("differentiators.diff4.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed">
                  {t("differentiators.diff4.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Proceso de implementación */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("process.title")}
          </h2>
          <p className="text-xl text-default-700 mb-10 leading-relaxed">
            {t("process.subtitle")}
          </p>

          {/* Fase 1 */}
          <Card className="mb-6">
            <CardBody className="p-8">
              <div className="flex items-start gap-4">
                <Chip
                  className="flex-shrink-0"
                  color="success"
                  size="lg"
                  variant="flat"
                >
                  {t("process.phase1.number")}
                </Chip>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("process.phase1.title")}
                  </h3>
                  <p className="text-lg text-default-700 mb-4 leading-relaxed">
                    {t("process.phase1.content")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase1.item1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase1.item2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase1.item3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Fase 2 */}
          <Card className="mb-6">
            <CardBody className="p-8">
              <div className="flex items-start gap-4">
                <Chip
                  className="flex-shrink-0"
                  color="success"
                  size="lg"
                  variant="flat"
                >
                  {t("process.phase2.number")}
                </Chip>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("process.phase2.title")}
                  </h3>
                  <p className="text-lg text-default-700 mb-4 leading-relaxed">
                    {t("process.phase2.content")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase2.item1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase2.item2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase2.item3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Fase 3 */}
          <Card>
            <CardBody className="p-8">
              <div className="flex items-start gap-4">
                <Chip
                  className="flex-shrink-0"
                  color="success"
                  size="lg"
                  variant="flat"
                >
                  {t("process.phase3.number")}
                </Chip>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("process.phase3.title")}
                  </h3>
                  <p className="text-lg text-default-700 mb-4 leading-relaxed">
                    {t("process.phase3.content")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase3.item1")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase3.item2")}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">→</span>
                      <span className="text-default-700">
                        {t("process.phase3.item3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Para quién es este método */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("forWhom.title")}
          </h2>
          <div className="space-y-6">
            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  {t("forWhom.profile1.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed mb-4">
                  {t("forWhom.profile1.description")}
                </p>
                <p className="text-lg text-default-700 leading-relaxed">
                  <span className="font-bold">
                    {t("forWhom.profile1.resultLabel")}
                  </span>{" "}
                  {t("forWhom.profile1.result")}
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  {t("forWhom.profile2.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed mb-4">
                  {t("forWhom.profile2.description")}
                </p>
                <p className="text-lg text-default-700 leading-relaxed">
                  <span className="font-bold">
                    {t("forWhom.profile2.resultLabel")}
                  </span>{" "}
                  {t("forWhom.profile2.result")}
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  {t("forWhom.profile3.title")}
                </h3>
                <p className="text-lg text-default-700 leading-relaxed mb-4">
                  {t("forWhom.profile3.description")}
                </p>
                <p className="text-lg text-default-700 leading-relaxed">
                  <span className="font-bold">
                    {t("forWhom.profile3.resultLabel")}
                  </span>{" "}
                  {t("forWhom.profile3.result")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* El Método en la Era de la IA 2025 */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
            <CardBody className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🤖</span>
                <h2 className="text-4xl font-bold text-customgray">
                  {t("ia2025.title")}
                </h2>
              </div>

              <p className="text-xl text-default-700 mb-8 leading-relaxed">
                {t("ia2025.intro")}
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white/70 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("ia2025.reason1.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("ia2025.reason1.content")}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("ia2025.reason2.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("ia2025.reason2.content")}
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {t("ia2025.reason3.title")}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed">
                    {t("ia2025.reason3.content")}
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-6 bg-white/50 rounded-r-lg p-6">
                <p className="text-xl font-bold text-customgray mb-3">
                  {t("ia2025.conclusion.title")}
                </p>
                <p className="text-lg text-default-700 leading-relaxed">
                  {t("ia2025.conclusion.content")}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Resultados y transformaciones */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-customgray mb-8">
            {t("results.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardBody className="p-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  {t("results.stat1.number")}
                </div>
                <p className="text-lg font-bold text-customgray mb-2">
                  {t("results.stat1.label")}
                </p>
                <p className="text-default-600">{t("results.stat1.detail")}</p>
              </CardBody>
            </Card>

            <Card className="text-center">
              <CardBody className="p-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  {t("results.stat2.number")}
                </div>
                <p className="text-lg font-bold text-customgray mb-2">
                  {t("results.stat2.label")}
                </p>
                <p className="text-default-600">{t("results.stat2.detail")}</p>
              </CardBody>
            </Card>

            <Card className="text-center">
              <CardBody className="p-8">
                <div className="text-5xl font-bold text-primary mb-4">
                  {t("results.stat3.number")}
                </div>
                <p className="text-lg font-bold text-customgray mb-2">
                  {t("results.stat3.label")}
                </p>
                <p className="text-default-600">{t("results.stat3.detail")}</p>
              </CardBody>
            </Card>
          </div>

          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-6">
                {t("results.testimonialTitle")}
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-lg italic text-default-700 mb-3">
                    &ldquo;{t("results.testimonial1.quote")}&rdquo;
                  </p>
                  <p className="text-default-600 font-semibold">
                    {t("results.testimonial1.author")}
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <p className="text-lg italic text-default-700 mb-3">
                    &ldquo;{t("results.testimonial2.quote")}&rdquo;
                  </p>
                  <p className="text-default-600 font-semibold">
                    {t("results.testimonial2.author")}
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <p className="text-lg italic text-default-700 mb-3">
                    &ldquo;{t("results.testimonial3.quote")}&rdquo;
                  </p>
                  <p className="text-default-600 font-semibold">
                    {t("results.testimonial3.author")}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
            <CardBody className="p-10 text-center">
              <h2 className="text-4xl font-bold text-customgray mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-default-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t("cta.subtitle")}
              </p>
              <Button
                as={Link}
                className="font-semibold"
                color="primary"
                href={`/${locale}`}
                size="lg"
              >
                {t("cta.button")}
              </Button>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
}
