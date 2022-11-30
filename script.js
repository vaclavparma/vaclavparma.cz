
setInterval(() => {
    var startDate = new Date("2006/02/08");
    var diffDate = new Date(new Date() - startDate);
    my_age = (diffDate.toISOString().slice(0, 4) - 1970) + diffDate.getMonth()/12 + (diffDate.getDate()-1)/365 + diffDate.getHours()/8760 + diffDate.getMinutes()/525600 + diffDate.getSeconds()/31536000 + diffDate.getMilliseconds()/31536000000
    my_age = Math.round(my_age * 1000000000) / 1000000000
    my_age = my_age.toFixed(9)
    var element = document.getElementById("age");
    element.textContent = my_age;
}, 100);

underlined_is_on = true
underlined_old = "none"
function underline_menu(you_are_in){
    if(you_are_in == "start"){underlined = "main_page_id--off"}  //vypnuto
    else if(you_are_in == "about"){underlined = "about_id"}
    else if (you_are_in == "projects"){underlined = "projects_id"}
    else if (you_are_in == "kontakt"){underlined = "kontakt_id"}

    if (underlined == "main_page_id--off"){
        var element = document.getElementById("menu");
        element.style.background = "#1a263000"}
    else{
        var element = document.getElementById("menu");
        element.style.background = "#1a2630"}

    try{
        if (underlined_is_on){
        var element = document.getElementById(underlined_old);
        element.style.color = "#BCC8C6";
        element.style.borderBottom = "2px solid transparent";}}
    catch{}
    try{
        if (underlined_is_on){
        var element = document.getElementById(underlined);
        element.style.color = "#3185FC";
        element.style.borderBottom = "2px solid #3185FC";}}
    catch{}
    underlined_old = underlined
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            underline_menu(entry.target.id)
            entry.target.classList.add("show");
        }
        else{entry.target.classList.remove("show");}
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//Menu
const el = document.getElementById('menu');
function menu_off(){
    underlined_is_on = false
    try{
    var element = document.getElementById(underlined);
    element.style.color = "#BCC8C6";
    element.style.borderBottom = "2px solid transparent";}
    catch{}
};
function menu_on(){
    underlined_is_on = true
    try{
    var element = document.getElementById(underlined);
    element.style.color = "#3185FC";
    element.style.borderBottom = "2px solid #3185FC";}
    catch{}
};

//About
const about_el = document.getElementById('about_id');
about_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    about_el.style.color = "#3185FC"
});
about_el.addEventListener('mouseout', function handleMouseOut() {
    about_el.style.color = "#BCC8C6"
    menu_on()
});

//Projects
const projects_el = document.getElementById('projects_id');
projects_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    projects_el.style.color = "#3185FC"
});
projects_el.addEventListener('mouseout', function handleMouseOut() {
    projects_el.style.color = "#BCC8C6"
    menu_on()
});

//Kontakt
const kontakt_el = document.getElementById('kontakt_id');
kontakt_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    kontakt_el.style.color = "#3185FC"
});
kontakt_el.addEventListener('mouseout', function handleMouseOut() {
    kontakt_el.style.color = "#BCC8C6"
    menu_on()
});
