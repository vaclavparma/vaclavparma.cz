// stars/stars.js

function createStars() {
  const starsContainer = document.getElementById("stars-container");
  const starCount = 1000; // Zvýšený počet hvězd, aby pokryly celou výšku stránky

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.round(Math.random() * 3); // Zvýšení velikosti hvězdy o 1 pixel
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    if (size < 1) {
      star.classList.add("small-star");
    } else if (size < 2) {
      star.classList.add("medium-star");
    } else {
      star.classList.add("large-star");
    }

    const posX = Math.random() * 100;
    const posY = Math.random() * document.body.scrollHeight; // Generujeme hvězdy po celé výšce stránky
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}px`;

    starsContainer.appendChild(star);
  }
}

function createShootingStar() {
  const starsContainer = document.getElementById("stars-container");
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  shootingStar.style.left = `${posX}vw`;
  shootingStar.style.top = `${posY}vh`;

  const duration = 2 + Math.random() * 2;
  shootingStar.style.animationDuration = `${duration}s`;

  starsContainer.appendChild(shootingStar);

  shootingStar.addEventListener("animationend", () => {
    shootingStar.remove();
  });
}

function generateShootingStars() {
  setInterval(createShootingStar, 2000);
}
