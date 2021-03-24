import { getCartItems } from "../localStorage/storage.js";

// Update the cart badge to display number of items in cart
export default function updateCartBadge() {
	const cartBadge = document.querySelector(".cart-link__badge");

	let cartAmount = getCartItems();
	if (cartAmount.length === 0) {
		cartBadge.style.visibility = "hidden";
	} else {
		cartBadge.innerText = cartAmount.length;
		cartBadge.style.visibility = "visible";
	}
}
