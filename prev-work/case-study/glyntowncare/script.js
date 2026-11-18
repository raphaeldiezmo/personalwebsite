/* ==========================================================================
   Glyntown Care Centre — Case Study
   Clean script module
   ========================================================================== */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     1. Header scrolled state
     ------------------------------------------------------------------ */
  const header = document.querySelector(".site-header");

  const onHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onHeaderScroll, { passive: true });
  onHeaderScroll();

  /* ------------------------------------------------------------------
     2. Scroll reveal
     ------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealElements.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i * 0.06, 0.5)}s`);
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     3. Infinite carousel duplication
     ------------------------------------------------------------------ */
  const carouselTrack = document.querySelector(".carousel-track");

  if (carouselTrack && !reducedMotion) {
    const slides = Array.from(carouselTrack.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      carouselTrack.appendChild(clone);
    });
  }

  /* ------------------------------------------------------------------
     4. Lightbox — click a screenshot to view it large, X to close
     ------------------------------------------------------------------ */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");

  const isLightboxOpen = () => lightbox.classList.contains("is-open");

  const openLightbox = (slide) => {
    if (!lightbox || !slide) return;

    const img = slide.querySelector("img");
    if (!img) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = slide.dataset.caption || img.alt;

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    if (!isLightboxOpen()) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    // Reset after the fade-out transition completes
    window.setTimeout(() => {
      if (!isLightboxOpen()) {
        lightboxImg.src = "";
        lightboxImg.alt = "";
        lightboxCaption.textContent = "";
      }
    }, 300);

    document.body.style.overflow = "";
  };

  // Open when any carousel slide (original or clone) is clicked
  const allSlides = document.querySelectorAll(".carousel-slide");
  allSlides.forEach((slide) => {
    slide.setAttribute("tabindex", "0");
    slide.setAttribute("role", "button");
    slide.addEventListener("click", () => openLightbox(slide));
    slide.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(slide);
      }
    });
  });

  // Close via X button
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  // Close via backdrop click
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Close via Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isLightboxOpen()) {
      closeLightbox();
    }
  });
})();

