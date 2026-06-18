/* =========================================================================
   MAIN.JS — Renderizado dinámico desde config.js + interacciones del sitio
   ========================================================================= */

(function () {
  "use strict";

  const cfg = WEDDING_CONFIG;

  /* -----------------------------------------------------------------
     Iconos SVG reutilizables (sin dependencias externas)
     ----------------------------------------------------------------- */
  const ICONS = {
    church:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v3M9 4h6M12 7l-7 5v9h14v-9l-7-5Z"/><path d="M9 21v-6h6v6" /></svg>',
    chapel:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v4"/><path d="M10 4h4"/><path d="M5 21V11l7-6 7 6v10H5Z"/><path d="M12 21v-7"/></svg>',
    flowerSmall:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2.4"/><path d="M12 2c1.8 2 1.8 4.6 0 6.5C10.2 6.6 10.2 4 12 2Z"/><path d="M12 22c1.8-2 1.8-4.6 0-6.5C10.2 17.4 10.2 20 12 22Z"/><path d="M2 12c2-1.8 4.6-1.8 6.5 0C6.6 13.8 4 13.8 2 12Z"/><path d="M22 12c-2 1.8-4.6 1.8-6.5 0 1.9-1.8 4.5-1.8 6.5 0Z"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-1.7-.7-2.8-1.6-3.7-3.1-.2-.4 0-.5.2-.7.2-.2.5-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 1.6 2.5 4 3.4 2 .8 2.4.7 2.8.6.4-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>',
    arrowDown:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4v16M5 13l7 7 7-7"/></svg>',
    photo:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" width="34" height="34"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.6"/><path d="M21 16l-5.5-5.5L9 17"/></svg>',
  };

  function ringsSVG(id) {
    return `
    <svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle class="ring-path" cx="62" cy="45" r="34" fill="none" stroke="var(--c-gold)" stroke-width="4"/>
      <circle class="ring-path" cx="98" cy="45" r="34" fill="none" stroke="var(--c-gold-light)" stroke-width="4" style="animation-delay:.3s"/>
      <path class="heart-pop" d="M80 38c-3-6-12-6-13 1-1 6 6 11 13 16 7-5 14-10 13-16-1-7-10-7-13-1Z" fill="#E0405A"/>
    </svg>`;
  }

  /* -----------------------------------------------------------------
     Render: contenido dinámico desde config.js
     ----------------------------------------------------------------- */
  function renderHero() {
    document.getElementById("hero-rings").innerHTML = ringsSVG();
    document.getElementById("hero-names").innerHTML =
      `${cfg.couple.groomName}<span class="hero-ampersand">&amp;</span>${cfg.couple.brideName}`;
    document.getElementById("nav-brand").textContent =
      `${cfg.couple.groomName} & ${cfg.couple.brideName}`;
    document.getElementById("footer-names").textContent =
      `${cfg.couple.groomName} & ${cfg.couple.brideName}`;

    const firstEvent = cfg.timeline[0];
    document.getElementById("hero-date").textContent = firstEvent
      ? `${firstEvent.date} · ${firstEvent.time}`
      : "";
    document.getElementById("hero-place").textContent =
      `${cfg.couple.weddingCity}, Bolivia`;

    if (cfg.heroImage) {
      const hero = document.querySelector(".hero");
      hero.style.backgroundImage =
        `linear-gradient(160deg, rgba(110,20,35,.78), rgba(71,13,22,.9)), url('${cfg.heroImage}')`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
    }
  }

  function renderQuoteAndIntro() {
    document.getElementById("blessing-quote").textContent = cfg.blessingQuote;
    document.getElementById("intro-eyebrow").textContent = cfg.intro.eyebrow;
    document.getElementById("intro-text").textContent = cfg.intro.text;
  }

  function renderParents() {
    const buildCol = (list) =>
      list
        .map(
          (p) => `
        <p class="parent-name">${p.name}${p.deceased ? '<span class="deceased-mark">(+)</span>' : ""}</p>`
        )
        .join("");
    document.getElementById("parents-col-1").innerHTML = buildCol(cfg.parents.columnOne);
    document.getElementById("parents-col-2").innerHTML = buildCol(cfg.parents.columnTwo);
  }

  function renderTimeline() {
    const wrap = document.getElementById("timeline-wrap");
    const reception = cfg.reception;
    const items = cfg.timeline
      .map((ev, i) => {
        const isLast = i === cfg.timeline.length - 1;
        return `
        <div class="timeline-item reveal" data-map="${encodeURIComponent(ev.mapQuery)}">
          <div class="timeline-dot">${ICONS[ev.icon] || ICONS.flowerSmall}</div>
          <div class="timeline-card">
            <span class="timeline-day">${ev.day}</span>
            <p class="timeline-date">${ev.date}</p>
            <p class="timeline-time">${ev.time}</p>
            <p class="timeline-title">${ev.title}</p>
            <p class="timeline-place">${ev.place}</p>
            <p class="timeline-desc">${ev.description}</p>
            <button class="btn btn-outline btn-small js-go-map" data-target="#ubicacion">
              ${ICONS.pin} Ver mapa
            </button>
            ${
              isLast
                ? `<div class="reception-card">
                    <p class="timeline-title">${reception.title}</p>
                    <p class="timeline-place">${reception.place} · ${reception.address}</p>
                    <p class="timeline-desc">${reception.note}</p>
                  </div>`
                : ""
            }
          </div>
        </div>`;
      })
      .join("");
    wrap.innerHTML = items;
  }

  function renderGodparents() {
    const wrap = document.getElementById("godparents-wrap");
    wrap.innerHTML = cfg.godparents
      .map(
        (g) => `
      <div class="godparent-card reveal-scale">
        <p class="godparent-group">${g.group}</p>
        ${g.members.map((m) => `<p class="godparent-name">${m}</p>`).join("")}
      </div>`
      )
      .join("");
  }

  function renderGallery() {
    const wrap = document.getElementById("gallery-wrap");
    wrap.innerHTML = cfg.gallery
      .map(
        (item, i) => `
      <figure class="gallery-item reveal-scale" data-index="${i}">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <figcaption class="gallery-caption">${item.caption}</figcaption>
      </figure>`
      )
      .join("");

    // Si una foto no existe todavía, se reemplaza por un marco decorativo
    wrap.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        const fig = img.closest(".gallery-item");
        if (fig && !fig.querySelector(".gallery-placeholder")) {
          const div = document.createElement("div");
          div.className = "gallery-placeholder";
          div.innerHTML = ICONS.photo;
          img.replaceWith(div);
        }
      });
    });
  }

  function renderLocations() {
    const wrap = document.getElementById("location-wrap");
    const places = [
      {
        name: cfg.timeline[0]?.place,
        address: cfg.timeline[0]?.date + " · " + cfg.timeline[0]?.time,
        mapQuery: cfg.timeline[0]?.mapQuery,
      },
      {
        name: cfg.reception.place,
        address: cfg.reception.address,
        mapQuery: cfg.reception.mapQuery,
      },
    ];
    wrap.innerHTML = places
      .map(
        (p) => `
      <div class="location-card reveal">
        <iframe loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed"></iframe>
        <div class="location-info">
          <p class="location-name">${p.name}</p>
          <p class="location-address">${p.address}</p>
          <a class="btn btn-outline btn-small" target="_blank" rel="noopener"
             href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery)}">
            ${ICONS.pin} Ver en Google Maps
          </a>
        </div>
      </div>`
      )
      .join("");
  }

  function renderRSVPMeta() {
    document.getElementById("rsvp-deadline").textContent =
      `Por favor confírmanos antes del ${cfg.rsvp.deadline}.`;
  }

  /* -----------------------------------------------------------------
     Cuenta regresiva
     ----------------------------------------------------------------- */
  function startCountdown() {
    const target = new Date(cfg.countdownTarget).getTime();
    const els = {
      d: document.getElementById("cd-days"),
      h: document.getElementById("cd-hours"),
      m: document.getElementById("cd-minutes"),
      s: document.getElementById("cd-seconds"),
    };
    if (!els.d) return;

    function tick() {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      els.d.textContent = String(d).padStart(2, "0");
      els.h.textContent = String(h).padStart(2, "0");
      els.m.textContent = String(m).padStart(2, "0");
      els.s.textContent = String(s).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }

  /* -----------------------------------------------------------------
     Pétalos flotantes ambientales (solo en el hero)
     ----------------------------------------------------------------- */
  function spawnPetals() {
    const host = document.querySelector(".hero-petals");
    if (!host) return;
    const count = window.innerWidth < 600 ? 8 : 14;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      const size = 6 + Math.random() * 8;
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.borderRadius = "60% 0 60% 0";
      petal.style.background = Math.random() > 0.5 ? "var(--c-gold-light)" : "var(--c-rose-soft)";
      petal.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 160}px`);
      petal.style.animationDuration = `${10 + Math.random() * 12}s`;
      petal.style.animationDelay = `${Math.random() * 10}s`;
      host.appendChild(petal);
    }
  }

  /* -----------------------------------------------------------------
     Revelado al hacer scroll (Intersection Observer)
     ----------------------------------------------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-scale, .grow-line");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => obs.observe(t));
  }

  /* -----------------------------------------------------------------
     Navbar: estado al hacer scroll + menú anclas
     ----------------------------------------------------------------- */
  function initNavbar() {
    const nav = document.getElementById("navbar");
    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initSmoothAnchors() {
    document.body.addEventListener("click", (e) => {
      const trigger = e.target.closest("a[href^='#'], .js-go-map");
      if (!trigger) return;
      const targetSel = trigger.dataset.target || trigger.getAttribute("href");
      if (!targetSel || targetSel === "#") return;
      const el = document.querySelector(targetSel);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  /* -----------------------------------------------------------------
     Galería: lightbox simple
     ----------------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    document.getElementById("gallery-wrap").addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      const img = item.querySelector("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest(".lightbox-close")) {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
      }
    });
  }

  /* -----------------------------------------------------------------
     RSVP: toggle de asistencia + envío por WhatsApp
     ----------------------------------------------------------------- */
  function initRSVP() {
    const form = document.getElementById("rsvp-form");
    if (!form) return;

    const options = form.querySelectorAll(".attendance-option");
    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        options.forEach((o) => o.classList.remove("is-active"));
        opt.classList.add("is-active");
        opt.querySelector("input").checked = true;
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const attending = form.querySelector("input[name='attending']:checked");
      const guests = form.elements.guests.value.trim();
      const message = form.elements.message.value.trim();

      if (!name || !attending) {
        form.elements.name.focus();
        return;
      }

      const lines = [
        `¡Hola! Soy *${name}* y quiero confirmar mi asistencia a la boda de ${cfg.couple.groomName} y ${cfg.couple.brideName}.`,
        `Asistencia: ${attending.value === "yes" ? "Sí, asistiré" : "No podré asistir"}`,
      ];
      if (attending.value === "yes" && guests) {
        lines.push(`Número de acompañantes: ${guests}`);
      }
      if (message) {
        lines.push(`Mensaje: ${message}`);
      }

      const text = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${text}`;
      window.open(url, "_blank", "noopener");
    });
  }

  /* -----------------------------------------------------------------
     Inicialización
     ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderQuoteAndIntro();
    renderParents();
    renderTimeline();
    renderGodparents();
    renderGallery();
    renderLocations();
    renderRSVPMeta();

    startCountdown();
    spawnPetals();
    initNavbar();
    initSmoothAnchors();
    initLightbox();
    initRSVP();

    // Reveal se inicializa al final, cuando todo el contenido dinámico ya existe en el DOM
    requestAnimationFrame(initScrollReveal);
  });
})();
