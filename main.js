// main.js

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollArrow = document.getElementById("scroll-arrow");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 0.05) {
      scrollArrow.style.opacity = 0;
    }
  });
});
