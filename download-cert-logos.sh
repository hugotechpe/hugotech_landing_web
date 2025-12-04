#!/bin/bash

# Script para descargar logos oficiales de certificaciones
# Ejecutar: bash download-cert-logos.sh

CERT_DIR="public/images/certifications"
mkdir -p "$CERT_DIR"

echo "📥 Descargando logos oficiales de certificaciones..."

# ICF Coach
curl -L "https://coachingfederation.org/app/uploads/2022/05/ICF-Logo-Horizontal.png" -o "$CERT_DIR/icf-coach-original.png" 2>/dev/null || echo "❌ ICF logo failed"

# Scrum Master (Scrum.org)
curl -L "https://www.scrum.org/themes/custom/scrumorg_2020/logo.svg" -o "$CERT_DIR/scrum-master-original.svg" 2>/dev/null || echo "❌ Scrum logo failed"

# AWS Cloud Practitioner
curl -L "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.3f9cb2fe9e.png" -o "$CERT_DIR/aws-cloud-original.png" 2>/dev/null || echo "❌ AWS logo failed"

# Management 3.0
curl -L "https://management30.com/wp-content/uploads/2021/03/m30-logo.svg" -o "$CERT_DIR/management30-original.svg" 2>/dev/null || echo "❌ Management 3.0 logo failed"

# Product Owner (Scrum.org)
curl -L "https://www.scrum.org/themes/custom/scrumorg_2020/logo.svg" -o "$CERT_DIR/product-owner-original.svg" 2>/dev/null || echo "❌ Product Owner logo failed"

# Kanban KMP
curl -L "https://kanban.university/wp-content/themes/kanban-university/images/logo.png" -o "$CERT_DIR/kanban-kmp-original.png" 2>/dev/null || echo "❌ Kanban logo failed"

# Lean Startup
curl -L "https://theleanstartup.com/assets/logo-black.svg" -o "$CERT_DIR/lean-startup-original.svg" 2>/dev/null || echo "❌ Lean Startup logo failed"

# PMI-ACP
curl -L "https://www.pmi.org/-/media/pmi/images/public/logos/pmi-logo.svg" -o "$CERT_DIR/pmi-acp-original.svg" 2>/dev/null || echo "❌ PMI logo failed"

# Google Cloud
curl -L "https://www.gstatic.com/devrel-devsite/prod/v1e3f9a61d5d63d0bc1ec8cb56656eeea60d78fb1c7722cd1cc2f5a3e5ef2fcba/cloud/images/cloud-logo.svg" -o "$CERT_DIR/google-cloud-original.svg" 2>/dev/null || echo "❌ Google Cloud logo failed"

# Newfield Coach
curl -L "https://newfieldnetwork.com/wp-content/uploads/2021/04/newfield-logo.png" -o "$CERT_DIR/newfield-coach-original.png" 2>/dev/null || echo "❌ Newfield logo failed"

# MIT Professional Education
curl -L "https://professional.mit.edu/sites/default/files/MIT_PE_Logo_RGB.png" -o "$CERT_DIR/mit-digital-original.png" 2>/dev/null || echo "❌ MIT logo failed"

echo ""
echo "✅ Proceso completado. Verifica los archivos en: $CERT_DIR"
echo "⚠️  Algunos logos pueden haber fallado por protección CORS o URLs cambiadas"
echo ""
echo "📝 NOTA: Muchos logos oficiales están protegidos. Considera:"
echo "   1. Descargarlos manualmente desde los sitios oficiales"
echo "   2. Usar los SVGs ya creados (se ven profesionales)"
echo "   3. Buscar en Google Imágenes con licencia de uso libre"
