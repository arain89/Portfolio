// ==========================================
// FARHAN PORTFOLIO — INTERACTIONS
// ==========================================

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ==========================================
// CURSOR GLOW
// ==========================================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer:fine)").matches) {

  document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

  });

} else if (cursorGlow) {

  cursorGlow.style.display = "none";

}


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    navbar.style.background = "rgba(7, 7, 10, 0.92)";

  } else {

    navbar.style.background = "rgba(7, 7, 10, 0.72)";

  }

});


// ==========================================
// NAVIGATION ACTIVE EFFECT
// ==========================================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active-link");
    });

    link.classList.add("active-link");

  });

});


// ==========================================
// CARD 3D HOVER EFFECT
// ==========================================

const cards = document.querySelectorAll(
  ".project, .about-card, .service"
);

cards.forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -5;

    const rotateY =
      ((x / rect.width) - 0.5) * 5;

    card.style.transform =
      `perspective(700px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-5px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


// ==========================================
// CURRENT YEAR
// ==========================================

const footerText = document.querySelector("footer p");

if (footerText) {

  footerText.innerHTML =
    `© ${new Date().getFullYear()} Farhan. Built with passion & code.`;

}


// ==========================================
// DISABLE EMPTY PROJECT LINKS
// ==========================================

document
  .querySelectorAll('.project-info a[href="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

    });

  });


// ==========================================
// PAGE LOADED
// ==========================================

console.log(
  "Farhan Portfolio loaded successfully 🚀"
);