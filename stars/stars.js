// stars/stars.js

function createStars() {
  const starsContainer = document.getElementById("stars-container");
  const starCount = 1000;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3;
    if (size < 1) {
      star.classList.add("small-star");
    } else if (size < 2) {
      star.classList.add("medium-star");
    } else {
      star.classList.add("large-star");
    }

    const posX = Math.random() * 100;
    const posY = Math.random() * document.body.scrollHeight;
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}px`;

    starsContainer.appendChild(star);
  }
}

function createShootingStar() {
  const starsContainer = document.getElementById("stars-container");
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const posX = Math.random() * 200;
  const posY = -Math.random() * 100;
  shootingStar.style.left = `${posX}vw`;
  shootingStar.style.top = `${posY}vh`;

  const duration = 2 + Math.random() * 3;
  shootingStar.style.animationDuration = `${duration}s`;

  starsContainer.appendChild(shootingStar);

  shootingStar.addEventListener("animationend", () => {
    shootingStar.remove();
  });
}

function animateStars() {
  const smallStars = document.querySelectorAll(".small-star");
  const mediumStars = document.querySelectorAll(".medium-star");
  const largeStars = document.querySelectorAll(".large-star");

  smallStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.05;
    if (top < 0) {
      top = document.body.scrollHeight;
    }
    star.style.top = `${top}px`;
  });

  mediumStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.1;
    if (top < 0) {
      top = document.body.scrollHeight;
    }
    star.style.top = `${top}px`;
  });

  largeStars.forEach((star) => {
    let top = parseFloat(star.style.top);
    top -= 0.15;
    if (top < 0) {
      top = document.body.scrollHeight;
    }
    star.style.top = `${top}px`;
  });

  requestAnimationFrame(animateStars);
}

let lastScrollPosition = 0;
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (Math.abs(scrollPosition - lastScrollPosition) < window.innerHeight / 20) {
    return;
  }
  lastScrollPosition = scrollPosition;

  const smallStars = document.querySelectorAll(".small-star");
  smallStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
  });

  const mediumStars = document.querySelectorAll(".medium-star");
  mediumStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.15}px)`;
  });

  const largeStars = document.querySelectorAll(".large-star");
  largeStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.25}px)`;
  });
});

window.onload = function () {
  createStars();
  setInterval(createShootingStar, 2000);
  animateStars();
};
