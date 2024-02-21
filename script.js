setInterval(() => {
    const date_fix = 0.002819741;
    var startDate = new Date("2006/02/08");
    var diffDate = new Date(new Date() - startDate);
    my_age =
      diffDate.toISOString().slice(0, 4)
      - 1970 
      + diffDate.getMonth() / 12 
      + (diffDate.getDate() - 1) / 365.25 
      + diffDate.getHours() / 8760 
      + diffDate.getMinutes() / 525600 
      + diffDate.getSeconds() / 31536000 
      + diffDate.getMilliseconds() / 31536000000;
    my_age = Math.round((my_age - date_fix) * 1000000000) / 1000000000;
    my_age = my_age.toFixed(9);
    var element = document.getElementById("age");
    element.textContent = my_age;
}, 100);


function navbar() {
  const about = document.getElementById("about");
  const windowHeight = window.innerHeight;
  const elementTop = about.getBoundingClientRect().top;

  const navbar = document.getElementById("navbar");
  if (elementTop < windowHeight) {
    navbar.style.background = "rgb(7, 15, 23)";
  }
  else {
    navbar.style.background = "rgb(7, 15, 23, 0)";
  }
}

window.addEventListener("scroll", navbar);