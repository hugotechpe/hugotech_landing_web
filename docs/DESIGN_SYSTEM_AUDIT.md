# 🎨 HugoTech Design System Audit - UX/UI Complete Overview

**Fecha:** 4 de diciembre de 2025  
**Versión del sitio:** Next.js 16.0.7  
**Framework UI:** HeroUI (NextUI fork)  
**Propósito:** Documento completo del sistema de diseño actual para análisis y recomendaciones de mejora UX/Customer Experience

---

## 📐 1. TIPOGRAFÍAS (Typography Stack)

### Fuentes Principales

#### **Sans-Serif Principal: Inter**
- **Uso:** Textos de cuerpo, navegación, botones, párrafos generales
- **Pesos disponibles:** 300, 400, 500, 600, 700
- **Variable CSS:** `--font-sans`
- **Razón de elección:** Legibilidad excepcional en pantalla, humanista, cálida
- **Contexto:** Cambio desde DM Sans por mayor calidez y accesibilidad

```typescript
fontSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})
```

#### **Serif Heading: Playfair Display**
- **Uso:** Títulos principales (H1, H2), encabezados de sección
- **Pesos disponibles:** 400, 500, 600, 700, 800
- **Variable CSS:** `--font-heading`
- **Razón:** Elegancia, credibilidad, experiencia profesional
- **Personalidad:** Serif clásica con toque contemporáneo

```typescript
fontHeading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})
```

#### **Serif Quote: Crimson Text**
- **Uso:** Citas, testimonios, bloques de texto destacados
- **Pesos:** 400, 600, 700
- **Estilos:** Normal, Italic
- **Variable CSS:** `--font-quote`
- **Razón:** Calidez humana, conexión emocional en testimonios

```typescript
fontQuote = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})
```

#### **Monospace: Fira Code**
- **Uso:** Código, snippets técnicos, detalles técnicos
- **Peso:** 400
- **Variable CSS:** `--font-mono`
- **Contexto:** Identidad tech, credibilidad técnica

---

## 🎨 2. PALETA DE COLORES (Color System)

### Colores Primarios

#### **Primary - Verde Bosque Profundo**
```css
primary: {
  DEFAULT: "#2E6B6B"
}
```
- **Significado:** Sabiduría, experiencia, estabilidad
- **Uso:** Headers, navegación principal, CTAs secundarios, borders principales
- **Psicología:** Transmite confianza, madurez profesional, naturaleza contemplativa
- **Contraste:** Excelente legibilidad sobre blanco

#### **Brand - Bronce Envejecido**
```css
brand: {
  DEFAULT: "#C9A167"
}
```
- **Significado:** Madurez, calidez, accesibilidad
- **Uso:** CTAs principales, acentos premium, badges especiales
- **Psicología:** Dorado envejecido = experiencia + humildad
- **Contraste:** Funciona sobre oscuros y claros

### Colores Secundarios

#### **Secondary - Verde Menta Suave**
```css
secondary: {
  DEFAULT: "#F5F9F7"
}
```
- **Uso:** Backgrounds sutiles, secciones alternadas
- **Función:** Descanso visual, aire, limpieza

#### **Accent - Verde Agua Sereno**
```css
accent: {
  DEFAULT: "#7FADA9"
}
```
- **Uso:** Elementos interactivos sutiles, highlights secundarios
- **Función:** Calma, guía, equilibrio

#### **Sage - Salvia**
```css
sage: {
  DEFAULT: "#A8C5B8"
}
```
- **Uso:** Quotes especiales, highlights sutiles
- **Función:** Naturalidad, sabiduría tranquila

### Colores Estructurales

#### **Dark**
```css
dark: {
  DEFAULT: "#1E1E1E"
}
```

#### **Custom Gray**
```css
customgray: {
  DEFAULT: "#2B2B2B"
}
```
- **Uso:** Textos principales, profesionalismo sin negro puro
- **Función:** Menos agresivo que #000, más elegante

---

## 🌈 3. GRADIENTES (Gradient Patterns)

### Gradientes Principales Documentados

#### **Hero Principal - Verde Profundo**
```css
bg-gradient-to-br from-[#0a3938] via-primary to-[#115C5B]
```
- **Uso:** Hero empresas, secciones premium B2B
- **Efecto:** Profundidad, seriedad corporativa

#### **Primary Transitions**
```css
bg-gradient-to-b from-primary via-primary to-white
```
- **Uso:** Transiciones suaves entre secciones
- **Efecto:** Continuidad visual

