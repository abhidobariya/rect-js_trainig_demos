let menu = document.getElementById("menu");
let toggleBtn = document.getElementById("toggleBtn")
let initialState = false;

function toggleNav() {
  if (initialState == false) {
    initialState = true;
    menu.style.display = "none";
    toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    initialState = false;
    menu.style.display = "block";
    toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}
toggleNav();
