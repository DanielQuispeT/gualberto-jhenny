/* =========================================================================
   CONFIG.JS — Todo el contenido editable de la invitación vive aquí.
   Para personalizar la página, solo necesitas modificar este archivo.
   No necesitas tocar el HTML, CSS ni el resto del JS para cambiar textos,
   fechas, fotos, padrinos o el número de WhatsApp.
   ========================================================================= */

const WEDDING_CONFIG = {
  // ---------------------------------------------------------------------
  // PAREJA
  // ---------------------------------------------------------------------
  couple: {
    groomName: "Gualberto",
    brideName: "Jhenny",
    weddingCity: "Sucre",
    weddingMonthYear: "Julio de 2026",
  },

  // ---------------------------------------------------------------------
  // FRASE DE BENDICIÓN (epígrafe que aparece justo después del hero)
  // ---------------------------------------------------------------------
  blessingQuote:
    "Bendice Señor nuestra unión, que el amor hacia ti y nuestra familia " +
    "sea la base de este matrimonio que hoy nos une, y que nuestra vida " +
    "sea un ejemplo de tu amor.",

  // ---------------------------------------------------------------------
  // INTRODUCCIÓN / MOTIVO
  // ---------------------------------------------------------------------
  intro: {
    eyebrow: "Con la bendición de Dios y nuestros padres",
    text:
      "Motivados por el amor que nos tenemos, con la alegría y la " +
      "bendición de Dios y nuestros padres, deseamos de todo corazón " +
      "contar con la presencia de cada uno de ustedes para juntos " +
      "celebrar nuestro enlace matrimonial.",
  },

  // ---------------------------------------------------------------------
  // PADRES (se muestran en dos columnas, igual que en la invitación física)
  // ---------------------------------------------------------------------
  parents: {
    columnOne: [{ name: "Valeriana Menacho C.", deceased: true }],
    columnTwo: [
      { name: "Benedicto Duran", deceased: true },
      { name: "Eva Choque vda. de Duran", deceased: false },
    ],
  },

  // ---------------------------------------------------------------------
  // CUENTA REGRESIVA — fecha y hora exacta del primer evento (boda religiosa)
  // Formato: "YYYY-MM-DDTHH:MM:SS" (hora local de Sucre, Bolivia)
  // ---------------------------------------------------------------------
  countdownTarget: "2026-07-18T17:00:00",

  // ---------------------------------------------------------------------
  // TIMELINE — los dos días de celebración
  // ---------------------------------------------------------------------
  timeline: [
    {
      day: "Día uno",
      date: "Sábado 18 de julio",
      time: "17:00",
      title: "Matrimonio Religioso y Civil",
      place: "Iglesia San Lázaro",
      description:
        "Nos uniremos ante Dios y la ley para comenzar esta nueva vida " +
        "juntos. Será un honor contar con tu presencia en este momento " +
        "tan especial.",
      icon: "church",
      mapQuery: "Iglesia San Lazaro, Sucre, Bolivia",
    },
    {
      day: "Día dos",
      date: "Domingo 19 de julio",
      time: "10:30",
      title: "Misa de Salud",
      place: "Capilla de la Virgen de Guadalupe",
      description:
        "Te invitamos a acompañarnos en esta misa de acción de gracias, " +
        "donde renovaremos nuestra bendición y daremos gracias por la " +
        "salud y el amor de nuestras familias.",
      icon: "chapel",
      mapQuery: "Capilla Virgen de Guadalupe, Sucre, Bolivia",
    },
  ],

  // ---------------------------------------------------------------------
  // RECEPCIÓN — sigue a la Misa de Salud el día domingo
  // ---------------------------------------------------------------------
  reception: {
    title: "Recepción Social",
    place: "Salón de Eventos La Plata",
    address: "Calle Perú #222",
    note: "Inmediatamente después de la Misa de Salud, te esperamos para celebrar con baile, buena mesa y mucha alegría.",
    mapQuery: "Calle Peru, Sucre, Bolivia",
  },

  // ---------------------------------------------------------------------
  // PADRINOS
  // ---------------------------------------------------------------------
  godparents: [
    {
      group: "Padrinos de Religioso y Civil",
      members: [
        "Jose Luis Sempertegui Romero",
        "Juanita Aguilar de Sempertegui",
      ],
    },
    {
      group: "Padrinos de Misa de Salud",
      members: ["Maria Luisa Duran Choque", "E hijo Dimar Fabian Grageda"],
    },
  ],

  // ---------------------------------------------------------------------
  // GALERÍA DE FOTOS
  // Reemplaza estas rutas por tus propias fotos (mismo nombre de archivo,
  // colócalas dentro de assets/images/gallery/). Si una foto no existe
  // todavía, se muestra automáticamente un marco decorativo de respaldo,
  // así que puedes ir agregando fotos de a poco sin romper el diseño.
  // ---------------------------------------------------------------------
  gallery: [
    { src: "assets/images/gallery/foto-1.jpg", caption: "Nuestro inicio" },
    { src: "assets/images/gallery/foto-2.jpg", caption: "Un sí, mil motivos" },
    { src: "assets/images/gallery/foto-3.jpg", caption: "Juntos en cada paso" },
    {
      src: "assets/images/gallery/foto-4.jpg",
      caption: "El camino hasta aquí",
    },
    {
      src: "assets/images/gallery/foto-5.jpg",
      caption: "Familia y bendiciones",
    },
    { src: "assets/images/gallery/foto-6.jpg", caption: "Lo que viene" },
  ],

  // Foto de portada opcional para el hero (déjalo vacío "" para usar
  // el fondo ilustrado por defecto)
  heroImage: "",

  // ---------------------------------------------------------------------
  // CONFIRMACIÓN DE ASISTENCIA (RSVP)
  // El sitio es estático (sin servidor), así que el formulario envía la
  // confirmación por WhatsApp directamente al número que indiques aquí.
  // Formato: código de país + número, sin espacios ni símbolos.
  // Ejemplo Bolivia: "59170000000"
  // ---------------------------------------------------------------------
  rsvp: {
    whatsappNumber: "59177124086",
    deadline: "10 de julio de 2026",
  },

  // ---------------------------------------------------------------------
  // PIE DE PÁGINA
  // ---------------------------------------------------------------------
  footer: {
    closingMessage: "Con todo nuestro amor, te esperamos.",
    location: "Sucre, Bolivia · Julio de 2026",
  },
};
