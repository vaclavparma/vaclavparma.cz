// stars/stars.js

// Funkce pro generování hvězd
function createStars() {
  const starsContainer = document.getElementById("stars-container");
  const starCount = 400; // Zvýšený počet hvězd

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Náhodně vyberte velikost hvězdy
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Náhodně vyberte pozici hvězdy
    const posX = Math.random() * 100;
    const posY = Math.random() * 300 - 150; // Generujeme některé hvězdy mimo spodní okraj obrazovky
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}vh`;

    // Náhodně nastavte trvání animace, čím menší hvězda, tím kratší animace
    const duration = 20 + Math.random() * 40; // Pomalejší pohyb
    star.style.animationDuration = `${duration}s`;

    starsContainer.appendChild(star);
  }
}

// Funkce pro generování jedné padající hvězdy
function createShootingStar() {
  const starsContainer = document.getElementById("stars-container");
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  // Náhodně vyberte počáteční pozici
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  shootingStar.style.left = `${posX}vw`;
  shootingStar.style.top = `${posY}vh`;

  // Náhodně nastavte dobu trvání animace
  const duration = 2 + Math.random() * 2; // Krátká doba trvání
  shootingStar.style.animationDuration = `${duration}s`;

  starsContainer.appendChild(shootingStar);

  // Odebrat hvězdu po dokončení animace
  shootingStar.addEventListener("animationend", () => {
    shootingStar.remove();
  });
}

// Funkce pro generování padajících hvězd v intervalech
function generateShootingStars() {
  setInterval(createShootingStar, 2000); // Generovat novou padající hvězdu každé 2 sekundy
}

// Inicializujte hvězdy při načtení stránky a začněte generovat padající hvězdy po 2 sekundách
window.onload = function () {
  createStars();
  setTimeout(generateShootingStars, 2000); // Zpoždění 2 sekundy pro padající hvězdy
};
