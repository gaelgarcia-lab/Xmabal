
/* FILE: script.js */
// Mobile nav toggle
(function(){
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  let open = false;
  toggle.addEventListener('click', ()=>{
    open = !open;
    if (open){
      nav.style.display = 'flex';
      nav.setAttribute('aria-hidden','false');
      toggle.innerText = '✕';
    } else {
      nav.style.display = '';
      nav.setAttribute('aria-hidden','true');
      toggle.innerText = '☰';
    }
  });

  // Smooth scroll for XAMBAL button
  document.getElementById('scrollXambal').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('xambal').scrollIntoView({behavior:'smooth',block:'center'});
  });

  // Simple contact form handler (no backend) — graceful feedback
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();
    if(!name||!email||!msg){
      alert('Por favor completa todos los campos.');
      return;
    }
    // Fake submit
    this.querySelector('button[type="submit"]').disabled = true;
    this.querySelector('button[type="submit"]').innerText = 'Enviando...';
    setTimeout(()=>{
      alert('Mensaje enviado. ¡Gracias!');
      this.reset();
      this.querySelector('button[type="submit"]').disabled = false;
      this.querySelector('button[type="submit"]').innerText = 'Enviar mensaje';
    },900);
  });
})();

// ==== MODAL "Conócenos" ====
const openAboutBtn = document.getElementById("openAbout");
const aboutModal = document.getElementById("aboutModal");
const closeAboutBtn = document.getElementById("closeAbout");

if (openAboutBtn && aboutModal && closeAboutBtn) {
  openAboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "block";
  });

  closeAboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });
}

// Modal del logo SVG
const logoSVG = document.getElementById("logoHeroSVG");
const logoModal = document.getElementById("logoModal");
const closeLogo = document.getElementById("closeLogoModal");

if (logoSVG && logoModal && closeLogo) {
  logoSVG.addEventListener("click", () => {
    logoModal.style.display = "block";
  });

  closeLogo.addEventListener("click", () => {
    logoModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === logoModal) {
      logoModal.style.display = "none";
    }
  });
}

// script.js
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll(".card, .news-item").forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(term) ? "" : "none";
  });
});
