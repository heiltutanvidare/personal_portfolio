import calculateItemPrice from "./calculateItemPrice.js";
import deleteItemFromCart from "./deleteItemFromCart.js";
import displayCartTotal from "./displayCartTotal.js";

const emptyCartMsg = document.querySelector(".empty-cart-message");
emptyCartMsg.style.display = "none";

export default function displayCartItems(cartItems) {
	const itemsContainer = document.querySelector(".cart__items");
	let html = "";
	let totalPrice = 0;

	// Display message if none are stored
	if (cartItems.length < 1) {
		emptyCartMsg.style.display = "block";
		itemsContainer.innerHTML = "";
	} else {
		// Display items if found in storage

		cartItems.forEach((item) => {
			totalPrice += calculateItemPrice(item.amountInCart, item.price);
			html += `
			<div class="cart__item">
				<a href="details.html?id=${item.id}">
					<img src="${item.image.url}" alt="${item.title}" class="cart__item__image"/>
				</a>
				<div class="cart__item__details">
        	<a href="details.html?id=${item.id}" class="cart__item__title">${item.title}</a>
					<div class="cart__item__details__price-qty">
						<p class="cart__item__price">Price <span>$${item.price}</span></p>
        		<p class="cart__item__amount">Qty: <span>${item.amountInCart}</span></p>
					</div>
				</div>
				<input
				type="image"
				src="img/graphics/trash-alt-solid.svg"
				alt="Remove item from shopping cart"
				class="cart__item__delete"
				data-id="${item.id}"
				/>
      </div>
    `;
		});

		itemsContainer.innerHTML = html;

		// Enable function to delete item from cart
		deleteItemFromCart();
	}
	displayCartTotal(totalPrice);
}
