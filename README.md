# Desconcertados Studios — sitio web de servicios creativos

Sitio web multipágina responsive creado con **HTML5, CSS3 y JavaScript vanilla**. No requiere instalación de dependencias ni proceso de compilación.

## Estructura

```text
Desconcertados_Studios/
├── index.html
├── servicios.html
├── cursos.html
├── contacto.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    └── README.md
```

## Cómo probarlo

1. Descarga y descomprime el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` en el navegador (recomendado: extensión **Live Server**).
4. Navega por Servicios, Cursos y Contacto.

## Funcionalidades incluidas

- Diseño adaptable a escritorio, tablet y móvil.
- Menú móvil desplegable.
- Filtros interactivos en el catálogo de servicios.
- Formulario con validación HTML y campos precargados según el servicio o curso elegido.
- El formulario prepara un correo mediante `mailto:`; no guarda ni envía datos por sí solo.
- Año automático en el footer.
- Metadatos básicos SEO y etiquetas semánticas.
- Enlaces entre páginas y llamados a la acción.

## Antes de publicar en GitHub Pages

- Revisa el correo de `js/main.js` (`contacto@desconcertadosst.com.mx`) y cámbialo si utilizas otra dirección.
- Las fotografías de demostración se cargan desde Unsplash por URL, por lo que necesitan conexión a internet. Puedes sustituirlas por imágenes propias dentro de `img/` y actualizar las rutas.
- Confirma que los servicios, precios, redes sociales y datos de contacto estén actualizados.
- Para recibir formularios automáticamente, integra un backend o un proveedor de formularios. El sitio actual abre la aplicación de correo del visitante.
- Para publicar: sube el contenido de esta carpeta a un repositorio y activa **Settings → Pages** en GitHub, usando la rama y carpeta raíz correspondientes.

## Identidad del proyecto

Concepto visual oscuro con acento lima, tipografía Space Grotesk + DM Sans y lenguaje urbano/creativo. La propuesta contempla grabación, mezcla y mastering, beats, fotografía, videoclips, producción audiovisual, branding y formación creativa.
