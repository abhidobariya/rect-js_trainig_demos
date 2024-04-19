document.getElementById("default").click();

function toggleNav(pageName) {
  let container = document.getElementsByClassName("container");
  let navLink = document.getElementsByClassName("navLink");
  for (let init = 0; init < container.length; init++) {
    container[init].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";

  for (let init = 0; init < navLink.length; init++) {
    navLink[init].style.color = "black";
  }
  document.querySelector(`[onclick="toggleNav('${pageName}')"]`).style.color =
    "red";
}