// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

let elemC = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixedImg");
let elems = document.querySelectorAll(".elem");

elemC.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});

elems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let img = e.getAttribute("data-img");
    fixed.style.backgroundImage = `url(${img})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
});