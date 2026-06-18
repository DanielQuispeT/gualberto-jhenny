document.addEventListener("DOMContentLoaded", () => {
  const cfg = WEDDING_CONFIG;

  // 1. Llenar Hero
  document.getElementById("hero-groom").textContent = cfg.couple.groomName;
  document.getElementById("hero-bride").textContent = cfg.couple.brideName;
  document.getElementById("hero-date-top").textContent = cfg.dateAndLocation;
  document.getElementById("hero-location").textContent = cfg.couple.weddingCity;
  document.getElementById("footer-names").textContent =
    `${cfg.couple.groomName} & ${cfg.couple.brideName}`;

  // 2. Textos
  document.getElementById("blessing-text").textContent = cfg.blessingQuote;

  // 3. Padres
  const parentsGrid = document.getElementById("parents-grid");
  const buildParents = (list) =>
    list.map((p) => `<p class="parent-name">${p.name}</p>`).join("");
  parentsGrid.innerHTML = `
    <div>${buildParents(cfg.parents.columnOne)}</div>
    <div>${buildParents(cfg.parents.columnTwo)}</div>
  `;

  // 4. Itinerario (Timeline)
  const timelineGrid = document.getElementById("timeline-grid");
  timelineGrid.innerHTML = cfg.timeline
    .map(
      (ev) => `
    <div class="event-card">
      <p class="overline event-date">${ev.date} — ${ev.time}</p>
      <h3 class="event-title">${ev.title}</h3>
      <p class="body-text">${ev.place}</p>
      <p class="body-text" style="font-size:0.9rem; margin-top:10px;">${ev.description}</p>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.mapQuery)}" target="_blank" class="btn-outline">Ver Ubicación</a>
    </div>
  `,
    )
    .join("");

  // 5. Padrinos
  document.getElementById("godparents-grid").innerHTML = cfg.godparents
    .map(
      (g) => `
    <div style="margin-bottom: 2rem;">
      <p class="overline">${g.group}</p>
      ${g.members.map((m) => `<p class="parent-name" style="font-size:1.3rem;">${m}</p>`).join("")}
    </div>
  `,
    )
    .join("");

  // 6. RSVP
  document.getElementById("rsvp-date").textContent = cfg.rsvp.deadline;

  // Manejo de RSVP condicional
  const form = document.getElementById("rsvp-form");
  const conditionalFields = document.getElementById("conditional-fields");
  const radios = form.querySelectorAll('input[name="attending"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      conditionalFields.style.display =
        e.target.value === "yes" ? "block" : "none";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const attending = form.querySelector(
      'input[name="attending"]:checked',
    ).value;
    const guests = form.elements.guests.value;
    const msg = form.elements.message.value;

    let text =
      attending === "yes"
        ? `Hola, soy ${name}. Confirmo mi asistencia con ${guests} persona(s).\n${msg}`
        : `Hola, soy ${name}. Lamentablemente no podré asistir, les deseo lo mejor.`;

    window.open(
      `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`,
    );
  });

  // 7. Cuenta Regresiva
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
  }, 1000);

  // 8. Scroll Reveal
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
