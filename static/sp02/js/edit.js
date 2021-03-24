import commonUI from "./ui/commonUI.js";
import { getToken } from "./localStorage/storage.js";
import { getApiData } from "./api/data/getApiData.js";
import displayMessage from "./ui/displayMessage.js";
import { deleteProduct } from "./api/data/deleteProduct.js";
import validateInput from "./forms/validateInput.js";
import validateLength from "./forms/validateLength.js";
import shakeForm from "./forms/shakeForm.js";
import { updateProduct } from "./api/data/updateProduct.js";

// Select the message container
const message = document.querySelector(".message-container");

// Selec and hide loader
const loader = document.querySelector(".loader");
loader.style.display = "none";

// Apply common UI elements
commonUI();

// Check if user is logged in and
// get ID of product from URL, and
// return to home if no ID is found
const token = getToken();
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
console.log(token);

if (token.length === 0 || !productId) {
	document.location.href = "index.html";
}

// Select the form
const editForm = document.querySelector(".edit__form");

// Handle input of file select
let imageToUpload = "";
editForm.querySelector("#imageInput").addEventListener("change", (event) => {
	imageToUpload = event.target.files;
});

// Function to fill inn the form details based
// on what product the user wants to edit
async function formDetails() {
	const product = await getApiData(`/products/${productId}`);

	// Handle missing image
	let imageId;
	if (product.image) {
		imageId = product.image.id;
	}

	// Enable breadcrumb navigation
	const breadcrumbsContainer = document.querySelector(".breadcrumbs");
	breadcrumbsContainer.innerHTML = `
    <a href="index.html">Home</a>
    <p>></p>
    <a href="products.html">Products</a>
    <p>></p>
    <a href="details.html?id=${product.id}">${product.title}</a>
    <p>></p>
    <p>Editing ${product.title}</p>
  `;

	// Fill out the form with
	// initial information from api
	const title = editForm.querySelector("#title");
	const price = editForm.querySelector("#price");
	const description = editForm.querySelector("#description");
	const featured = editForm.querySelector("#featured");

	title.value = product.title;
	price.value = product.price;
	description.value = product.description;
	featured.checked = product.featured;

	// Start with unvalid inputs, and check when submitting form
	let titleIsValid = false;
	let priceIsValid = false;
	let descriptionIsValid = false;

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

	// Submit the form to upate the product
	editForm.addEventListener("submit", (e) => {
		e.preventDefault();
		message.innerHTML = "";

		titleIsValid = validateLength(title.value, 1) ? true : false;
		priceIsValid = validateLength(price.value, 1) ? true : false;
		descriptionIsValid = validateLength(description.value, 4)
			? true
			: false;

		// Check if all inputs are valid and inform the
		// user via messages of what might be missing
		if (titleIsValid && priceIsValid && descriptionIsValid) {
			const doUpdate = confirm(
				"This will update the product details. Are you sure?"
			);
			if (doUpdate) {
				updateProduct(
					title.value,
					price.value,
					description.value,
					featured.checked,
					imageToUpload,
					product.id
				);
			}
		} else {
			displayMessage(
				"warning",
				`The product is missing:
				${!titleIsValid ? "&#8226; title" : ""}
				${!priceIsValid ? "&#8226; price" : ""}
				${!descriptionIsValid ? "&#8226; description" : ""}
				`,
				".message-container"
			);
		}
	});

	// Exit button to let user return to product
	const exitBtn = editForm.querySelector("#exitFromEdit");
	exitBtn.addEventListener("click", () => {
		document.location.href = `details.html?id=${productId}`;
	});

	// Button to delete the product from the API
	const deleteBtn = editForm.querySelector(".btn--error");
	deleteBtn.addEventListener("click", () => {
		const doDelete = confirm(
			"This will delete the product! Are you sure you want to delete it?"
		);
		if (doDelete) {
			deleteProduct(productId, imageId);
		}
	});
}

formDetails();
