document.addEventListener("DOMContentLoaded", () => {
  const cfg = WEDDING_CONFIG;

  // 1. Fondos
  const heroBg = document.getElementById("hero-bg");
  if (cfg.heroImage && cfg.heroImage !== "") {
    heroBg.style.backgroundImage = `url('${cfg.heroImage}')`;
    heroBg.style.backgroundSize = "cover";
  }

  // 2. Textos Básicos
  document.getElementById("hero-groom").textContent = cfg.couple.groomName;
  document.getElementById("hero-bride").textContent = cfg.couple.brideName;
  document.getElementById("hero-date-top").textContent = cfg.dateAndLocation;
  document.getElementById("hero-location").textContent = cfg.couple.weddingCity;
  document.getElementById("footer-names").textContent =
    `${cfg.couple.groomName} & ${cfg.couple.brideName}`;
  document.getElementById("blessing-text").textContent = cfg.blessingQuote;

  // 3. Padres (Estructurado de manera asimétrica)
  const parentsContainer = document.getElementById("parents-container");
  parentsContainer.innerHTML = `
    <div class="parents-column reveal">
      <span class="overline">${cfg.parents.groomLabel}</span>
      <p class="parent-name">${cfg.parents.groomMother}</p>
    </div>
    <div class="parents-divider reveal">
      <div class="gold-ornament" style="font-size: 1rem;">✦</div>
    </div>
    <div class="parents-column reveal">
      <span class="overline">${cfg.parents.brideLabel}</span>
      <p class="parent-name">${cfg.parents.brideFather}</p>
      <p class="parent-name">${cfg.parents.brideMother}</p>
    </div>
  `;

  // 4. Itinerario ( timeline vertical con Google Maps y Google Calendar )
  const timelineGrid = document.getElementById("timeline-grid");

  // Función interna para generar la URL de Google Calendar
  const makeCalendarUrl = (ev) => {
    const title = `${ev.title} — ${cfg.couple.groomName} & ${cfg.couple.brideName}`;
    const details = `${ev.description}\n\nLugar: ${ev.place}`;
    const location = ev.place;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${ev.calendarDateStart}/${ev.calendarDateEnd}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&ctz=America/La_Paz`;
  };

  timelineGrid.innerHTML = cfg.timeline
    .map(
      (day) => `
    <div class="day-block reveal">
      <div class="day-title">${day.dayTitle}</div>
      ${day.events
        .map((ev) => {
          // Si hay coordenadas las usamos, de lo contrario cae en modo texto de búsqueda
          const mapUrl = ev.coords
            ? `https://www.google.com/maps/search/?api=1&query=${ev.coords}`
            : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.place + ", Sucre, Bolivia")}`;

          const calendarUrl = makeCalendarUrl(ev);

          return `
              <div class="event-card">
                <span class="overline" style="margin-bottom: 4px;">${ev.time}</span>
                <h3 class="text-gold">${ev.title}</h3>
                <p class="body-text" style="color:var(--text-main); font-weight:500; font-size: 1rem;">${ev.place}</p>
                <p class="body-text" style="font-size:0.9rem; margin-top:5px; line-height: 1.6;">${ev.description}</p>
                
                <div class="event-actions">
                  <a href="${mapUrl}" target="_blank" class="btn-outline-gold">
                    Ver Ubicación
                  </a>
                  <a href="${calendarUrl}" target="_blank" class="btn-outline-gold secondary">
                    Agendar Evento
                  </a>
                </div>
              </div>
            `;
        })
        .join("")}
    </div>
  `,
    )
    .join("");

  // 5. Galería de Fotos (Efecto Cuadro con gancho para Lightbox)
  const photoGallery = document.getElementById("photo-gallery");
  photoGallery.innerHTML = cfg.gallery
    .map(
      (foto) => `
    <div class="gallery-item reveal" data-src="${foto.src}">
      <div class="gallery-img-wrap">
        <img src="${foto.src}" alt="Momento especial" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGM0VGRTYiLz48L3N2Zz4='">
      </div>
    </div>
  `,
    )
    .join("");

  // Funcionalidad Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      lightboxImg.src = src;
      lightbox.style.display = "block";
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

  // 6. Padrinos (Estructura responsiva adaptable)
  document.getElementById("godparents-grid").innerHTML = cfg.godparents
    .map(
      (g) => `
    <div class="godparents-block reveal">
      <span class="overline">${g.group}</span>
      ${g.members.map((m) => `<p class="parent-name" style="font-size: 1.5rem;">${m}</p>`).join("")}
    </div>
  `,
    )
    .join("");

  // 7. Formulario RSVP
  document.getElementById("rsvp-date").textContent = cfg.rsvp.deadline;
  const form = document.getElementById("rsvp-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const guestsInput = form.elements.guests.value.trim();
    const msg = form.elements.message.value.trim();

    const guestsNum = parseInt(guestsInput) || 0;
    let text = `¡Hola! Soy ${name}, `;
    if (guestsNum > 0) {
      text += `asistiré a su boda con ${guestsNum} persona(s) adicional(es).`;
    } else {
      text += `asistiré de forma individual.`;
    }

    if (msg !== "") text += `\n\n"${msg}"`;
    window.open(
      `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`,
    );
  });

  // 8. Cuenta Regresiva
  const target = new Date(cfg.countdownTarget).getTime();
  const updateCountdown = () => {
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
  };
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 9. Partículas Doradas Estilo Polvo de Hadas
  const container = document.getElementById("particles");
  for (let i = 0; i < 25; i++) {
    let p = document.createElement("div");
    p.style.position = "absolute";
    p.style.width = Math.random() * 3 + 1.5 + "px";
    p.style.height = p.style.width;
    p.style.backgroundColor = "#D4AF37";
    p.style.borderRadius = "50%";
    p.style.opacity = Math.random() * 0.7 + 0.3;
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animation = `float ${Math.random() * 5 + 4}s ease-in-out infinite alternate`;
    container.appendChild(p);
  }

  // 10. REPRODUCTOR DE MÚSICA INTELIGENTE (Music Pill Widget)
  const musicBtn = document.getElementById("music-btn");
  const bgMusic = document.getElementById("bg-music");
  const iconPlay = document.getElementById("music-icon-play");
  const iconPause = document.getElementById("music-icon-pause");

  if (cfg.musicFile && cfg.musicFile !== "") {
    bgMusic.src = cfg.musicFile;

    musicBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic
          .play()
          .then(() => {
            iconPlay.style.display = "none";
            iconPause.style.display = "block";
            musicBtn.classList.add("playing"); // Esto activa la expansión en CSS automáticamente
          })
          .catch((err) =>
            console.log("La reproducción requiere interacción del usuario."),
          );
      } else {
        bgMusic.pause();
        iconPlay.style.display = "block";
        iconPause.style.display = "none";
        musicBtn.classList.remove("playing"); // Vuelve a su tamaño circular
      }
    });
  } else {
    musicBtn.style.display = "none";
  }

  // 11. Animación suave al hacer Scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
