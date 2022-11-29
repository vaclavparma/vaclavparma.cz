
//Zpět button
const about_el = document.getElementById('zpet_id');
about_el.addEventListener('mouseover', function handleMouseOver() {
    about_el.style.textDecoration = "underline";
    about_el.style.color = "#3185FC"
});
about_el.addEventListener('mouseout', function handleMouseOut() {
    about_el.style.textDecoration = "none";
    about_el.style.color = "#BCC8C6"
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{entry.target.classList.remove("show");}
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));