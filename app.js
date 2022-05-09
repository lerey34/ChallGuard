const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const themeToggler = document.querySelector(".theme-toggler");
const dateDay = document.querySelector(".date-day");
const logo = document.querySelector(".img");
const accueil = document.getElementById("accueil");
const chal = document.getElementById("chal");
const param = document.getElementById("parametre");

const accueilPage = document.getElementById("accueil-page");
const chalPage = document.getElementById("challenge-page");
const paramPage = document.getElementById("parametre-page");

const url = document.getElementById("url");
const token = document.getElementById("token");
const login = document.getElementById("login");
const txtUrl = document.getElementById("txt-url");
const txtToken = document.getElementById("txt-token");
const formLogin = document.getElementById("formLogin");
const txtLogin = document.getElementById("txtLogin");

let u;
let t;
var bool = true;

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  bool = !bool;
  if (bool) {
    logo.src = "./images/challguard.png";
  } else {
    logo.src = "./images/challguard_d.png";
  }
});

const time = new Date();
const day = time.getDay();
const month = time.getMonth();
const year = time.getFullYear();

const date = day + "/" + month + "/" + year;
dateDay.value = date;

accueil.addEventListener("click", () => {
  console.log("test");
  var current = document.querySelector(".active-side");
  current.classList.remove("active-side");
  accueil.classList.add("active-side");

  var currentPage = document.querySelector(".active-page");
  currentPage.classList.remove("active-page");
  currentPage.classList.add("no-active-page");
  accueilPage.classList.remove("no-active-page");
  accueilPage.classList.add("active-page");
});

chal.addEventListener("click", () => {
  console.log("test");
  var current = document.querySelector(".active-side");
  current.classList.remove("active-side");
  chal.classList.add("active-side");

  var currentPage = document.querySelector(".active-page");
  currentPage.classList.remove("active-page");
  currentPage.classList.add("no-active-page");
  chalPage.classList.remove("no-active-page");
  chalPage.classList.add("active-page");
});

param.addEventListener("click", () => {
  console.log("test");
  var current = document.querySelector(".active-side");
  current.classList.remove("active-side");
  param.classList.add("active-side");

  var currentPage = document.querySelector(".active-page");
  currentPage.classList.remove("active-page");
  currentPage.classList.add("no-active-page");
  paramPage.classList.remove("no-active-page");
  paramPage.classList.add("active-page");
});

login.addEventListener("click", () => {
  u = url.value;
  t = token.value;
  formLogin.classList.remove("activ-param");
  formLogin.classList.add("dis-param");
  txtLogin.classList.remove("dis-param");
  txtLogin.classList.add("activ-param");
  txtUrl.innerHTML = "URL : " + u;
  txtToken.innerHTML = "TOKEN : " + t;
});

const openModalButon = document.querySelectorAll("[data-modal-target]");
const closeModalButon = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButon.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButon.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
