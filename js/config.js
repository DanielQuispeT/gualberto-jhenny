const WEDDING_CONFIG = {
  couple: {
    groomName: "Gualberto",
    brideName: "Jhenny",
    weddingCity: "Sucre, Bolivia",
  },
  // Actualizado para incluir el lunes 20 de forma oficial
  dateAndLocation: "18, 19 y 20 de Julio, 2026",
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
    groomMother: "Valeriana Menacho C. †", // Cruz de respeto limpia y elegante

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
          coords: "-19.050887745631307, -65.25451139313107",
          calendarDateStart: "20260718T170000",
          calendarDateEnd: "20260718T183000",
        },
        {
          time: "19:00",
          title: "Recepción Social",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Los esperamos para celebrar con alegría, un gran brindis y el primer baile de esposos.",
          coords: "-19.03299363090343, -65.24742848357239",
          calendarDateStart: "20260718T190000",
          calendarDateEnd: "20260719T020000",
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
          coords: "-19.048997231833546, -65.25983048544661",
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
          calendarDateEnd: "20260719T230000",
        },
      ],
    },
    {
      dayTitle: "Lunes 20 de Julio",
      events: [
        {
          time: "15:30",
          title: "Challa de Regalos",
          place: "Salón La Plata (Calle Perú #222)",
          description:
            "Acompáñanos a realizar la tradicional ch'alla y apertura de regalos, compartiendo un brindis de prosperidad para nuestro nuevo hogar.",
          coords: "-19.03299363090343, -65.24742848357239",
          calendarDateStart: "20260720T153000",
          calendarDateEnd: "20260720T230000",
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
      members: ["Maria Luisa Duran Choque", "Dimar Fabian Grageda (hijo)"],
    },
  ],

  rsvp: {
    whatsappNumber: "59168664853",
    deadline: "15 de Julio de 2026",
  },
};