#### **Brand Accent Glow**
```css
bg-gradient-to-r from-brand to-yellow-400
```
- **Uso:** Acentos especiales, badges premium
- **Efecto:** Calidez, energía positiva

#### **Subtle Background Patterns**
```css
bg-gradient-to-br from-primary/10 to-brand/10
bg-gradient-to-br from-success/5 to-primary/5
```
- **Uso:** Cards, fondos sutiles
- **Efecto:** Textura sin ruido

---

## 🪄 4. EFECTOS Y SOMBRAS (Shadows & Effects)

### Sombras Documentadas

#### **Shadow Levels**
```css
shadow-lg          /* Elevación estándar - Cards */
shadow-xl          /* Elevación media - Hover states */
shadow-2xl         /* Elevación alta - CTAs, elementos flotantes */
shadow-3xl         /* Máxima elevación - WhatsApp button */
```

#### **Glow Effects (Blur Overlays)**
```css
blur-3xl           /* Efectos de resplandor detrás de imágenes */
backdrop-blur-sm   /* Glassmorphism sutil */
backdrop-blur-xl   /* Glassmorphism intenso */
```

### Bordes y Decoración

```css
border-2           /* Border estándar para cards */
border-4           /* Border enfático para elementos premium */
rounded-full       /* Botones principales */
rounded-2xl        /* Cards y contenedores */
rounded-xl         /* Elementos secundarios */
```

---

## 🎭 5. ANIMACIONES Y TRANSICIONES

### Motion Library: Framer Motion

#### **Variantes Estándar**

**Fade In Up** (Entrada desde abajo)
```typescript
fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
```

**Scale In** (Crecimiento)
```typescript
scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}
```

**Stagger Container** (Secuencia de hijos)
```typescript
staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}
```

#### **Hover Effects Comunes**
```css
hover:scale-105        /* Crecimiento 5% */
hover:scale-1.05       /* Alternativa */
hover:-translate-y-1   /* Elevación sutil */
hover:shadow-2xl       /* Intensificación sombra */
transition-all         /* Transiciones suaves */
duration-300          /* 300ms estándar */
```

---

## 🧩 6. COMPONENTES CLAVE

### Botones (CTA Patterns)

#### **Primary CTA (Brand)**
```tsx
className="bg-brand hover:bg-brand/90 text-white font-bold 
           text-lg px-10 py-4 rounded-full shadow-2xl 
           hover:shadow-brand/50 hover:scale-105 
           transition-all duration-300 border-2 border-brand/20"
```
- **Uso:** Acciones principales (Solicitar diagnóstico, Agendar sesión)
- **Personalidad:** Cálido, accesible, premium

#### **Secondary CTA (Primary)**
```tsx
className="bg-primary text-white font-bold px-8 py-4 
           rounded-lg hover:bg-brand hover:scale-105 
           hover:shadow-xl transition-all duration-300"
```

#### **Ghost CTA (Link-style)**
```tsx
className="group inline-flex items-center gap-2 text-white 
           font-semibold hover:text-brand transition-all"
```

### Cards (Contenedores)

#### **Standard Card**
```tsx
<Card className="bg-white/80 backdrop-blur-sm border-2 
                border-gray-100 hover:border-primary/30 
                transition-all shadow-lg hover:shadow-2xl">
```

#### **Premium Card (con borde colorido)**
```tsx
<Card className="border-2 border-primary/30 
                hover:border-primary hover:shadow-2xl 
                transition-all duration-300">
```

#### **Glassmorphism Card**
```tsx
<Card className="bg-white/60 backdrop-blur-xl border-2 
                border-primary/20 shadow-2xl">
```

---

## 📱 7. RESPONSIVE BREAKPOINTS

### Tailwind Default (usado en proyecto)
```css
sm: 640px   /* Mobile landscape, tablets pequeñas */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Max-Width Custom
```css
max-w-1400  /* 1400px - Container principal del sitio */
```

### Patrones Responsive Comunes
```tsx
/* Text scaling */
text-3xl md:text-4xl lg:text-5xl

