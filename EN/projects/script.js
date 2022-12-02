
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

function OnClick(e){
    var d=document.createElement("div");
    d.className="OnClick";
    d.style.top=e.clientY+"px";
    d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}

document.addEventListener('click', OnClick);