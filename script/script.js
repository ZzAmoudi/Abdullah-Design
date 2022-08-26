// Start Header Script

let sidebarMenue = document.querySelector(".sidebar-menu");
let sidebarOverlay = document.querySelector(".sidebar-overlay");
let closeH = document.querySelector(".close");
let iconParent = document.querySelector(".click");
let urls = document.querySelectorAll(".sidebar-menu nav a");
let menuBtn = document.querySelector(".menu-lines");
let fakeX = document.querySelector(".fake-x");

// ⬇ executed when user "click" menu button
function open() {
  sidebarMenue.style.transform = "translateX(0)";
  sidebarOverlay.style.visibility = "visible";
  sidebarMenue.style.visibility = "visible";
  sidebarOverlay.style.opacity = "1";
  iconParent.style.backgroundColor = "transparent";
  menuBtn.classList.add("open");
  fakeX.style.zIndex = "16";
}

// ⬇ executed when user want to "Close" the menu
function close() {
  fakeX.style.zIndex = null;
  sidebarMenue.style.transform = null;
  menuBtn.style.display = null;
  sidebarOverlay.style.visibility = null;
  sidebarOverlay.style.opacity = null;
  sidebarMenue.style.visibility = null;
  iconParent.style.backgroundColor = null;
  menuBtn.classList.remove("open");
}

menuBtn.onclick = open;
fakeX.onclick = close;
sidebarOverlay.onclick = close;

// ⬇ give "active" to clicked list & execute "close" ⬇

var links = document.getElementsByClassName("btn");
var current = document.getElementsByClassName("active");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";

    // ⬇ Add closed function in clicking ⬇
    close();
  });
}

// End Header Script
