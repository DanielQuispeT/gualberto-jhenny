document.addEventListener("DOMContentLoaded", () => {
  const cfg = WEDDING_CONFIG;

  // 1. Fondos
  const heroBg = document.getElementById("hero-bg");
  if (cfg.heroImage) heroBg.style.backgroundImage = `url('${cfg.heroImage}')`;

  // 2. Textos Básicos
  document.getElementById("hero-groom").textContent = cfg.couple.groomName;
  document.getElementById("hero-bride").textContent = cfg.couple.brideName;
  document.getElementById("hero-date-top").textContent = cfg.dateAndLocation;
  document.getElementById("hero-location").textContent = cfg.couple.weddingCity;
  document.getElementById("footer-names").textContent =
    `${cfg.couple.groomName} & ${cfg.couple.brideName}`;
  document.getElementById("blessing-text").textContent = cfg.blessingQuote;

  // 3. Padres
  const parentsGrid = document.getElementById("parents-grid");
  const buildParents = (list) =>
    list.map((p) => `<p class="parent-name">${p.name}</p>`).join("");
  parentsGrid.innerHTML = `<div>${buildParents(cfg.parents.columnOne)}</div><div>${buildParents(cfg.parents.columnTwo)}</div>`;

  // 4. Itinerario (AGRUPADO POR DÍAS)
  const timelineGrid = document.getElementById("timeline-grid");
  timelineGrid.innerHTML = cfg.timeline
    .map(
      (day) => `
    <div class="day-block reveal">
      <div class="day-title">${day.dayTitle}</div>
      ${day.events
        .map(
          (ev) => `
        <div class="event-card">
          <p class="overline" style="margin-bottom: 5px;">${ev.time}</p>
          <h3 class="text-gold">${ev.title}</h3>
          <p class="body-text" style="color:var(--text-main); font-weight:500;">${ev.place}</p>
          <p class="body-text" style="font-size:0.95rem; margin-top:5px;">${ev.description}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.mapQuery)}" target="_blank" class="btn-outline-gold">Ver Ubicación</a>
        </div>
      `,
        )
        .join("")}
    </div>
  `,
    )
    .join("");

  // 5. Galería de Fotos (3 columnas)
  const photoGallery = document.getElementById("photo-gallery");
  photoGallery.innerHTML = cfg.gallery
    .map(
      (foto) => `
    <div class="gallery-item reveal">
      <img src="${foto.src}" alt="Momento especial" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGM0VGRTYiLz48L3N2Zz4='">
    </div>
  `,
    )
    .join("");

  // 6. Padrinos
  document.getElementById("godparents-grid").innerHTML = cfg.godparents
    .map(
      (g) => `
    <div style="margin-bottom: 2.5rem;" class="reveal">
      <p class="overline">${g.group}</p>
      ${g.members.map((m) => `<p class="parent-name">${m}</p>`).join("")}
    </div>
  `,
    )
    .join("");

  // 7. FORMULARIO RSVP (Simple como pediste)
  document.getElementById("rsvp-date").textContent = cfg.rsvp.deadline;
  const form = document.getElementById("rsvp-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const guestsInput = form.elements.guests.value.trim();
    const msg = form.elements.message.value.trim();

    // Lógica para acompañantes
    const guestsNum = parseInt(guestsInput) || 0;

    let text = `¡Hola! Soy ${name}, `;
    if (guestsNum > 0) {
      text += `asistiré con ${guestsNum} persona(s) más.`;
    } else {
      text += `asistiré yo solo/a.`;
    }

    if (msg !== "") {
      // Dejamos espacios como pediste para la felicitación
      text += `\n\n${msg}`;
    }

    window.open(
      `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`,
    );
  });

  // 8. Cuenta Regresiva Bonita
  const target = new Date(cfg.countdownTarget).getTime();
  setInterval(() => {
    const diff = Math.max(0, target - Date.now());
    document.getElementById("cd-days").textContent = String(
      Math.floor(diff / 86400000),
    ).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(
      Math.floor((diff % 86400000) / 3600000),
    ).padStart(2, "0");
    document.getElementById("cd-minutes").textContent = String(
      Math.floor((diff % 3600000) / 60000),
    ).padStart(2, "0");
    document.getElementById("cd-seconds").textContent = String(
      Math.floor((diff % 60000) / 1000),
    ).padStart(2, "0");
  }, 1000);

  // 9. Animación Mágica Dorada en el Hero
  const container = document.getElementById("particles");
  for (let i = 0; i < 30; i++) {
    let p = document.createElement("div");
    p.style.position = "absolute";
    p.style.width = Math.random() * 5 + 2 + "px";
    p.style.height = p.style.width;
    p.style.backgroundColor = "#D4AF37";
    p.style.borderRadius = "50%";
    p.style.opacity = Math.random();
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite alternate`;
    container.appendChild(p);
  }

  // 10. Animación al scrollear
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
