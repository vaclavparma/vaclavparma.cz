setInterval(() => {
    const date_fix = 0.002819741;
    const startDate = new Date("2006/02/08");
    const diffDate = new Date(new Date() - startDate);
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
    const element = document.getElementById("age");
    element.textContent = my_age;
}, 100);



const speed = 100;
let txt = '';
let i = 0;
let wordCounter = 1;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text-animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = (event) => {
  const element = document.getElementById("text-animation");
  const words = element.textContent.split(', ')
  element.textContent = words[0];
  
  setTimeout(() => {
    txt = "";
    i = 0;
    element.textContent = "";
  }, 2250);

  setInterval(() => {
    const element = document.getElementById("text-animation");
    if (words.length != 0) {
      if (wordCounter == words.length) {
        wordCounter = 0;
      }
      txt = words[wordCounter];
      wordCounter++;
      typeWriter();
      setTimeout(() => {
        txt = "";
        i = 0;
        element.textContent = "";
      }, 2250);
    } 
  }, 2500);
};



let underlined = "";
let underlined_old = "";
function underline_menu(you_are_in) {
  if (you_are_in == "experiences") {
    underlined = "experiences-menu-button";
  } else if (you_are_in == "projects") {
    underlined = "projects-menu-button";
  } else if (you_are_in == "cv") {
    underlined = "cv-menu-button";
  } else {
    underlined = "";
  }

  try {
    const element = document.getElementById(underlined_old);
    element.classList.remove("link-hover");
  } catch {}
  try {
    const element = document.getElementById(underlined);
    element.classList.add("link-hover");
  } catch {}
  underlined_old = underlined;
}

window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".scroll-tracker");
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;
  
    if (elementTop < windowHeight - elementVisible) {
      underline_menu(reveals[i].id);
    }
  }
});