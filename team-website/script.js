AOS.init({ duration: 1000, once: true });

// Contact form dummy handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We will contact you soon.');
});