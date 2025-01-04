// Select all elements that need animation
const animatedElements = document.querySelectorAll
('.appear');

// Intersection Observer to detect visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add 'visible' class to trigger animation
        entry.target.classList.add('visible');
      } else {
        // Optional: Remove 'visible' class when out of view
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 1.0, // Fully in the viewport
  }
);

// Observe each element
animatedElements.forEach((el) => observer.observe(el));
