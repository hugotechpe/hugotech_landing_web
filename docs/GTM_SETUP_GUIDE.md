# 📊 Google Tag Manager - Guía de Configuración Completa

## 🎯 IDs Configurados

- **Google Tag Manager**: `GTM-5HH6QTFK`
- **Google Analytics 4**: `G-M42L799TGF`

---

## 📍 Eventos Implementados en el Código

El código ya está enviando los siguientes eventos al `dataLayer`:

### 1. **page_view** (Automático)
```javascript
{
  event: "page_view",
  page_path: "/es",
  page_title: "HugoTech - Mentoring Tech",
  page_locale: "es"
}
```

### 2. **scroll_to_section**
Se dispara cuando el usuario scrollea a secciones clave:
```javascript
{
  event: "scroll_to_section",
  section_name: "agenda_section" | "testimonials_section"
}
```

### 3. **cta_click**
Se dispara en clics de botones CTA:
```javascript
{
  event: "cta_click",
  cta_location: "calendly_button" | "hero_section" | "empresas_section",
  cta_text: "Agendar sesión gratuita",
  cta_destination: "https://calendly.com/..."
}
```

### 4. **whatsapp_click**
```javascript
{
  event: "whatsapp_click",
  message: "Hola Hugo, me gustaría agendar..."
}
```

### 5. **calendly_widget_loaded**
```javascript
{
  event: "calendly_widget_loaded"
}
```

### 6. **calendly_date_selected**
```javascript
{
  event: "calendly_date_selected"
}
```

### 7. **calendly_event_scheduled** ✅ (CONVERSIÓN)
```javascript
{
  event: "calendly_event_scheduled",
  invitee_email: "user@example.com",
  event_start_time: "2025-10-25T15:00:00Z"
}
```

---

## � OPCIÓN RÁPIDA: Importar Configuración Completa

**La forma más rápida de configurar todo** es importar el contenedor pre-configurado:

### Paso 1: Importar JSON en GTM

1. Ve a **Google Tag Manager** → https://tagmanager.google.com/
2. Selecciona tu contenedor `GTM-5HH6QTFK`
3. Haz clic en **Admin** (⚙️ abajo a la izquierda)
4. En la columna **Contenedor**, haz clic en **Importar contenedor**
5. **Selecciona archivo**: `/docs/GTM-5HH6QTFK_hugotech_container.json`
6. **Elegir espacio de trabajo**: Selecciona "Existing" → "Default Workspace"
7. **Elegir opción de importación**: Selecciona **Combinar** (Merge) con opción **Sobrescribir** (Overwrite)
8. **Confirmar** → Haz clic en **Importar**

✅ **Listo!** Todas las Variables, Triggers y Tags están configurados automáticamente.

### Paso 2: Revisar la Importación

Verás que se importaron:
- ✅ **7 Tags** (GA4 Config + 6 eventos)
- ✅ **6 Triggers** (All Pages + 5 eventos personalizados)
- ✅ **9 Variables** del Data Layer
- ✅ **11 Variables integradas** (Built-in)

### Paso 3: Publicar el Contenedor

1. Haz clic en **Enviar** (arriba a la derecha)
2. Nombre de versión: `v1.0 - HugoTech Tracking Completo`
3. Descripción: `Tracking de conversiones Calendly + CTAs + Scroll`
4. **Publicar**

---

## 🛠️ OPCIÓN MANUAL: Configuración Paso a Paso

Si prefieres configurar manualmente (o entender qué hace cada cosa):

### Paso 1: Configurar Variables del Data Layer

Ve a **Variables → Variables definidas por el usuario → Nueva**

Crea las siguientes variables:

| Nombre de Variable | Tipo | Variable del Data Layer |
|-------------------|------|------------------------|
| DL - Event | Variable de capa de datos | `event` |
| DL - Page Path | Variable de capa de datos | `page_path` |
| DL - Page Title | Variable de capa de datos | `page_title` |
| DL - Page Locale | Variable de capa de datos | `page_locale` |
| DL - Section Name | Variable de capa de datos | `section_name` |
| DL - CTA Location | Variable de capa de datos | `cta_location` |
| DL - CTA Text | Variable de capa de datos | `cta_text` |
| DL - Invitee Email | Variable de capa de datos | `invitee_email` |

---

### Paso 2: Crear TAG de Google Analytics 4

