//   Cambio de tema claro - oscuro
// ======================================
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const body = document.body;

const setTheme = (theme) => {
  html.setAttribute("data-theme", theme);
  html.style.colorScheme = theme;
  toggle.textContent = theme === "dark" ? "☀️" : '🌗';
  localStorage.setItem('theme', theme); //#
};

const savedTheme = localStorage.getItem('theme');// || "light"; //#º
setTheme(savedTheme);

toggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
  //html.style.colorScheme = theme;
});

//  Gestion de boton flotante 
// ======================================
const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnTop.classList.add('show');
  } else {
    btnTop.classList.remove('show');
  }
});
btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ======================================
// Gestión del menú
// ======================================
// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");
// const overlay = document.getElementById("overlay");
// 
// function closeMenu() {
//   menuToggle.classList.remove("active");
//   navLinks.classList.remove("active");
//   overlay.classList.remove("active");
// }
// 
// menuToggle.addEventListener("click", () => {
//   menuToggle.classList.toggle("active");
//   navLinks.classList.toggle("active");
//   overlay.classList.toggle("active");
// });
// 
// overlay.addEventListener("click", closeMenu);
// 
// // Cerrar al pulsar un enlace
// document.querySelectorAll(".nav-links a").forEach(link => {
//   link.addEventListener("click", closeMenu);
// });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fade-in tarjetas
// ======================================
const cards = document.querySelectorAll('.gallery-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeInUp');
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
cards.forEach(card => observer.observe(card));

// Lightbox
// ======================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    lightboxImg.src = card.dataset.src;
    lightboxImg.alt = card.dataset.alt;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
        lightboxImg.src = card.dataset.src;
        lightboxImg.alt = card.dataset.alt;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
