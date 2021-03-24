// Shopping cart
const cartHeading = document.querySelector(".cart__title");
const cartItem = document.querySelector(".cart__item");
const checkOut = document.querySelector("#checkout");
const quantity = document.querySelector("#productQuantity");
const checkoutMessage = document.querySelector(".checkoutMessage");

cartAmount = localStorage.getItem("cartAmount") || 0;

if (cartAmount <= 0) {
    cartHeading.innerText = "No items yet 😢";
    cartItem.style.display = "none";
    checkout.style.display = "none";
} else {
    cartHeading.innerText = "Your items 😎";
    cartItem.style.display = "";
    checkout.style.display = "";
}

quantity.innerHTML = cartAmount;

checkOut.addEventListener("click", function () {
    checkoutMessage.classList.add("checkedOut");
});
