const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => {
//     n.addEventListener("click", closeMenu);
// });


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// const navLink = document.querySelector(".nav-link");

// navLink.forEach(n => n.addEventListener("click" , closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}