/* Grid layouts */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Spacing */
py-16 md:py-24  /* Padding vertical de secciones */
px-6            /* Padding horizontal estándar */
```

---

## 🖼️ 8. ICONOGRAFÍA

### Iconos Personalizados
**Ubicación:** `/common/icons/custom/`

1. **EquiposAltoRendimientoIcon.tsx** - Equipos tech
2. **LiderazgoAgilTransformaIcon.tsx** - Liderazgo ágil
3. **MentoringCoachingIcon.tsx** - Mentoría 1-1

### Iconos de Redes Sociales
**Ubicación:** `/common/icons/social/` + `/components/icons.tsx`

- LinkedIn
- Facebook  
- Instagram
- GitHub (tech credibility)
- Twitter/X

### Icon Libraries Integradas
- **Lucide React** (probable, común en HeroUI)
- **Custom SVG** inline en componentes

---

## 🎯 9. PATRONES UX CLAVE

### Navegación

#### **Navbar Principal**
```tsx
<header className="bg-primary shadow-sm border-b border-[#115C5B]">
```
- **Estilo:** Dark navbar (primario) con contraste blanco
- **CTA visible:** "Agendar Sesión Gratis" en brand color
- **Mobile:** Hamburger menu con overlay

#### **Navbar Secundario (About, etc)**
```tsx
<header className="bg-white shadow-sm">
```
- **Estilo:** Light navbar para secciones secundarias

### Hero Sections

#### **Pattern 1: Empresas (B2B)**
- Background: Gradient verde profundo
- Altura: `min-h-[85vh]`
- Centrado vertical
- Pattern decorativo sutil (SVG grid opacity 5%)
- CTA dual: Primario (brand) + Link secundario

#### **Pattern 2: Home (B2C)**
- Background: Gradient primary → white
- Foto de perfil con efecto glow
- Stats bar con AnimatedCounter
- Chips informativos con emojis

### Secciones Alternadas

**Patrón:** Blanco → Gris Suave → Blanco
```css
bg-white
bg-default-50
bg-gradient-to-b from-gray-50 to-white
```

---

## ♿ 10. ACCESIBILIDAD (A11y)

### Implementaciones Actuales

#### **Semántica HTML**
```tsx
<section aria-label={title} id="section-id">
<h2 itemProp="headline">
```

#### **Schema.org Microdata**
```tsx
itemScope itemType="https://schema.org/Person"
itemProp="name" | "jobTitle" | "description"
```

#### **Focus Management**
- Visible en keyboard navigation (probable)
- Outlines en elementos interactivos

#### **Color Contrast**
- Primary (#2E6B6B) sobre blanco: ✅ WCAG AA/AAA
- Brand (#C9A167) sobre blanco: ⚠️ Verificar (dorado puede tener issues)
- Custom Gray (#2B2B2B) sobre blanco: ✅ Excelente

---

## 📐 11. ESPACIADO Y LAYOUT

### Sistema de Espaciado (Tailwind Scale)
```css
gap-4     /* 1rem / 16px - Entre elementos cercanos */
gap-6     /* 1.5rem / 24px - Estándar */
gap-8     /* 2rem / 32px - Separación media */
gap-12    /* 3rem / 48px - Separación amplia */
gap-16    /* 4rem / 64px - Entre secciones */

py-16     /* Padding vertical secciones mobile */
py-20     /* Padding vertical secciones tablet */
py-24     /* Padding vertical secciones desktop */
py-28     /* Padding vertical secciones destacadas */

px-6      /* Padding horizontal universal */
```

### Containers
```tsx
<div className="container mx-auto max-w-7xl px-6">
<div className="container mx-auto max-w-1400 px-6">
```

---

## 🎪 12. ELEMENTOS DECORATIVOS

### Pattern Backgrounds
```tsx
/* SVG Grid Pattern */
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]" />
```

### Glow Effects (Behind Images)
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand/20 blur-3xl rounded-full transform scale-90" />
```

### Badges Flotantes
```tsx
<motion.div className="absolute -bottom-6 -right-6 z-20">
  <Card className="bg-gradient-to-br from-brand to-yellow-400 shadow-2xl">
    <CardBody className="p-4 text-center">
      <p className="text-3xl font-bold">🎯</p>
      <p className="text-sm font-bold">Coach ICF</p>
    </CardBody>
  </Card>
</motion.div>
```

### Numeric Badges (Pilares)
```tsx
<div className="absolute -top-3 -left-3 z-20">
  <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand 
                  rounded-full flex items-center justify-center 
                  shadow-xl border-4 border-white">
    <span className="text-white font-bold text-lg">1</span>
  </div>
</div>
```

---

## 🎬 13. ANIMACIONES ESPECÍFICAS

