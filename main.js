// main.js

window.onload = function () {
  createStars();
  setTimeout(generateShootingStars, 2000); // Zpoždění 2 sekundy pro padající hvězdy
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
    star.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
  });

  largeStars.forEach((star) => {
    star.style.transform = `translateY(${-scrollPosition * 0.15}px)`;
  });
});
