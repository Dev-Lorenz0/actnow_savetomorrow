// Caching the DOM
const header = document.getElementById("navbar");
const firstCloud = document.getElementById("firstCloud");
const form = document.querySelector(".form");
const p_response = document.querySelector(".responseHide");
const p_response1 = document.querySelector(".responseHide1");
const p_response2 = document.querySelector(".responseHide2");
p_response.style.visibility = "hidden";
p_response1.style.visibility = "hidden";
p_response2.style.visibility = "hidden";
const btn = document.querySelector("button");
const sectionBanner = document.querySelector("#section3");
const p1 = document.querySelector("#p");
const h1 = document.querySelector("#title3");

const sticky = header.offsetTop;
const banner = sectionBanner.offsetTop;
let bannerIsDone = 0;

window.onscroll = function() {addSticky()};

function addSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

form.addEventListener("submit", function (e) {
       e.preventDefault();
       btn.classList.toggle("is_active");
       p_response.classList.remove("responseHide");
       p_response.classList.add("response");
       p_response.style.visibility = "visible";
       p_response1.classList.remove("responseHide");
       p_response1.classList.add("response");
       p_response1.style.visibility = "visible";
       p_response2.classList.remove("responseHide");
       p_response2.classList.add("response");
       p_response2.style.visibility = "visible";
       setTimeout(function(){
    	 p_response.classList.remove("response");
       p_response1.classList.remove("response");
       p_response2.classList.remove("response");
   }, 4000);
});

setTimeout(function(){
   OpenBanner()
}, 6000);

function OpenBanner(){
   sectionBanner.classList.add("banner");
   h1.innerText = "Stop the excuses!"
   p1.innerText = "Is your planet too!"
   setTimeout(function(){
      sectionBanner.classList.remove("banner");
      h1.innerText = "How can we act?"
      p1.innerText = "The first thing that men can do to save an already wounded planet,is limit the plastic use. We need to find other ways to protect ourselves but not damaging the planet at the same time ,second of all is to acknowledge the risk of face masks and gloves,so that persons can limit their use in any way they can and fight against the problem by donating to different associations."
   }, 5000);
   setTimeout(function(){
      OpenBanner()
   }, 12000);
}

