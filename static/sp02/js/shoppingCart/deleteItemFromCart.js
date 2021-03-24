import { getCartItems, saveToCart } from "../localStorage/storage.js";
import displayCartItems from "./displayCartItems.js";
import updateCartBadge from "./updateCartBadge.js";

export default function deleteItemFromCart() {
	const deleteButtons = document.querySelectorAll(".cart__item__delete");

	deleteButtons.forEach((deleteButton) => {
		deleteButton.addEventListener("click", (e) => {
			// Get the items currently in the cart
			const CurrentCartItems = getCartItems();

			// Get the ID stored in the data atr of the delete button
			const productId = parseInt(e.target.dataset.id);

			// Filter out the item that matches the id
			const newCartItems = CurrentCartItems.filter(function (item) {
				if (item.id !== productId) {
					return true;
				}
			});

			// save the new array of items to local storage
			saveToCart(newCartItems);

			// display the new array
			displayCartItems(newCartItems);

			// Update the cart badge
			updateCartBadge();
		});
	});
}