1. **Etiquetas → Nueva → Configuración de etiqueta**
2. Tipo: **Google Analytics: Configuración de GA4**
3. ID de medición: `G-M42L799TGF`
4. Activador: **All Pages**
5. Nombre: `GA4 - Config Tag`
6. **Guardar**

---

### Paso 3: Crear Activadores (Triggers)

Ve a **Activadores → Nuevo**

#### 3.1 Trigger: Calendly Event Scheduled
- Tipo: **Evento personalizado**
- Nombre del evento: `calendly_event_scheduled`
- Condición: Este activador se activa en **Todos los eventos personalizados**
- Guardar como: `CE - Calendly Event Scheduled`

#### 3.2 Trigger: Calendly Date Selected
- Tipo: **Evento personalizado**
- Nombre del evento: `calendly_date_selected`
- Guardar como: `CE - Calendly Date Selected`

#### 3.3 Trigger: Calendly Widget Loaded
- Tipo: **Evento personalizado**
- Nombre del evento: `calendly_widget_loaded`
- Guardar como: `CE - Calendly Widget Loaded`

#### 3.4 Trigger: Scroll to Section
- Tipo: **Evento personalizado**
- Nombre del evento: `scroll_to_section`
- Guardar como: `CE - Scroll to Section`

#### 3.5 Trigger: CTA Click
- Tipo: **Evento personalizado**
- Nombre del evento: `cta_click`
- Guardar como: `CE - CTA Click`

#### 3.6 Trigger: WhatsApp Click
- Tipo: **Evento personalizado**
- Nombre del evento: `whatsapp_click`
- Guardar como: `CE - WhatsApp Click`

---

### Paso 4: Crear TAGs de Eventos en GA4

Para cada evento, crea una etiqueta:

#### 4.1 TAG: GA4 Event - Calendly Scheduled
1. **Etiquetas → Nueva**
2. Tipo: **Google Analytics: Evento de GA4**
3. Etiqueta de configuración: **Selecciona** `GA4 - Config Tag`
4. Nombre del evento: `calendly_event_scheduled`
5. Parámetros del evento:
   - `invitee_email` → `{{DL - Invitee Email}}`
6. Activador: `CE - Calendly Event Scheduled`
7. Guardar como: `GA4 Event - Calendly Scheduled`

#### 4.2 TAG: GA4 Event - Calendly Date Selected
- Nombre del evento: `calendly_date_selected`
- Activador: `CE - Calendly Date Selected`
- Guardar como: `GA4 Event - Calendly Date Selected`

#### 4.3 TAG: GA4 Event - Calendly Widget Loaded
- Nombre del evento: `calendly_widget_loaded`
- Activador: `CE - Calendly Widget Loaded`
- Guardar como: `GA4 Event - Calendly Widget Loaded`

#### 4.4 TAG: GA4 Event - Scroll to Section
- Nombre del evento: `scroll_to_section`
- Parámetros:
  - `section_name` → `{{DL - Section Name}}`
- Activador: `CE - Scroll to Section`
- Guardar como: `GA4 Event - Scroll to Section`

#### 4.5 TAG: GA4 Event - CTA Click
- Nombre del evento: `cta_click`
- Parámetros:
  - `cta_location` → `{{DL - CTA Location}}`
  - `cta_text` → `{{DL - CTA Text}}`
- Activador: `CE - CTA Click`
- Guardar como: `GA4 Event - CTA Click`

#### 4.6 TAG: GA4 Event - WhatsApp Click
- Nombre del evento: `whatsapp_click`
- Activador: `CE - WhatsApp Click`
- Guardar como: `GA4 Event - WhatsApp Click`

---

### Paso 5: Publicar Contenedor

1. Haz clic en **Enviar** (arriba a la derecha)
2. Nombre de versión: `v1.0 - Tracking completo Calendly + CTAs`
3. Descripción: `Implementación de tracking de conversiones con Calendly`
4. **Publicar**

---

## 📈 Configuración en Google Analytics 4

### Paso 1: Marcar `calendly_event_scheduled` como Conversión

1. Ve a **Admin → Eventos**
2. Espera 24-48 horas para que aparezca `calendly_event_scheduled`
3. Activa el toggle **Marcar como conversión** ✅
4. Este será tu evento de conversión principal

### Paso 2: Crear Embudo Personalizado

