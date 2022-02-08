const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header"); //  p2 15.22
const overlay = document.querySelector(".overlay"); //  p2 26.23

btnHamburger.addEventListener("click", (e) => {
  if (header.classList.contains("open")) {
    // Close hanburger menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in"); //  p2 26.34
    overlay.classList.add("fade-out"); //  p2 26.34
  } else {
    // Open hanburger menu
    header.classList.add("open");
    overlay.classList.remove("fade-out"); //  p2 27.09
    overlay.classList.add("fade-in"); //  p2 26.34
  }
});