### Hover Cards
```tsx
whileHover={{ 
  scale: 1.03, 
  rotateY: 3,    /* Efecto 3D sutil */
  z: 50 
}}
```

### Icon Rotation Hover
```tsx
whileHover={{ 
  rotate: 360,   /* Giro completo */
  scale: 1.1 
}}
transition={{ duration: 0.5 }}
```

### Stagger Children (Listados)
```typescript
staggerContainer = {
  visible: { 
    transition: { staggerChildren: 0.12 }  /* 120ms entre cada hijo */
  }
}
```

---

## 📊 14. TIPOGRAFÍA EN CONTEXTO

### Jerarquía de Títulos

```tsx
/* H1 - Hero Principal */
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
           font-bold font-heading text-white leading-tight"

/* H2 - Sección Principal */
className="text-3xl md:text-4xl lg:text-5xl 
           font-bold font-heading text-customgray"

/* H3 - Subsección */
className="text-2xl md:text-3xl font-bold text-foreground"

/* Body Large */
className="text-xl md:text-2xl text-default-600"

/* Body Standard */
className="text-base md:text-lg text-gray-700"
```

---

## 🎨 15. CHIPS Y BADGES

### Chip Patterns (HeroUI)

```tsx
/* Success */
<Chip color="success" size="lg" variant="flat">
  ✅ Protocolos de Intervención
</Chip>

/* Warning */
<Chip color="warning" size="lg" variant="shadow">
  🚀 Programas B2B
</Chip>

/* Primary Outline */
<Chip color="primary" size="sm" variant="flat">
  Programa Intensivo
</Chip>
```

---

## 🚀 16. PERFORMANCE & OPTIMIZACIÓN

### Fuentes
- **Display: swap** en todas las fuentes (evita FOIT)
- Google Fonts con Next.js optimization
- Subsets: `["latin"]` únicamente

### Imágenes
- Next.js Image component con lazy loading
- Blur placeholders
- Quality: 75 (balance calidad/tamaño)

---

## 🎯 17. PREGUNTAS CLAVE PARA GEMINI

### Para Análisis UX/UI:

1. **Tipografía:** 
   - ¿La combinación Inter + Playfair Display transmite la personalidad correcta (mentor experimentado pero accesible)?
   - ¿Demasiadas fuentes (4 familias)?

2. **Colores:**
   - ¿Verde bosque (#2E6B6B) + Bronce (#C9A167) comunican experiencia + calidez?
   - ¿El bronce como CTA principal es suficientemente contrastante?
   - ¿Falta energía/juventud en la paleta?

3. **Espaciado:**
   - ¿Aire suficiente entre secciones?
   - ¿Padding de secciones (py-16 a py-28) es apropiado?

4. **Animaciones:**
   - ¿Los efectos (scale, fade, rotate) mejoran o distraen?
   - ¿Demasiadas animaciones?

5. **Jerarquía Visual:**
   - ¿Los H1 (7xl) en hero son demasiado grandes?
   - ¿La jerarquía de tamaños de texto es clara?

6. **Responsive:**
   - ¿Escalado de textos mobile → desktop es apropiado?
   - ¿Algún breakpoint crítico faltante?

7. **Identidad de Marca:**
   - ¿El diseño refleja "mentor tech boutique" vs "agencia corporativa"?
   - ¿Dónde se siente frío/corporativo vs cálido/personal?

8. **CTAs:**
   - ¿Color brand (bronce) para botones principales es el correcto?
   - ¿Tamaño de botones (px-10 py-4) es apropiado?

9. **Accesibilidad:**
   - ¿Contraste de brand color (#C9A167) sobre blanco pasa WCAG AA?
   - ¿Falta algo crítico en a11y?

10. **Tendencias 2026:**
    - ¿Algún elemento se siente "old" (glassmorphism, gradientes)?
    - ¿Qué mejorar para estar actual sin ser trendy efímero?

---

## 📦 Stack Técnico Completo

- **Framework:** Next.js 16.0.7 (App Router)
- **UI Library:** HeroUI (NextUI fork)
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS 3.x
- **Fonts:** Google Fonts (next/font optimization)
- **Icons:** Custom SVG + Lucide (probable)
- **i18n:** next-intl (ES/EN)

---

**Nota final:** Este documento captura el estado actual del design system. Es el input perfecto para que Gemini analice coherencia, accesibilidad, tendencias 2026, y recomiende mejoras específicas para la experiencia del usuario que visita HugoTech.
