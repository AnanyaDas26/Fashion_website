// Simple scroll animation for fade-in effect
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card, .payday-right, .payday-left,.fav-card, .download-left, .download-right");
  cards.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});


  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

