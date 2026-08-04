/* ==========================================================================
   About Me — Raphael Di Ezmo
   Script module
   ========================================================================== */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     1. Mobile menu toggle
     ------------------------------------------------------------------ */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  function setMenu(open) {
    if (!menuToggle || !mobileNav) return;
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      setMenu(!mobileNav.classList.contains("is-open"));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ------------------------------------------------------------------
     2. Header scrolled state
     ------------------------------------------------------------------ */
  const header = document.querySelector(".site-header");

  const onHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onHeaderScroll, { passive: true });
  onHeaderScroll();

  /* ------------------------------------------------------------------
     3. Scroll reveal
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealElements.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i * 0.06, 0.5)}s`);
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     4. Typewriter effect
     ------------------------------------------------------------------ */
  const typewriterEl = document.querySelector(".typewriter");

  if (typewriterEl && !reducedMotion) {
    const words = JSON.parse(typewriterEl.dataset.words || "[]");
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const current = words[wordIndex];
      if (!current) return;

      if (!deleting) {
        charIndex++;
        typewriterEl.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
          deleting = true;
          setTimeout(type, 1600);
          return;
        }
        setTimeout(type, 70);
      } else {
        charIndex--;
        typewriterEl.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 40);
      }
    };

    type();
  }

  /* ------------------------------------------------------------------
     5. Infinite marquee duplication
     ------------------------------------------------------------------ */
  const marqueeTrack = document.querySelector(".marquee-track");

  if (marqueeTrack && !reducedMotion) {
    const words = Array.from(marqueeTrack.children);
    words.forEach((word) => {
      const clone = word.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      marqueeTrack.appendChild(clone);
    });
  }

  /* ------------------------------------------------------------------
     6. Animated counters
     ------------------------------------------------------------------ */
  const stats = document.querySelector(".stats-grid");

  if (stats) {
    const counters = stats.querySelectorAll(".stat-num");

    const animateCount = (el) => {
      const target = parseInt(el.dataset.count || "0", 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(eased * target)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    if (!reducedMotion && "IntersectionObserver" in window) {
      const statObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              counters.forEach(animateCount);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      statObserver.observe(stats);
    } else {
      counters.forEach((el) => {
        el.textContent = `${el.dataset.count || "0"}${el.dataset.suffix || ""}`;
      });
    }
  }
})();

