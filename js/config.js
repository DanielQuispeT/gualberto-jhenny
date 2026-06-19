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
  heroImage: "", // Se mantiene vacío para explotar el diseño de marcos vectoriales

  gallery: [
    { src: "assets/images/couple/foto-1.webp" },
    { src: "assets/images/couple/foto-2.webp" },
  ],

  blessingQuote:
    "«Guiados por el amor de Dios, decidimos unir nuestros caminos en un solo destino. Con la bendición de nuestras familias y la compañía de quienes más amamos, daremos inicio al capítulo más hermoso de nuestras vidas.»",

  /* Configuración del diseño específico de padres */
  parents: {
    groomLabel: "Madre del Novio",
    groomMother: "Valeriana Menacho C. †", // Agregamos la cruz tradicional de respeto para fallecidos

    brideLabel: "Padres de la Novia",
    brideFather: "Benedicto Duran †",
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
          mapQuery: "Iglesia San Lazaro, Sucre, Bolivia",
        },
        {
          time: "19:00",
          title: "Recepción Social",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Los esperamos para celebrar con alegría, un gran brindis y el primer baile de esposos.",
          mapQuery: "Calle Peru, Sucre, Bolivia",
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
          mapQuery: "Capilla Virgen de Guadalupe, Sucre, Bolivia",
        },
        {
          time: "12:30",
          title: "Gran Celebración",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Cerramos este fin de semana inolvidable con banquete tradicional y baile.",
          mapQuery: "Calle Peru, Sucre, Bolivia",
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
    deadline: "15 de Julio de 2026", // 3 días exactos antes de la boda (18 de Julio)
  },
};
