# Invitación de Boda — Gualberto & Jhenny

Sitio web de invitación de matrimonio: una sola página, con animaciones, línea de tiempo de los dos días de celebración, galería de fotos, mapas de ubicación y confirmación de asistencia por WhatsApp.

## 1. Estructura del proyecto

```
invitacion-boda/
├── index.html              ← Estructura de la página (no necesitas tocarlo casi nunca)
├── css/
│   ├── variables.css        ← 🎨 PALETA DE COLORES Y TIPOGRAFÍA (edita aquí)
│   ├── reset.css            ← Base técnica, no tocar
│   ├── animations.css       ← Animaciones (pétalos, revelado al scroll, anillos)
│   └── styles.css           ← Estilos visuales de cada sección
├── js/
│   ├── config.js             ← ✏️ TODO EL CONTENIDO (edita aquí: nombres, fechas, padrinos, fotos, WhatsApp)
│   └── main.js               ← Lógica del sitio (renderizado, animaciones, formulario)
└── assets/
    └── images/
        ├── couple/           ← (opcional) foto de portada del hero
        └── gallery/          ← Aquí van las fotos de la galería (foto-1.jpg, foto-2.jpg, ...)
```

**Regla simple:** para cambiar texto, fechas, padrinos, fotos o el número de WhatsApp → edita `js/config.js`.
Para cambiar colores o tipografía → edita `css/variables.css`. No necesitas tocar el resto.

## 2. Cómo personalizar el contenido (`js/config.js`)

Abre `js/config.js` con cualquier editor de texto (incluso el Bloc de notas funciona, aunque se recomienda VS Code, que es gratis). Ahí encontrarás bloques claramente comentados:

- `couple`: nombres de los novios.
- `blessingQuote`: la frase de bendición que aparece después del hero.
- `intro`: el mensaje "motivados por el amor...".
- `parents`: las dos columnas de padres/familiares, con la marca `(+)` para difuntos.
- `countdownTarget`: fecha y hora exacta de la cuenta regresiva (formato `"2026-07-18T17:00:00"`).
- `timeline`: los dos días del evento (fecha, hora, lugar, descripción, y `mapQuery` para el mapa).
- `reception`: la recepción social del domingo.
- `godparents`: los dos grupos de padrinos.
- `gallery`: la lista de fotos. Cada foto necesita una ruta (`src`) y un texto (`caption`).
- `rsvp.whatsappNumber`: **¡importante!** reemplázalo por el número real de WhatsApp que recibirá las confirmaciones (con código de país, sin espacios ni símbolos, ej. `"59171234567"`).

Cualquier cambio en este archivo se refleja automáticamente en toda la página, sin tocar el HTML.

## 3. Cómo agregar tus propias fotos

1. Copia tus fotos dentro de `assets/images/gallery/`.
2. Nómbralas igual que en `config.js` (por defecto `foto-1.jpg`, `foto-2.jpg`, etc.) o cambia las rutas en el archivo `config.js` para que coincidan con tus nombres de archivo.
3. Si todavía no subiste una foto, el sitio muestra automáticamente un marco decorativo en su lugar — nunca se ve roto.
4. Para la foto de portada (fondo del hero), coloca la imagen donde quieras (por ejemplo `assets/images/couple/portada.jpg`) y escribe esa ruta en `heroImage` dentro de `config.js`. Si lo dejas vacío `""`, se usa el fondo ilustrado dorado/vino por defecto.

**Recomendación:** comprime las fotos antes de subirlas (máx. ~500 KB cada una) para que el sitio cargue rápido en el celular de tus invitados. Puedes usar [squoosh.app](https://squoosh.app) gratis.

## 4. Cómo cambiar colores y tipografía

Todo está centralizado en `css/variables.css`. Por ejemplo:

```css
--c-wine:  #6E1423;   /* color principal (vino) */
--c-gold:  #C9A227;   /* dorado de acentos */
--c-cream: #FBF5EA;   /* fondo marfil */
```

Cambia cualquier valor hexadecimal y se actualiza en todo el sitio automáticamente.

## 5. El mapa y la ubicación

Los mapas se generan automáticamente a partir del texto en `mapQuery` (por ejemplo `"Iglesia San Lazaro, Sucre, Bolivia"`). Si el mapa no encuentra el lugar exacto, prueba escribiendo la dirección de forma más específica, o reemplaza `mapQuery` por la dirección completa.

## 6. Confirmación de asistencia (RSVP)

Como esta página es un sitio estático (sin servidor propio), el formulario de confirmación abre WhatsApp con un mensaje ya escrito, dirigido al número que configures en `rsvp.whatsappNumber`. El invitado solo debe presionar "Enviar". No necesitas ninguna base de datos ni backend.

## 7. Cómo verla en tu computadora antes de publicarla

No abras `index.html` haciendo doble clic directamente en algunos navegadores estrictos; lo más seguro es levantar un servidor local simple:

- Si tienes Python instalado: abre una terminal en esta carpeta y ejecuta `python3 -m http.server 8080`, luego abre `http://localhost:8080` en tu navegador.
- Si usas VS Code: instala la extensión "Live Server" y haz clic en "Go Live".

(Nota: la tipografía decorativa de los nombres se descarga desde Google Fonts, así que necesitas conexión a internet para verla correctamente, tanto en pruebas locales como una vez publicada.)

## 8. Cómo publicarla gratis

Las opciones más simples y gratuitas:

- **Vercel** o **Netlify**: arrastra la carpeta completa a su panel web (drag & drop) y obtienes un link público en segundos.
- **GitHub Pages**: sube la carpeta a un repositorio de GitHub y activa Pages en la configuración del repositorio.

No requiere build ni instalación de dependencias — es HTML, CSS y JS puro.

## 9. Ideas para seguir mejorando (opcional)

- Agregar una foto real de portada en el hero.
- Reemplazar el número de WhatsApp de prueba por el real.
- Verificar que los `mapQuery` realmente apunten a la ubicación exacta en Google Maps.
- Si quieres guardar las confirmaciones en una hoja de cálculo en lugar de solo WhatsApp, se puede integrar un formulario con Google Forms o Formspree — avísame si quieres que lo agregue.
