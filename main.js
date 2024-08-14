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

  setInterval(() => {
    const date_fix = 0.002819741;
    const startDate = new Date("2006/02/08");
    const diffDate = new Date(new Date() - startDate);
    my_age =
      diffDate.toISOString().slice(0, 4) -
      1970 +
      diffDate.getMonth() / 12 +
      (diffDate.getDate() - 1) / 365.25 +
      diffDate.getHours() / 8760 +
      diffDate.getMinutes() / 525600 +
      diffDate.getSeconds() / 31536000 +
      diffDate.getMilliseconds() / 31536000000;
    my_age = Math.round((my_age - date_fix) * 10000000000) / 10000000000;
    my_age = my_age.toFixed(10);
    const element = document.getElementById("age");
    element.textContent = my_age;
  }, 100);
});
