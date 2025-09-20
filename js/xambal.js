// Menu toggle
(function(){
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  let open = false;
  toggle.addEventListener('click', ()=>{
    open = !open;
    if(open){
      nav.style.display='flex';
      nav.setAttribute('aria-hidden','false');
      toggle.innerText='✕';
    }else{
      nav.style.display='';
      nav.setAttribute('aria-hidden','true');
      toggle.innerText='☰';
    }
  });

  // Smooth scroll a secciones internas
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if(target){
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // cerrar menú en móvil
        if(open){
          nav.style.display='';
          nav.setAttribute('aria-hidden','true');
          toggle.innerText='☰';
          open=false;
        }
      }
    });
  });
})();

// script.js
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll(".card, .news-item").forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(term) ? "" : "none";
  });
});
