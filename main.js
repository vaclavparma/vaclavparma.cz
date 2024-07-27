// main.js

window.onload = function () {
  createStars();
  generateShootingStars();
  animateStars();
};

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const smallStars = document.querySelectorAll(".small-star");
  const mediumStars = document.querySelectorAll(".medium-star");
  const largeStars = document.querySelectorAll(".large-star");

  smallStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
  });

  mediumStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.15}px)`;
  });

  largeStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.25}px)`;
  });
});

function animateStars() {
  const smallStars = document.querySelectorAll(".small-star");
  const mediumStars = document.querySelectorAll(".medium-star");
  const largeStars = document.querySelectorAll(".large-star");

  smallStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.05;
    if (top < 0) {
      top = window.innerHeight;
    }
    star.style.top = `${top}px`;
  });

  mediumStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.1;
    if (top < 0) {
      top = window.innerHeight;
    }
    star.style.top = `${top}px`;
  });

  largeStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.15;
    if (top < 0) {
      top = window.innerHeight;
    }
    star.style.top = `${top}px`;
  });

  requestAnimationFrame(animateStars);
}
