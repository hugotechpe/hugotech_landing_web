# 🚀 HugoTech Landing Web

> **Plataforma de Coaching y Mentoring Tech con Propósito Social**

Landing page profesional para servicios de coaching personal, mentoring tecnológico y formación de líderes en el sector tech. Construida con Next.js 15, Sanity CMS y optimizada para SEO y conversión.

🌐 **[hugotech.pe](https://hugotech.pe)** | 📧 [contacto@hugotech.pe](mailto:contacto@hugotech.pe)

---

## 📋 Tabla de Contenidos

- [Características](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura](#-arquitectura-del-proyecto)
- [Instalación](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [SEO y Performance](#-seo-y-performance)
- [Internacionalización](#-internacionalización-i18n)
- [Sanity CMS](#-sanity-cms-headless-blog)
- [Integraciónes](#-integraciones)
- [Deploy](#-deploy-y-producción)
- [Roadmap](#-roadmap-2025)

---

## ✨ Características Principales

### 🎯 **Propuesta de Valor Única**
- **Coaching con Causa:** 100% de donaciones destinadas a causas sociales (transparencia radical)
- **Mentoring Tech:** Especializado en líderes tecnológicos y desarrolladores
- **Modelo Accesible:** Sesiones por donación voluntaria (desde S/35)

### 🚀 **Features Técnicos**
- ✅ **SSR + ISR:** Next.js 15 con App Router y streaming
- ✅ **Headless CMS:** Sanity para gestión de blog y contenidos
- ✅ **i18n:** Soporte multiidioma (Español/Inglés) con next-intl
- ✅ **SEO Avanzado:** Schema.org, Open Graph, Twitter Cards, Sitemaps dinámicos
- ✅ **Analytics:** Google Tag Manager + conversiones optimizadas
- ✅ **Performance:** Core Web Vitals optimizados (Lighthouse 95+)
- ✅ **Calendly:** Integración para agendamiento de sesiones
- ✅ **WhatsApp Business:** Widget flotante con mensajes contextuales
- ✅ **Testimonios Dinámicos:** +25 historias reales con LinkedIn profiles
- ✅ **FAQ Schema:** Preguntas frecuentes con Rich Results
- ✅ **Responsive Design:** Mobile-first con Tailwind CSS

---

## 🛠 Stack Tecnológico

### **Core Framework**
- **[Next.js 15.3.1](https://nextjs.org/)** - React framework con App Router
- **[React 19](https://react.dev/)** - Biblioteca UI con Server Components
- **[TypeScript 5.7](https://www.typescriptlang.org/)** - Tipado estático

### **UI & Styling**
- **[HeroUI v2](https://heroui.com/)** - Componentes UI basados en NextUI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion 11.14](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Lucide React](https://lucide.dev/)** - Iconos SVG optimizados

### **CMS & Content**
- **[Sanity.io 3.68](https://www.sanity.io/)** - Headless CMS para blog
- **[Portable Text](https://portabletext.org/)** - Contenido estructurado
- **[next-sanity](https://github.com/sanity-io/next-sanity)** - Cliente Next.js

### **Internacionalización**
- **[next-intl 3.27](https://next-intl.dev/)** - i18n con soporte SSR
- **Idiomas:** Español (es) e Inglés (en)

### **Integraciones**
- **[Google Tag Manager](https://tagmanager.google.com/)** - Analytics y conversiones
- **[Calendly](https://calendly.com/)** - Agendamiento de sesiones
- **[React Calendly 4.3](https://www.npmjs.com/package/react-calendly)** - Widget embebido

### **SEO & Meta**
- **[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)** - Sitemaps automáticos
- **Schema.org** - Structured data (FAQPage, Article, Review)
- **Open Graph Protocol** - Social media previews

### **Development Tools**
- **[ESLint 9](https://eslint.org/)** - Linter con reglas custom
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)** - Pre-commit validation

---

## 🏗 Arquitectura del Proyecto

```
hugotech_landing_web/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Rutas internacionalizadas
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Layout principal
│   │   ├── about/              # Sobre mí
│   │   ├── blog/               # Blog (Sanity CMS)
│   │   │   └── [slug]/        # Post individual
│   │   ├── coaching/           # Servicios de coaching
│   │   ├── mentor-coaching/    # Mentoring tech
│   │   ├── empresas/           # Soluciones empresariales
│   │   ├── testimonials/       # Testimonios
│   │   ├── faq/                # Preguntas frecuentes
│   │   ├── pricing/            # Precios y donaciones
│   │   └── terminos/           # Legal
│   ├── api/                    # API Routes
│   │   └── revalidate-impact/ # ISR para contador de impacto
│   ├── robots.ts              # Robots.txt dinámico
│   └── sitemap.ts             # Sitemap XML dinámico
│
├── components/                 # Componentes reutilizables
│   ├── analytics/             # Google Tag Manager
│   ├── blog/                  # BlogCard, BlogList, PortableText
│   ├── calendly/              # CalendlyEmbed, LazyCalendly
│   ├── cards/                 # TestimonioCard, IconBoxCard
│   ├── layout/                # Navbar, Footer
│   └── seo/                   # JsonLd, Breadcrumb, AlternateLinks
│
├── features/                   # Features organizadas por dominio
│   ├── home/                  # Secciones del homepage
│   │   ├── InicioSection.tsx
│   │   ├── MePresentoSection.tsx
│   │   ├── CoachingSection.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── TestimoniosSection.tsx
│   │   └── PorQueGratuitoSection.tsx
│   └── testimonials/
│       └── enums/             # Data de testimonios (ES/EN)
│
├── lib/                        # Utilidades y configuración
│   ├── sanity.client.ts       # Cliente Sanity
│   ├── sanity.queries.ts      # Queries GROQ
│   ├── gtm.ts                 # Google Tag Manager helpers
│   └── metadata.ts            # Generadores de metadata
│
├── messages/                   # Traducciones i18n
│   ├── es/                    # Español
│   │   ├── common.json
│   │   └── about.json
│   └── en/                    # Inglés
│
├── public/                     # Assets estáticos
│   └── images/
│       ├── testimonials/      # Fotos de testimonios
│       └── certifications/    # Certificaciones
│
├── sanity/                     # Sanity CMS Studio
│   ├── schemas/               # Schemas de contenido
│   │   ├── post.ts           # Schema de blog posts
│   │   ├── author.ts         # Autores
│   │   └── category.ts       # Categorías
│   ├── lib/                  # Queries y utilidades
│   └── sanity.config.ts      # Configuración del Studio
│
├── styles/
│   └── globals.css            # Estilos globales + Tailwind
│
├── middleware.ts              # i18n routing + locale detection
├── next.config.ts             # Configuración Next.js
├── tailwind.config.js         # Configuración Tailwind
└── tsconfig.json              # Configuración TypeScript
```

---

## 🚀 Instalación y Configuración

### **Prerequisitos**
- Node.js 20+ (recomendado: 20.11.0 LTS)
- npm 10+ o pnpm 9+
- Cuenta de Sanity.io (para CMS)

### **1. Clonar el repositorio**
```bash
git clone https://github.com/hugotechpe/hugotech_landing_web.git
cd hugotech_landing_web
```

### **2. Instalar dependencias**
```bash
npm install
# o
pnpm install
```

### **3. Configurar variables de entorno**
Crea un archivo `.env.local` en la raíz:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="tu-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="tu-read-token"

# URLs
NEXT_PUBLIC_BASE_URL="https://hugotech.pe"

# Google Tag Manager
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"

# Calendly (opcional)
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/tu-usuario"
```

### **4. Iniciar Sanity Studio (opcional)**
```bash
cd studio
npm install
npm run dev
# Visita http://localhost:3333
```

### **5. Iniciar servidor de desarrollo**
```bash
npm run dev
# Visita http://localhost:3000
```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor dev (localhost:3000)
npm run dev:studio       # Inicia Sanity Studio (localhost:3333)

# Producción
npm run build           # Build optimizado para producción
npm run start           # Servidor de producción
npm run lint            # Ejecutar ESLint
npm run type-check      # Validar tipos TypeScript

# Sanity
npm run sanity:deploy   # Desplegar Sanity Studio
npm run sanity:manage   # Gestionar proyecto Sanity
```

---

## 📂 Estructura del Proyecto

### **Rutas Principales** (App Router)

| Ruta | Descripción | Schema.org |
|------|-------------|------------|
| `/` | Homepage con hero, servicios, impacto | `WebSite` |
| `/about` | Biografía, filosofía, certificaciones | `Person` |
| `/blog` | Listado de artículos (Sanity) | `Blog` |
| `/blog/[slug]` | Post individual | `BlogPosting` |
| `/coaching` | Coaching personal | `Service` |
| `/mentor-coaching` | Mentoring tech | `Service` |
| `/empresas` | Soluciones corporativas | `Service` |
| `/testimonials` | +25 testimonios verificados | `Review` |
| `/faq` | Preguntas frecuentes | `FAQPage` |
| `/pricing` | Modelo de donación | `Offer` |

### **Componentes Clave**

#### **SEO Components** (`components/seo/`)
```tsx
<JsonLd data={faqSchema} />         // Schema.org JSON-LD
<Breadcrumb items={breadcrumbs} />  // Structured breadcrumbs
<AlternateLinks locale="es" />      // hreflang tags
```

#### **Layout Components** (`components/layout/`)
```tsx
<Navbar />          // Navbar con i18n switch
<Footer />          // Footer con mapa del sitio
<WhatsAppButton />  // Widget flotante
```

#### **Blog Components** (`components/blog/`)
```tsx
<BlogList posts={posts} />              // Grid de artículos
<BlogCard post={post} />                // Card individual
<PortableTextRenderer value={body} />   // Rich text de Sanity
```

---

## 🎯 SEO y Performance

### **Core Web Vitals**
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)
- **Lighthouse Score:** 95+ (Performance)

### **Optimizaciones**
- ✅ Image optimization con Next.js `<Image>`
- ✅ Font optimization (Geist Sans/Mono)
- ✅ Code splitting automático
- ✅ Streaming SSR con React Suspense
- ✅ ISR (Incremental Static Regeneration)
- ✅ Edge-ready middleware

### **Schema.org Types**
```typescript
WebSite, Organization, Person, Service, 
FAQPage, BlogPosting, Review, Breadcrumb
```

---

## 🌍 Internacionalización (i18n)

### **Configuración** (`i18n/routing.ts`)
```typescript
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",       // URLs: /es/about, /en/about
  localeDetection: false,       // Forzar español por defecto
});
```

### **Traducciones** (`messages/`)
```
messages/
├── es/
│   ├── common.json    // Textos generales
│   └── about.json     // Página About
└── en/
    ├── common.json
    └── about.json
```

### **Uso en Componentes**
```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('home');
  return <h1>{t('hero.title')}</h1>;
}
```

---

## 📝 Sanity CMS (Headless Blog)

### **Schemas Definidos**

#### **Post Schema** (`sanity/schemas/post.ts`)
```typescript
{
  name: 'post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'excerpt', type: 'text' },
    { name: 'mainImage', type: 'image' },
    { name: 'body', type: 'blockContent' },
    { name: 'author', type: 'reference', to: 'author' },
    { name: 'categories', type: 'array' },
    { name: 'seo', type: 'object' }  // Meta title, description
  ]
}
```

#### **Queries GROQ** (`lib/sanity.queries.ts`)
```typescript
// Obtener posts
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc)`;

// Post individual
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
```

### **Integración Next.js**
```tsx
// app/blog/page.tsx
import { client } from '@/lib/sanity.client';
import { postsQuery } from '@/lib/sanity.queries';

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);
  return <BlogList posts={posts} />;
}
```

---

## 🔌 Integraciones

### **Google Tag Manager**
```tsx
// app/layout.tsx
import { GoogleTagManager } from '@/components/analytics/GoogleTagManager';

<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
```

### **Calendly**
```tsx
import { CalendlyEmbed } from '@/components/calendly/CalendlyEmbed';

<CalendlyEmbed url="https://calendly.com/hugotech/sesion-gratuita" />
```

### **WhatsApp Business**
```tsx
<WhatsAppButton 
  phoneNumber="+51987654321"
  message="Hola! Quiero agendar una sesión"
/>
```

---

## 🚢 Deploy y Producción

### **Deploy en Vercel** (Recomendado)
```bash
# Conectar con GitHub
vercel --prod

# Variables de entorno requeridas:
# - NEXT_PUBLIC_SANITY_PROJECT_ID
# - SANITY_API_READ_TOKEN
# - NEXT_PUBLIC_GTM_ID
```

### **Build Local**
```bash
npm run build
npm run start  # Servidor en puerto 3000
```

### **Environment Variables**
Configurar en Vercel Dashboard:
- Production: `NEXT_PUBLIC_BASE_URL=https://hugotech.pe`
- Preview: `NEXT_PUBLIC_BASE_URL=https://hugotech-preview.vercel.app`

---

## 🗺 Roadmap 2025

### **Q1 2025**
- [x] Migración a Next.js 15
- [x] Implementación Sanity CMS
- [x] SEO avanzado con Schema.org
- [x] Internacionalización completa
- [ ] Blog: 10 artículos publicados

### **Q2 2025**
- [ ] Integración Stripe para donaciones
- [ ] Dashboard de estudiantes (área privada)
- [ ] Sistema de testimonios automático
- [ ] A/B Testing con Vercel Edge Config

### **Q3 2025**
- [ ] Podcast integrado (RSS feed)
- [ ] Comunidad Discord embebida
- [ ] Webinars en vivo (YouTube API)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

Copyright © 2025 Hugo Casanova - HugoTech. Todos los derechos reservados.

---

## 🤝 Contribuciones

Este es un proyecto personal, pero acepto sugerencias y reportes de bugs.

**Contacto:**
- 🌐 [hugotech.pe](https://hugotech.pe)
- 📧 [contacto@hugotech.pe](mailto:contacto@hugotech.pe)
- 💼 [LinkedIn](https://www.linkedin.com/in/hugocasanovamarin/)
- 📱 WhatsApp: +51 987 654 321

---

**Hecho con ❤️ por Hugo Casanova | Tech con Propósito Social**