1. Ve a **Explorar → Plantilla en blanco**
2. Selecciona **Análisis de rutas**
3. Configura el embudo:
   ```
   Paso 1: page_view (Página de inicio)
   ↓
   Paso 2: scroll_to_section (section_name = agenda_section)
   ↓
   Paso 3: calendly_widget_loaded
   ↓
   Paso 4: calendly_date_selected
   ↓
   Paso 5: calendly_event_scheduled ✅ (CONVERSIÓN)
   ```

### Paso 3: Crear Audiencias para Remarketing

#### Audiencia 1: "Usuarios que vieron Calendly pero no agendaron"
- Condición 1: `calendly_widget_loaded` en los últimos 7 días
- Condición 2: NO `calendly_event_scheduled` en los últimos 7 días

#### Audiencia 2: "Usuarios que agendaron"
- Condición: `calendly_event_scheduled` en los últimos 30 días

#### Audiencia 3: "Usuarios comprometidos"
- Condición 1: `scroll_to_section` (section_name = agenda_section)
- Condición 2: Tiempo en el sitio > 60 segundos

---

## 🧪 Testing y Validación

### Opción 1: Modo Vista Previa de GTM
1. En GTM, haz clic en **Vista previa**
2. Ingresa la URL: `http://localhost:3000` o `https://hugotech.pe`
3. Navega por el sitio y verifica que se disparan los eventos

### Opción 2: Google Analytics 4 - Vista en Tiempo Real
1. Ve a **Informes → Tiempo real**
2. Navega por tu sitio
3. Deberías ver los eventos aparecer en tiempo real

### Opción 3: Chrome DevTools
1. Abre DevTools (F12)
2. Console → Escribe: `dataLayer`
3. Verás todos los eventos enviados

---

## 📊 KPIs Recomendados a Monitorear

1. **Tasa de conversión global**:
   - `calendly_event_scheduled` / `page_view` × 100

2. **Tasa de abandono en Calendly**:
   - (`calendly_widget_loaded` - `calendly_event_scheduled`) / `calendly_widget_loaded` × 100

3. **CTR de botones CTA**:
   - `cta_click` / `page_view` × 100

4. **Engagement con sección Agenda**:
   - `scroll_to_section (agenda_section)` / `page_view` × 100

5. **Conversión WhatsApp**:
   - `whatsapp_click` / `page_view` × 100

---

## 🎨 Dashboards Recomendados

### Dashboard 1: Embudo de Conversión
```
┌─────────────────────────────────────┐
│ 100% - Page Views                   │
│   ↓ 60%                             │
│ Scroll to Agenda Section            │
│   ↓ 75%                             │
│ Calendly Widget Loaded              │
│   ↓ 40%                             │
│ Date Selected                       │
│   ↓ 80%                             │
│ ✅ EVENT SCHEDULED (Conversión)     │
└─────────────────────────────────────┘
```

### Dashboard 2: Fuentes de Tráfico vs Conversión
- Organic Search → Tasa de conversión
- Direct → Tasa de conversión
- Social → Tasa de conversión
- Referral → Tasa de conversión

---

## 🚀 Próximos Pasos (Opcional)

### 1. Facebook Pixel
Si quieres agregar Facebook Pixel:
1. Crea un TAG en GTM tipo "Facebook Pixel"
2. Pixel ID: Tu ID de Facebook
3. Eventos estándar: `Lead` (cuando `calendly_event_scheduled`)

### 2. LinkedIn Insight Tag
1. TAG tipo "LinkedIn Insight"
2. Partner ID: Tu ID de LinkedIn
3. Evento de conversión: `calendly_event_scheduled`

### 3. Hotjar / Microsoft Clarity
Para grabaciones de sesión y mapas de calor

---

## ✅ Checklist Final

- [ ] GTM Container publicado
- [ ] GA4 recibiendo eventos (verificar en Tiempo Real)
- [ ] `calendly_event_scheduled` marcado como conversión
- [ ] Embudo personalizado creado
- [ ] Audiencias de remarketing configuradas
- [ ] Dashboard de KPIs creado
- [ ] Alertas configuradas (opcional)

---

## 📞 Soporte

Si tienes dudas:
1. Verifica que GTM esté publicado (no solo en vista previa)
2. Revisa la consola del navegador: `dataLayer`
3. Usa GTM Preview Mode para debugging
4. Los datos en GA4 pueden tardar 24-48h en aparecer completamente

---

**Última actualización**: 25 de octubre de 2025
**Versión del documento**: 1.0
**Autor**: GitHub Copilot + Hugo Casanova
