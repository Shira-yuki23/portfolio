
/* =========================
   FLOATING STARS GENERATOR
========================= */


const starsContainer = document.querySelector(".stars");


function createStars() {

    if(!starsContainer) return;


    for(let i = 0; i < 80; i++) {


        const star = document.createElement("span");


        star.className = "star";


        star.style.left =
        Math.random() * 100 + "%";


        star.style.top =
        Math.random() * 100 + "%";


        star.style.animationDelay =
        Math.random() * 5 + "s";


        star.style.animationDuration =
        (3 + Math.random() * 5) + "s";


        starsContainer.appendChild(star);

    }

}


createStars();







/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const sections =
document.querySelectorAll(".section");



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},

{

threshold:0.15

}

);




sections.forEach(section=>{


    section.classList.add("hidden");


    observer.observe(section);


});








/* =========================
   CURSOR GLOW EFFECT
========================= */


const glow =
document.createElement("div");


glow.className =
"cursor-glow";


document.body.appendChild(glow);




document.addEventListener(
"mousemove",
(e)=>{


    glow.animate(

        {

        left:e.clientX+"px",

        top:e.clientY+"px"

        },

        {

        duration:500,

        fill:"forwards"

        }

    );


});








/* =========================
   BUTTON INTERACTION
========================= */


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(button=>{


    button.addEventListener(
    "mouseenter",
    ()=>{


        button.style.transform =
        "translateY(-5px) scale(1.05)";


    });



    button.addEventListener(
    "mouseleave",
    ()=>{


        button.style.transform =
        "translateY(0) scale(1)";


    });



});








/* =========================
   CARD FLOAT EFFECT
========================= */


const cards =
document.querySelectorAll(".glass-card");



cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    (e)=>{


        const rect =
        card.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;


        const rotateX =
        (y - rect.height/2) / 20;


        const rotateY =
        (rect.width/2 - x) / 20;



        card.style.transform =
        `perspective(600px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "translateY(0)";


    });


});








/* =========================
   IMAGE LAZY LOADING
========================= */


const images =
document.querySelectorAll("img");



images.forEach(image=>{

    image.loading="lazy";

});