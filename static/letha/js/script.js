// Hamburger menu on mobile

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav");

hamburger.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
}

// Footer navigation on mobile
const categoriesToggle = document.querySelector(".footer__categories");
const footerNav = document.querySelector(".footer__nav--categories");
const arrowDownCat = document.querySelector(".arrowDownCat");

categoriesToggle.addEventListener("click", openFooterMenu);

function openFooterMenu() {
    footerNav.classList.toggle("open");
    arrowDownCat.classList.toggle("open");
}

const customerServiceToggle = document.querySelector(
    ".footer__customer-service"
);
const customerServiceNav = document.querySelector(
    ".footer__nav--customer-service"
);
const arrowDownCus = document.querySelector(".arrowDownCus");

customerServiceToggle.addEventListener("click", openCustomerMenu);

function openCustomerMenu() {
    customerServiceNav.classList.toggle("open");
    arrowDownCus.classList.toggle("open");
}

// Cart indicator

let cartAmount = localStorage.getItem("cartAmount") || 0;
const cartIndicator = document.querySelector(".cart__indicator");
const ping = document.querySelector(".cart__ping");

if (cartAmount > 0) {
    cartIndicator.classList.add("added");
}

cartIndicator.innerHTML = cartAmount;

// Set padding based on header height
bodyPadding();

window.addEventListener("resize", bodyPadding);

function bodyPadding() {
    const header = document.querySelector("header");
    let headerHeight = header.clientHeight;
    document.body.style.paddingTop = headerHeight + "px";
}
