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

function sendMail(event) {
  if (event) event.preventDefault();

  const name = document.querySelector('[name="name"]').value.trim();
  const email = document.querySelector('[name="email"]').value.trim();
  const message = document.querySelector('[name="message"]').value.trim();

  const subject = encodeURIComponent("Nieuw bericht van je CV-site");
  const body = encodeURIComponent(`Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`);
  const recipient = "isaiahkoroma@hotmail.com";
  const cc = encodeURIComponent(email);

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}&cc=${cc}`;

  // Open user's email app
  console.log('test');
  window.location.href = mailtoLink;
}

