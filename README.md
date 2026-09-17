# VIVANCOFFEE · Cafetería y repostería

Sitio web desarrollado con **React y Vite** para una cafetería de San Felipe, Guanajuato. Reúne menú, identidad visual, fotografías, horarios y canales de contacto en una experiencia de una sola página.

**[Ver sitio en vivo](https://mqgiag.github.io/RVIVANCOFFEE/)** · [Portafolio del desarrollador](https://mqgiadev.com)

## Caso de estudio

**Necesidad.** Presentar el menú y la personalidad del negocio, junto con información útil para visitar la cafetería o contactar al equipo.

**Decisiones.** Organizar la oferta en categorías desplegables para recorrer un menú extenso; conservar una versión descargable en PDF; separar los estilos por sección y mantener el contacto mediante enlaces a los canales del negocio.

**Solución.** Una aplicación React con portada, menú interactivo, sección de experiencia, galería y contacto. El loader utiliza estado y efectos de React; las interacciones de navegación se gestionan en `usePageInteractions`.

**Resultado observable.** El sitio está publicado en GitHub Pages y permite consultar el contenido y acceder al contacto desde un mismo lugar. No se presentan métricas de ventas o conversión porque no están documentadas en el repositorio.

## Funcionalidades

- Menú organizado por categorías con productos, descripciones y precios.
- Descarga del menú completo en PDF.
- Loader animado con temática de café.
- Navegación por secciones y menú móvil.
- Galería e identidad visual de la cafetería.
- Dirección, horarios y modalidades de servicio.
- Enlaces a WhatsApp, Instagram y Facebook.
- Estilos responsivos y cursor personalizado en dispositivos compatibles.

El contacto se realiza en servicios externos. Esta versión no incorpora carrito, pagos en línea ni una API propia.

## Tecnologías y organización

| Tecnología | Uso |
| --- | --- |
| React | Interfaz, loader y ciclo de vida de las interacciones. |
| Vite | Servidor de desarrollo y compilación. |
| JavaScript y CSS | Interacciones, estilos por sección y animaciones. |
| GitHub Actions / Pages | Publicación del sitio. |

La página y sus interacciones están concentradas en `src/App.jsx`; los estilos se organizan en `src/styles/`. Las imágenes y el PDF se sirven desde `public/`.

## Instalación local

Necesitas Git, Node.js y npm. Utiliza una versión de Node compatible con la versión de Vite registrada en `package-lock.json`.

```bash
git clone https://github.com/MqgiaG/RVIVANCOFFEE.git
cd RVIVANCOFFEE
npm ci
npm run dev
```

Abre la dirección indicada por Vite. Con el puerto habitual, será [localhost:5173/RVIVANCOFFEE/](http://localhost:5173/RVIVANCOFFEE/). No se requieren variables de entorno ni base de datos para esta versión.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Iniciar desarrollo local. |
| `npm run build` | Generar el sitio en `dist/`. |
| `npm run preview` | Revisar el build localmente. |

## Estructura

```text
RVIVANCOFFEE/
├── public/
│   ├── assets/images/
│   └── menu/Menu_Vivancoffee.pdf
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── .github/workflows/deploy.yml
├── package.json
└── vite.config.js
```

## Mantenimiento y publicación

- **Menú, precios, horarios y contacto:** actualizar `src/App.jsx`.
- **Identidad visual:** revisar `src/styles/variables.css` y los estilos de cada sección.
- **Imágenes:** mantener las rutas de `public/assets/images/` sincronizadas con sus referencias.
- **PDF:** sustituir `public/menu/Menu_Vivancoffee.pdf` y mantenerlo consistente con el menú web.
- **Publicación:** compilar y publicar el contenido de `dist/`; el repositorio incluye un workflow de despliegue.

La base de Vite es `/RVIVANCOFFEE/`. También hay rutas de recursos escritas con ese prefijo en el código: si cambias de dominio o subcarpeta, revisa tanto `vite.config.js` como las referencias a imágenes y al PDF.

Después de editar, comprueba la navegación móvil, la apertura de categorías, la descarga del menú y los enlaces de contacto.

## Autor

Desarrollado por [Gerardo Rangel · MqgiaG](https://github.com/MqgiaG).
