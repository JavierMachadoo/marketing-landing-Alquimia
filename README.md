# 🚀 Alquimia Marketing - Landing Page

[![Deploy to GitHub Pages](https://github.com/JavierMachadoo/marketing-landing-Alquimia/actions/workflows/deploy.yml/badge.svg)](https://github.com/JavierMachadoo/marketing-landing-Alquimia/actions/workflows/deploy.yml)

> Landing page profesional para consultoría de marketing digital

👉 **Ver sitio en vivo:** [https://javiermachadoo.github.io/marketing-landing-Alquimia/](https://javiermachadoo.github.io/marketing-landing-Alquimia/)

## 📋 Descripción

Landing page moderna y responsive para **Alquimia Marketing**, una consultoría de marketing digital especializada en estrategias efectivas para pymes y emprendedores. 

### ✨ Características principales

- **Diseño responsive** - Adaptado a todos los dispositivos
- **Interfaz moderna** - UI/UX limpia y profesional
- **Animaciones suaves** - Efectos de scroll reveal
- **Botón de contacto flotante** - Fácil acceso a WhatsApp y email
- **Optimizado para conversión** - Call-to-actions estratégicamente ubicados
- **Portfolio de clientes** - Showcase de empresas que confían en Alquimia

### 🎯 Secciones incluidas

- **Hero** - Presentación principal con propuesta de valor
- **Servicios** - Estrategia, redes sociales y campañas publicitarias
- **Sobre mí** - Perfil profesional de Santiago Machado
- **Testimonios** - Experiencias de clientes satisfechos
- **Portfolio de clientes** - Logos de empresas colaboradoras
- **Contacto** - Información de contacto y enlaces directos

## 🛠️ Tecnologías utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Estilos modernos con custom properties |
| **JavaScript (Vanilla)** | Interactividad sin dependencias |
| **SVG** | Íconos escalables y optimizados |
| **Intersection Observer API** | Animaciones de scroll reveal |

### 📁 Estructura del proyecto

```
marketing-landing-Alquimia/
├── index.html                 # Página principal
├── README.md                  # Documentación
├── css/
│   ├── styles.css            # Estilos principales
│   └── contact-float.css     # Estilos del botón flotante
├── js/
│   ├── main.js              # Funcionalidad principal
│   └── contact-float.js     # Lógica del botón flotante
└── assets/
    ├── favicons/            # Íconos del navegador
    ├── icons/               # Íconos SVG
    └── img/                 # Imágenes y logos
        ├── logoAlquimia.svg      # Logo principal
        ├── santiagoMachado.jpg   # Foto de perfil
        ├── consultoriaMarketing.jpg # Imagen de hero
        └── [logos-clientes...]   # Portfolio de clientes
```

## 🚀 Cómo ejecutar el proyecto

### Opción 1: Abrir directamente
```bash
# Clona el repositorio
git clone https://github.com/JavierMachadoo/marketing-landing-Alquimia.git

# Navega al directorio
cd marketing-landing-Alquimia

# Abre index.html en tu navegador
```

### Opción 2: Servidor local (recomendado)

**Con VS Code + Live Server:**
1. Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Abre el proyecto en VS Code
3. Click derecho en `index.html` → "Open with Live Server"

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js:**
```bash
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Personalización

### Colores principales
```css
:root {
  --color-primary: #02a99d;    /* Verde corporativo */
  --color-accent: #0b323c;     /* Azul oscuro */
  --color-bg: #ffffff;         /* Fondo */
  --color-text: #333;          /* Texto principal */
  --color-muted: #666;         /* Texto secundario */
}
```

### Modificar contenido
- **Información personal:** Edita las secciones en `index.html`
- **Servicios:** Actualiza las cards en la sección `#servicios`
- **Clientes:** Agrega/remueve logos en `assets/img/` y actualiza la sección `#clientes`
- **Contacto:** Modifica los enlaces de WhatsApp y email

## 📱 Características técnicas

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO optimizado** - Meta tags y estructura semántica
- ✅ **Accesibilidad** - ARIA labels y navegación por teclado
- ✅ **Performance** - Imágenes optimizadas y CSS/JS minificados
- ✅ **Cross-browser** - Compatible con navegadores modernos
- ✅ **Progressive Enhancement** - Funcional sin JavaScript

## 🚀 Deploy en GitHub Pages

El proyecto se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

**Para configurar tu propio deploy:**
1. Ve a **Settings** → **Pages**
2. Selecciona **Source**: Deploy from a branch
3. Selecciona **Branch**: `main` / `root`
4. El sitio estará disponible en `https://[tu-usuario].github.io/marketing-landing-Alquimia/`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 📞 Contacto

**Alquimia Marketing**
- 📧 Email: contacto@alquimia.com
- 💬 WhatsApp: [+598 12345678](https://wa.me/59812345678)
- 💼 LinkedIn: [Santiago Machado](https://www.linkedin.com/in/santiago-machado-mba-8627762/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
