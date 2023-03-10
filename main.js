const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const contactNav = document.getElementById("contactNav");

function hideViews() {
  home.classList.add("hide");
  contact.classList.add("hide");
  about.classList.add("hide");
}

function goAbout() {
  hideViews();
  about.classList.remove("hide");
}

function goHome() {
  hideViews();
  home.classList.remove("hide");
}

function goContact() {
  hideViews();
  contact.classList.remove("hide");
}

aboutNav.addEventListener("click", goAbout);
homeNav.addEventListener("click", goHome);
contactNav.addEventListener("click", goContact);
