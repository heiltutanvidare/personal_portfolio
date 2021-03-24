export default function displayCartTotal(totalPrice) {
	// Display the total price of the items
	// if the sum is greater than zero
	let roundedTotalPrice = parseFloat(totalPrice).toFixed(2);
	const totalPriceContainer = document.querySelector(".cart__total");

	if (totalPrice === 0) {
		totalPriceContainer.innerHTML = "";
	} else {
		totalPriceContainer.innerHTML = `Total Price: <span>$${roundedTotalPrice}</span>`;
	}
}
