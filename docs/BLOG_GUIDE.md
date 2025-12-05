# 📝 Blog HugoTech - Guía de Uso

## 🎉 ¡Sistema de Blog Implementado!

Tu blog ya está completamente configurado con **Sanity CMS**, un sistema moderno y profesional para gestionar contenido.

## 🚀 URLs Importantes

- **Blog Público**: `http://localhost:3000/es/blog` (o `/en/blog` para inglés)
- **Panel Admin (Studio)**: `http://localhost:3000/studio`
- **Sitio en Producción**: `https://hugotech.pe/es/blog`
- **Admin en Producción**: `https://hugotech.pe/studio`

## 📋 Cómo Crear Tu Primer Post

### 1. Accede al Panel de Administración

Abre en tu navegador: `http://localhost:3000/studio`

La primera vez te pedirá que inicies sesión con tu cuenta de Sanity.

### 2. Crea un Autor (Primera vez)

1. En el menú lateral, haz clic en **"Autor"**
2. Click en **"Create new"**
3. Completa:
   - **Nombre**: Tu nombre
   - **Slug**: Click en "Generate" (se crea automáticamente)
   - **Foto**: Sube tu foto de perfil
   - **Biografía**: Breve descripción sobre ti
   - **Rol**: Ej. "Coach Tech Senior"
   - **Redes Sociales**: LinkedIn, Twitter, Instagram, Website
4. Click en **"Publish"**

### 3. Crea Categorías

1. En el menú lateral, haz clic en **"Categoría"**
2. Click en **"Create new"**
3. Crea algunas categorías, por ejemplo:
   - **Primer Empleo Tech** (Color: Azul)
   - **Coaching** (Color: Verde)
   - **Liderazgo** (Color: Morado)
   - **Burnout** (Color: Naranja)
   - **Desarrollo de Carrera** (Color: Rosa)
4. Publica cada categoría

### 4. Crea Tu Primer Post 🎨

1. En el menú lateral, haz clic en **"Post"**
2. Click en **"Create new"**
3. Completa los campos:

#### Información Básica
- **Título**: El título de tu artículo
- **Slug**: Click en "Generate"
- **Extracto**: Resumen corto (150-160 caracteres) - importante para SEO
- **Imagen Principal**: 
  - Click en la zona de imagen
  - Arrastra una foto o click "Select" para buscar
  - Completa el "Texto alternativo" (SEO)

#### Contenido
- **Categorías**: Selecciona una o más categorías
- **Autor**: Selecciona el autor que creaste
- **Fecha de Publicación**: Selecciona fecha y hora
- **Contenido**: Aquí escribes tu artículo

#### En el Editor de Contenido Puedes:

**Texto**:
- Títulos: H2, H3, H4
- **Negrita**, *cursiva*, `código inline`
- Listas con viñetas o numeradas
- Citas (Quote)
- Enlaces

**Imágenes**:
1. Click en el **"+"** en una línea nueva
2. Selecciona **"Image"**
3. Sube la imagen
4. Completa texto alternativo y pie de foto (opcional)

**Videos de YouTube**:
1. Click en el **"+"** en una línea nueva
2. Selecciona **"YouTube Video"**
3. Pega la URL completa del video de YouTube

**Código**:
1. Click en el **"+"** en una línea nueva
2. Selecciona **"Código"**
3. Elige el lenguaje (JavaScript, Python, etc.)
4. Pega tu código
5. Opcionalmente agrega nombre de archivo

#### Opciones Adicionales

- **Post Destacado**: Marca si quieres que aparezca destacado
- **Tiempo de Lectura**: Minutos estimados (ej. 5, 10, 15)

#### SEO (Opcional pero Recomendado)
- **Meta Título**: Título optimizado para Google (50-60 caracteres)
- **Meta Descripción**: Descripción para resultados de búsqueda (150-160 caracteres)
- **Palabras Clave**: Escribe y presiona Enter para agregar tags

### 5. Publica

