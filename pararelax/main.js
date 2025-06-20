// Intersection Observer for animating sections/articles on view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('section, article').forEach(el => {
  observer.observe(el);
});
