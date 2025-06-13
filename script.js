// Toggle menu mobile
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth', block: 'start'
    });
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});

// Validação simples de formulário
const form = document.getElementById('form-contato');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
  form.reset();
});
