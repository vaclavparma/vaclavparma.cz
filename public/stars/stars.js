// scripts.js

let animationRunning = true;

const getWrapper = (id) => document.getElementById(id);
const getComputedTop = (element) => parseFloat(getComputedStyle(element).top) || 0;

const starWrappers = {
  small: getWrapper("small-stars-wrapper"),
  medium: getWrapper("medium-stars-wrapper"),
  large: getWrapper("large-stars-wrapper"),
};

function createStar(size, posX, posY) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = `${posX}vw`;
  star.style.top = `${posY}px`;

  if (size < 1) star.classList.add("small-star");
  else if (size < 2) star.classList.add("medium-star");
  else star.classList.add("large-star");
  return star;
}

function generateStars() {
  const starCount = Math.round((document.body.clientWidth * document.body.scrollHeight) ** 0.5 / 2.25);
  const fragments = {
    small: document.createDocumentFragment(),
    medium: document.createDocumentFragment(),
    large: document.createDocumentFragment(),
  };

  for (let i = 0; i < starCount; i++) {
    const size = Math.random() * 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * document.body.scrollHeight;

    const star = createStar(size, posX, posY);
    if (size < 1) fragments.small.appendChild(star);
    else if (size < 2) fragments.medium.appendChild(star);
    else fragments.large.appendChild(star);
  }

  starWrappers.small.appendChild(fragments.small);
  starWrappers.medium.appendChild(fragments.medium);
  starWrappers.large.appendChild(fragments.large);

  console.log(`${starCount} stars generated!`);
}

function createShootingStar() {
  if (!animationRunning) return;
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const posX = Math.random() * 200;
  const posY = -Math.random() * 100;
  shootingStar.style.left = `${posX}vw`;
  shootingStar.style.top = `${posY}vh`;

  const duration = 2 + Math.random() * 3;
  shootingStar.style.animationDuration = `${duration}s`;

  getWrapper("stars-container").appendChild(shootingStar);
  shootingStar.addEventListener("animationend", () => shootingStar.remove());
}

function moveStars() {
  ["small", "medium", "large"].forEach((size, index) => {
    let top = getComputedTop(starWrappers[size]);
    top -= 0.05 * (index + 1);
    if (top < -document.body.scrollHeight) top = document.body.scrollHeight;
    starWrappers[size].style.top = `${top}px`;
  });
  if (animationRunning) requestAnimationFrame(moveStars);
}

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (Math.abs(scrollPosition - window.lastScrollPosition) < window.innerHeight / 25) return;
  window.lastScrollPosition = scrollPosition;

  starWrappers.small.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
  starWrappers.medium.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
  starWrappers.large.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
}

function resetStarPositions() {
  ["small", "medium", "large"].forEach((size) => {
    const stars = document.querySelectorAll(`.${size}-star`);
    stars.forEach((star) => {
      const top = parseFloat(star.style.top) || 0;
      if (top < 0) {
        star.style.top = `${top + document.body.scrollHeight}px`;
      }
    });
  });
}

function toggleAnimations(state) {
  animationRunning = state;
  if (state) {
    requestAnimationFrame(moveStars);
    setInterval(createShootingStar, 2000);
    setInterval(resetStarPositions, 5000);
  }
}

window.onload = function () {
  generateStars();
  toggleAnimations(true);
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("visibilitychange", () => toggleAnimations(!document.hidden));
};
