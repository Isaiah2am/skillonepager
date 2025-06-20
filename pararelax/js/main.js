// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Contact form handler (mailto)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const message = form.querySelector('[name="message"]').value;
      const sendTo = form.querySelector('[name="send_to_mail"]').value;
      const subject = encodeURIComponent('Contactformulier van ' + name);
      const body = encodeURIComponent(`Naam: ${name}\nEmail: ${email}\nBericht: ${message}`);
      window.location.href = `mailto:${sendTo}?subject=${subject}&body=${body}`;
    });
  }
});
