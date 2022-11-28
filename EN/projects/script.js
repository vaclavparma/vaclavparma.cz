
function fix_scroll(){
    window.scrollTo(0, 0);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
            fix_scroll()}
        else{entry.target.classList.remove("show");}
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));