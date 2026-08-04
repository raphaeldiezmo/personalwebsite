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
})();