1. Revisa todo el contenido
2. Click en **"Publish"** en la parte superior derecha
3. ¡Listo! Tu post está publicado

### 6. Ver Tu Post

- Ve a `http://localhost:3000/es/blog`
- Verás tu post en la lista
- Click para ver el artículo completo

## 🎨 Características del Blog

### ✅ Lo Que Ya Funciona

- ✨ **Editor Visual**: Escribe posts de forma intuitiva
- 🖼️ **Imágenes Optimizadas**: Carga rápida automática
- 🎥 **Videos de YouTube**: Embebidos directamente
- 📱 **Responsive**: Se ve perfecto en móvil y desktop
- 🔗 **Botones de Compartir**: LinkedIn, Facebook, Twitter, WhatsApp
- 🏷️ **Categorías y Tags**: Organiza tu contenido
- 👤 **Tarjeta de Autor**: Con foto y redes sociales
- 📖 **Tiempo de Lectura**: Calculado automáticamente
- 🌐 **Multiidioma**: Español e inglés
- 🚀 **SEO Optimizado**: Meta tags automáticos
- 📊 **Posts Relacionados**: Sugerencias al final de cada artículo
- ⚡ **Performance**: Carga ultra rápida con Next.js

## 🎯 Tips de Contenido

### Títulos Efectivos
- Usa números: "7 Consejos para..."
- Sé específico: "Cómo conseguir tu primer empleo tech en 2026"
- Genera curiosidad: "Lo que nadie te dice sobre..."

### Estructura del Post
1. **Intro**: Engancha en los primeros 2 párrafos
2. **Problema**: Define el problema que resuelves
3. **Solución**: Paso a paso, tips prácticos
4. **Conclusión**: Call to action (agendar sesión, contactar, etc.)

### Imágenes
- Usa imágenes de alta calidad
- Optimiza antes de subir (max 2MB recomendado)
- Completa siempre el texto alternativo

### SEO
- **Título**: Incluye palabra clave principal
- **Extracto**: Resume el valor del post
- **Meta Descripción**: Debe hacer que quieran hacer clic
- **Palabras Clave**: 5-10 keywords relevantes

## 🔧 Gestión de Contenido

### Editar un Post
1. Ve a `/studio`
2. Click en "Post" en el menú
3. Selecciona el post que quieres editar
4. Haz los cambios
5. Click en "Publish" para guardar

### Borrador vs Publicado
- **Borrador**: Si no publicas, se guarda como borrador
- **Despublicar**: Click en "..." → "Unpublish"

### Programar Publicación
- Establece fecha futura en "Fecha de Publicación"
- El post aparecerá automáticamente en esa fecha

## 🌐 Despliegue en Producción

Cuando estés listo para desplegar:

1. **Commit tus cambios** (EXCEPTO .env.local):
```bash
git add .
git commit -m "feat: Implementar blog con Sanity CMS"
git push
```

2. **Configura variables en Vercel**:
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`: lsmfmy6a
     - `NEXT_PUBLIC_SANITY_DATASET`: production
     - `SANITY_API_TOKEN`: [tu token]
     - `NEXT_PUBLIC_SANITY_API_VERSION`: 2024-12-04

3. **Despliega**: Vercel lo hace automáticamente

## 📚 Recursos Adicionales

- **Documentación Sanity**: https://www.sanity.io/docs
- **Sanity Studio**: https://www.sanity.io/docs/sanity-studio
- **PortableText**: https://portabletext.org/

## 🆘 Soporte

Si tienes preguntas o necesitas ayuda:
1. Revisa la documentación de Sanity
2. Consulta el código en los componentes de `/components/blog`
3. Los schemas están en `/sanity/schemas`

## 🎉 ¡Empieza a Crear Contenido!

Tu blog está listo para recibir contenido increíble. Ve a `/studio` y crea tu primer post sobre:
- Primer empleo tech
- Coaching para developers
- Liderazgo para introvertidos
- Prevención de burnout
- O cualquier tema que resuene con tu audiencia

**¡Mucho éxito con tu blog! 🚀**
