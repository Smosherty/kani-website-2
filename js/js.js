function initialise() {
  const HEADER_ICON = document.getElementById("header-menu-show");
  HEADER_ICON.addEventListener("click", showSideMenu);

  const HEADER_ICON2 = document.getElementById("header-menu-hide")
  HEADER_ICON2.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.display = "block";
}

function hideSideMenu() {
  const SIDE_MENU2 = document.getElementById("side-menu");
  SIDE_MENU2.style.display = "none";
}

initialise();