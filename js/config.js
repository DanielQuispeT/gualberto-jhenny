const WEDDING_CONFIG = {
  couple: {
    groomName: "Gualberto",
    brideName: "Jhenny",
    weddingCity: "Sucre, Bolivia",
  },
  dateAndLocation: "18 y 19 de Julio, 2026",
  countdownTarget: "2026-07-18T17:00:00",

  heroImage: "assets/images/couple/portada.jpg",

  gallery: [
    { src: "assets/images/gallery/foto-1.jpg" },
    { src: "assets/images/gallery/foto-2.jpg" },
    { src: "assets/images/gallery/foto-3.jpg" },
    { src: "assets/images/gallery/foto-4.jpg" },
    { src: "assets/images/gallery/foto-5.jpg" },
    { src: "assets/images/gallery/foto-6.jpg" },
  ],

  blessingQuote:
    "Acompañados del amor de Dios y la bendición de nuestros padres, tenemos el honor de invitarles a celebrar el inicio de nuestra nueva vida juntos.",

  parents: {
    columnOne: [{ name: "Valeriana Menacho C. (+)" }],
    columnTwo: [
      { name: "Benedicto Duran (+)" },
      { name: "Eva Choque vda. de Duran" },
    ],
  },

  /* Itinerario agrupado por DÍAS */
  timeline: [
    {
      dayTitle: "Sábado 18 de Julio",
      events: [
        {
          time: "17:00",
          title: "Matrimonio Religioso",
          place: "Iglesia San Lázaro",
          description: "La ceremonia donde uniremos nuestras vidas.",
          mapQuery: "Iglesia San Lazaro, Sucre, Bolivia",
        },
        {
          time: "19:00",
          title: "Recepción Social",
          place: "Salón de Eventos",
          description: "Brindis íntimo y primer baile de esposos.",
          mapQuery: "Sucre, Bolivia",
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
          description: "Misa de acción de gracias.",
          mapQuery: "Capilla Virgen de Guadalupe, Sucre, Bolivia",
        },
        {
          time: "12:30",
          title: "Gran Celebración",
          place: "Salón La Plata (Calle Perú #222)",
          description: "Cerramos con broche de oro, banquete y música.",
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
    whatsappNumber: "59177124086",
    deadline: "10 de Julio",
  },
};
