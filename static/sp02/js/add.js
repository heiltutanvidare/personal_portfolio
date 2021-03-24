import commonUI from "./ui/commonUI.js";
import displayMessage from "./ui/displayMessage.js";
import { getToken } from "./localStorage/storage.js";
import { addProduct } from "./api/data/addProduct.js";
import validateInput from "./forms/validateInput.js";
import validateLength from "./forms/validateLength.js";
import shakeForm from "./forms/shakeForm.js";

// Select the message container
const message = document.querySelector(".message-container");

// Apply common UI elements
commonUI();

// Enable breadcrumb navigation
const breadcrumbsContainer = document.querySelector(".breadcrumbs");
breadcrumbsContainer.innerHTML = `
    <a href="index.html">Home</a>
    <p>></p>
    <a href="products.html">Products</a>
    <p>></p>
    <p>Add new product</p>
  `;

// Check if user is logged inn and
// return to index.html if not
const token = getToken();
if (!token.length > 0) {
	document.location.href = "index.html";
}

// Enable exit button
const exitBtn = document.querySelector("#exitButton");
exitBtn.addEventListener("click", () => {
	document.location.href = "index.html";
});

// Select loader and hide it
const loader = document.querySelector(".loader");
loader.style.display = "none";

// Select the form
const newProductForm = document.querySelector(".new-product__form");

// Select the input fields
const title = newProductForm.querySelector("#title");
const price = newProductForm.querySelector("#price");
const description = newProductForm.querySelector("#description");
const featured = newProductForm.querySelector("#featured").checked;

// Start with unvalid inputs, and check when submitting form
let titleIsValid = false;
let priceIsValid = false;
let descriptionIsValid = false;
let imageIsValid = false;

// Eventlistener that checks if the fields are invalid
title.addEventListener("keyup", (e) => {
	validateInput(e.target.value.trim(), 1, "title");
});

price.addEventListener("keyup", (e) => {
	validateInput(e.target.value.trim(), 1, "price");
});

description.addEventListener("keyup", (e) => {
	validateInput(e.target.value.trim(), 4, "description");
});

// Handle input of file select
let imageToUpload = "";
const imageMsg = newProductForm.querySelector(".image-message");

newProductForm
	.querySelector("#imageInput")
	.addEventListener("change", (event) => {
		imageToUpload = event.target;
		imageIsValid = true;
		imageMsg.innerHTML = "";
		message.innerHTML = "";
	});

// Submit the form to upate the product
newProductForm.addEventListener("submit", (e) => {
	e.preventDefault();
	message.innerHTML = "";

	titleIsValid = validateLength(title.value, 1) ? true : false;
	if (!titleIsValid) {
		displayMessage("error", "Please enter a title", ".title-message");
	}
	priceIsValid = validateLength(price.value, 1) ? true : false;
	if (!priceIsValid) {
		displayMessage("error", "Please enter a price", ".price-message");
	}
	descriptionIsValid = validateLength(description.value, 4) ? true : false;
	if (!descriptionIsValid) {
		displayMessage(
			"error",
			"Please enter a description",
			".description-message"
		);
	}
	if (!imageIsValid) {
		displayMessage("error", "Please select an image", ".image-message");
	}

	// Check if all inputs are valid and inform the
	// user via messages of what might be missing
	if (titleIsValid && priceIsValid && descriptionIsValid && imageIsValid) {
		addProduct(
			title.value,
			price.value,
			description.value,
			featured,
			imageToUpload
		);
	} else {
		displayMessage(
			"warning",
			`The product is missing:
			${!titleIsValid ? "&#8226; title" : ""}
			${!priceIsValid ? "&#8226; price" : ""}
			${!descriptionIsValid ? "&#8226; description" : ""}
			${!imageIsValid ? "&#8226; image" : ""}
				`,
			".message-container"
		);
		shakeForm();
	}
});
