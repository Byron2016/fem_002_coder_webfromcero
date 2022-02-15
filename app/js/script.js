const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body"); //p3 22.00
const header = document.querySelector(".header"); //  p2 15.22
const overlay = document.querySelector(".overlay"); //  p2 26.23
const fadeElems = document.querySelectorAll(".has-fade"); //p3 16.33

btnHamburger.addEventListener("click", (e) => {
  if (header.classList.contains("open")) {
    // Close hanburger menu
    body.classList.remove("noscroll"); //p3 22.11
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      //p3 19.46
      element.classList.remove("fade-in"); //  p2 26.34
      element.classList.add("fade-out"); //  p2 26.34
    });
  } else {
    // Open hanburger menu
    body.classList.add("noscroll"); //p3 22.11
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      //p3 17.50
      element.classList.remove("fade-out"); //  p2 27.09
      element.classList.add("fade-in"); //  p2 26.34
    });
  }
});
