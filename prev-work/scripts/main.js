/* ==========================================================================
   Raphael Di Ezmo — Personal Website
   Consolidated script module
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

    // Close menu when a link inside it is clicked
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    // Close on Escape
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
      // Stagger children inside a group via a CSS custom property
      el.style.setProperty("--reveal-delay", `${Math.min(i * 0.06, 0.5)}s`);
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     4. Infinite marquee duplication
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
     6. Active nav link highlighting
     ------------------------------------------------------------------ */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => navObserver.observe(section));
  }
})();

