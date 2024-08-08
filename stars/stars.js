// scripts.js

function createStars() {
  const smallStarsWrapper = document.getElementById("small-stars-wrapper");
  const mediumStarsWrapper = document.getElementById("medium-stars-wrapper");
  const largeStarsWrapper = document.getElementById("large-stars-wrapper");

  const starCount = Math.round(document.body.clientWidth / 1.9);
  const fragmentSmall = document.createDocumentFragment();
  const fragmentMedium = document.createDocumentFragment();
  const fragmentLarge = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * document.body.scrollHeight;
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}px`;

    if (size < 1) {
      star.classList.add("small-star");
      fragmentSmall.appendChild(star);
    } else if (size < 2) {
      star.classList.add("medium-star");
      fragmentMedium.appendChild(star);
    } else {
      star.classList.add("large-star");
      fragmentLarge.appendChild(star);
    }
  }

  smallStarsWrapper.appendChild(fragmentSmall);
  mediumStarsWrapper.appendChild(fragmentMedium);
  largeStarsWrapper.appendChild(fragmentLarge);

  console.log(`${starCount} stars generated!`);
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
  const smallStarsWrapper = document.getElementById("small-stars-wrapper");
  const mediumStarsWrapper = document.getElementById("medium-stars-wrapper");
  const largeStarsWrapper = document.getElementById("large-stars-wrapper");

  let smallStarsTop = parseFloat(getComputedStyle(smallStarsWrapper).top) || 0;
  let mediumStarsTop =
    parseFloat(getComputedStyle(mediumStarsWrapper).top) || 0;
  let largeStarsTop = parseFloat(getComputedStyle(largeStarsWrapper).top) || 0;

  smallStarsTop -= 0.05;
  mediumStarsTop -= 0.1;
  largeStarsTop -= 0.15;

  if (smallStarsTop < -document.body.scrollHeight)
    smallStarsTop = document.body.scrollHeight;
  if (mediumStarsTop < -document.body.scrollHeight)
    mediumStarsTop = document.body.scrollHeight;
  if (largeStarsTop < -document.body.scrollHeight)
    largeStarsTop = document.body.scrollHeight;

  smallStarsWrapper.style.top = `${smallStarsTop}px`;
  mediumStarsWrapper.style.top = `${mediumStarsTop}px`;
  largeStarsWrapper.style.top = `${largeStarsTop}px`;

  requestAnimationFrame(animateStars);
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

function handleScroll() {
  const scrollPosition = window.scrollY;

  const smallStarsWrapper = document.getElementById("small-stars-wrapper");
  const mediumStarsWrapper = document.getElementById("medium-stars-wrapper");
  const largeStarsWrapper = document.getElementById("large-stars-wrapper");

  smallStarsWrapper.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
  mediumStarsWrapper.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
  largeStarsWrapper.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
}

window.onload = function () {
  createStars();
  setInterval(createShootingStar, 2000);
  requestAnimationFrame(animateStars);
  window.addEventListener("scroll", throttle(handleScroll, 100));
};
