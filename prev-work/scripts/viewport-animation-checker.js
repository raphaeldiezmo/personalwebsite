// Reusable Scroll Animation Handler
function handleScrollAnimation(animationConfig) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationConfig.visibleClass);
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: animationConfig.threshold || 0.5, // Default to 50% visibility
    }
  );

  animationConfig.elements.forEach((el) => observer.observe(el));
}

// Initialize Animations
document.addEventListener("DOMContentLoaded", () => {
  handleScrollAnimation({
    elements: document.querySelectorAll(".appear", ".bottomToTop-text"), // Replace with your class
    visibleClass: "visible",
    threshold: 0.5,
  });
});
