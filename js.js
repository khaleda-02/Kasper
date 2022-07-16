let rAngle = document.querySelector(".right-angle");
let lAngle = document.querySelector(".left-angle");
let main = document.querySelector(".main");
let ulActive = document.querySelector(".main ul");
let liActive = document.querySelectorAll(".main ul li");
let i = 1;
let imgs = ["ass/mexico1.png", "ass/viking.png", "ass/BACKGROUND.png"];
rAngle.onclick = function () {
  if (i == 2) {
    liActive[i].classList.remove("active");
    i = 0;
  } else {
    liActive[i].classList.remove("active");
    i++;
  }
  main.style.backgroundImage = "url(" + imgs[i] + ")";
  liActive[i].classList.add("active");
};
lAngle.onclick = function () {
  if (i == 0) {
    liActive[i].classList.remove("active");
    i = 2;
  } else {
    liActive[i].classList.remove("active");
    i--;
  }
  main.style.backgroundImage = "url(" + imgs[i] + ")";
  liActive[i].classList.add("active");
};

// top, cunter, services,featuer, kills, testimoials and quot
let sec = document.querySelector("#sec");
let head = document.querySelectorAll(".abuot-us .status .info h1");
let btn = document.querySelector("#top-btn");
let serContainer = document.querySelector("#serContainer");
let infoDiv = document.querySelector(".features .info ");
let imgDiv = document.querySelector(".feature-img-div");
let testimoials = document.querySelector(".testimoials");
let skills = document.querySelector(".skills");
let quot = document.querySelector(".quot .container");

let bol = true;
function increase(el) {
  let pro = el.dataset.pro;
  let cunter = setInterval(function () {
    el.innerHTML++;
    if (el.innerHTML == pro) {
      clearInterval(cunter);
    }
  }, 3000 / pro);
}

window.onscroll = function () {
  console.log(scrollY);
  // cunter
  if (window.scrollY >= 4892) {
    console.log("scrollY");
    if (bol == true) {
      for (let i = 0; i < head.length; i++) {
        increase(head[i]);
      }
      bol = false;
    }
  }
  //top
  if (scrollY >= 1000) {
    btn.classList.add("show");
    btn.onclick = function () {
      window.scrollTo(0, 0);
    };
  } else {
    btn.classList.remove("show");
  }
  // services
  if (scrollY >= 239) {
    serContainer.classList.add("up");
  }
  // featuer
  if (scrollY >= 907) {
    infoDiv.style.right = "0";
    imgDiv.style.transform = " translateX(0%)";
  }
  // skills and testimoials
  if (scrollY >= 5108) {
    testimoials.style.transform = " translateX(0%)";
    skills.style.transform = " translateX(0%)";
  }
  // quot
  if (scrollY >= 5862) {
    quot.classList.add("up");
  }
};

// slide
let text = document.querySelector(".text");
window.onload = function () {
  text.classList.add("slide");
};
