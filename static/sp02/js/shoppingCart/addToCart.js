import { getCartItems, saveToCart } from "../localStorage/storage.js";
import updateCartBadge from "./updateCartBadge.js";
import displayMessage from "../ui/displayMessage.js";
import removeHeaderMessage from "../ui/removeHeaderMessage.js";

export default function addToCart(product) {
	// Get existing items from local storage
	const cartItems = getCartItems();

	// Start with a qty of zero before checking if
	// the item is in the cart from earlier
	product.amountInCart = 0;

	// Check if items is in cart, and only increase amount
	// and not add the entire object again
	const productIsInCart = cartItems.find(function (item) {
		return item.id === product.id;
	});

	if (productIsInCart) {
		productIsInCart.amountInCart++;
		saveToCart(cartItems);
	} else {
		product.amountInCart++;
		cartItems.push(product);
		saveToCart(cartItems);
	}

	// Ensure the badge on the cart nav element updates
	updateCartBadge();

	// Display message that product was added
	displayMessage(
		"success",
		`Product was added to the <a href="cart.html">shopping cart</a> 🎉 `,
		".header-message-container"
	);

	// remove the massage after some time
	removeHeaderMessage();
}
