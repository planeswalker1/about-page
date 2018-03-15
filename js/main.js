function animateHamburgerMenu(svg) {
  svg.forEach(function(current, index) {
    current.classList.toggle('hamburger__rect--' + (index + 1));
  })
}

// hamburger svg
const hamburgerMenu = document.querySelector(".hamburger");
// mobile nav
const responsiveNav = document.querySelector(".responsive-nav");
// rects
const rects = hamburgerMenu.querySelectorAll(".hamburger__rect");
// click event listener on hamburger svg
hamburgerMenu.addEventListener("click", function () {
  responsiveNav.classList.toggle("menu-open");
  // animate hamburger svg
  animateHamburgerMenu(rects);
});
