const WEDDING_CONFIG = {
  couple: {
    groomName: "Gualberto",
    brideName: "Jhenny",
    weddingCity: "Sucre, Bolivia",
  },
  dateAndLocation: "18 y 19 de Julio, 2026",
  countdownTarget: "2026-07-18T17:00:00",

  /* --- MÚSICA DE FONDO --- */
  musicFile: "assets/music/cancion.mp3",

  /* --- FOTOGRAFÍAS --- */
  heroImage: "",

  gallery: [
    { src: "assets/images/couple/foto-1.webp" },
    { src: "assets/images/couple/foto-2.webp" },
  ],

  blessingQuote:
    "«Guiados por el amor de Dios, decidimos unir nuestros caminos en un solo destino. Con la bendición de nuestras familias y la compañía de quienes más amamos, daremos inicio al capítulo más hermoso de nuestras vidas.»",

  parents: {
    groomLabel: "Madre del Novio",
    groomMother: "Valeriana Menacho C. (†)",

    brideLabel: "Padres de la Novia",
    brideFather: "Benedicto Duran (†)",
    brideMother: "Eva Choque vda. de Duran",
  },

  timeline: [
    {
      dayTitle: "Sábado 18 de Julio",
      events: [
        {
          time: "17:00",
          title: "Matrimonio Religioso",
          place: "Iglesia San Lázaro",
          description:
            "La emotiva ceremonia en donde uniremos nuestras almas en matrimonio sagrado.",
          coords: "-19.050887745631307, -65.25451139313107", // Coordenadas exactas reales de la Iglesia San Lázaro
          calendarDateStart: "20260718T170000",
          calendarDateEnd: "20260718T183000",
        },
        {
          time: "19:00",
          title: "Recepción Social",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Los esperamos para celebrar con alegría, un gran brindis y el primer baile de esposos.",
          coords: "-19.03299363090343, -65.24742848357239", // Coordenadas aproximadas de la Calle Perú (puedes ajustarla si tienes el punto exacto)
          calendarDateStart: "20260718T190000",
          calendarDateEnd: "20260719T020000", // Termina en la madrugada del día siguiente
        },
      ],
    },
    {
      dayTitle: "Domingo 19 de Julio",
      events: [
        {
          time: "10:30",
          title: "Misa de Salud",
          place: "Capilla Virgen de Guadalupe",
          description:
            "Una sentida liturgia de acción de gracias por nuestra salud y bienestar familiar.",
          coords: "-19.048997231833546, -65.25983048544661", // Coordenadas reales de la Capilla junto a la Catedral de Sucre
          calendarDateStart: "20260719T103000",
          calendarDateEnd: "20260719T113000",
        },
        {
          time: "12:30",
          title: "Gran Celebración",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Cerramos este fin de semana de fiesta con banquete tradicional y baile.",
          coords: "-19.03299363090343, -65.24742848357239",
          calendarDateStart: "20260719T123000",
          calendarDateEnd: "20260719T200000",
        },
      ],
    },
  ],

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
      members: ["Maria Luisa Duran Choque", "Dimar Fabian Grageda"],
    },
  ],

  rsvp: {
    whatsappNumber: "59168664853",
    deadline: "15 de Julio de 2026",
  },
};
