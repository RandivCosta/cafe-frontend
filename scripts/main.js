//copy menu for mobile menu
function copyMenu() {
  // copy inside header nav to mobile nav
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// show mobile menu on mobile devices
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addclass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});


