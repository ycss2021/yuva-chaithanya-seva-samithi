// Reveal Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.style.opacity="1";
sec.style.transform="translateY(0)";

}

});

});


// Counter Animation

const counters=document.querySelectorAll(".impact-box h3");

let started=false;

window.addEventListener("scroll",()=>{

const impact=document.querySelector(".impact");

if(!impact)return;

if(impact.getBoundingClientRect().top<window.innerHeight && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText.replace(/,/g,""));

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target.toLocaleString()+"+";

}else{

counter.innerText=count.toLocaleString()+"+";

requestAnimationFrame(update);

}

};

update();

});

}

});
let topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("scroll", () => {
if (document.documentElement.scrollTop > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

var pressIndex = 0;

showPressSlides();

function showPressSlides() {

  var i;
  var slides = document.getElementsByClassName("pressSlide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  pressIndex++;

  if (pressIndex > slides.length) {
    pressIndex = 1;
  }

  slides[pressIndex - 1].style.display = "block";

  setTimeout(showPressSlides, 3000);
}
document.addEventListener("DOMContentLoaded", function () {

    const wa = document.querySelector(".whatsapp-float");

    if (wa) {
        wa.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            <span>Chat with YCSS</span>
        `;

        wa.href = "https://wa.me/919553946444?text=Hello%20YCSS%20NGO";
        wa.title = "Chat with YCSS";
    }

});
