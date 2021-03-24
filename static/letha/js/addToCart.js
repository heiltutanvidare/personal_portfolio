// Add to cart animation
const addToCartBTN = document.querySelector(".btn--addToCart");

function removePing() {
    setTimeout(function () {
        ping.classList.remove("pinged");
    }, 450);
}

function addToCart() {
    cartIndicator.classList.add("added");
    cartAmount++;
    if (cartAmount > 1) {
        ping.classList.add("pinged");
        removePing();
    }
    cartIndicator.innerHTML = cartAmount;

    localStorage.setItem("cartAmount", cartAmount);
}

addToCartBTN.addEventListener("click", addToCart);
