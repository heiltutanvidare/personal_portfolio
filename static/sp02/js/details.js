import commonUI from "./ui/commonUI.js";
import { getApiData } from "./api/data/getApiData.js";
import { getUserName } from "./localStorage/storage.js";
import addToCart from "./shoppingCart/addToCart.js";

// Apply common UI elements
commonUI();

// Get ID of product from URL, and
// return to home if no ID is found
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
if (!productId) {
	location.href = "index.html";
}

// Check if user is logged in
// to enable editing link
const user = getUserName();
const editLink = user
	? `
			<div class="details__can-edit">
				<img src="img/graphics/edit.svg" />
				<a href="edit.html?id=${productId}">Edit this product</a>
			</div>
		`
	: "";

// Display the details of the product
async function displayProductDetails() {
	// Define the endpoint and fetch the product
	const productEndpoint = "/products/" + productId;
	const product = await getApiData(productEndpoint);

	// Enable breadcrumb navigation
	const breadcrumbsContainer = document.querySelector(".breadcrumbs");
	breadcrumbsContainer.innerHTML = `
			<a href="index.html">Home</a>
			<p>></p>
			<a href="products.html">Products</a>
			<p>></p>
			<p>${product.title}</p>
		`;

	// Set product name in reviews
	const nameElement = document.querySelector("#productName");
	nameElement.innerText = product.title;

	// Set document title
	document.title = `${product.title} | ShoeBox`;

	// Handle missing image
	let imgUrl = "img/photos/missing_img.png";
	if (product.image) {
		imgUrl = product.image.url;
	}

	// Select container and add product as its content
	const container = document.querySelector(".product-details-container");
	container.innerHTML = `
    <div class="details">
      <div class="details__image-container">
        <img class="details__image" src="${imgUrl}" alt="${product.title}" />
      </div>
      <div class="details__info">
        ${editLink}
        <h1 class="details__title">${product.title}</h1>
        <p class="details__price">$${product.price}</p>
				<button class="btn btn--cta" id="addToCartButton">Add to cart</button>
        <p class="details__description">${product.description}</p>
      </div>
    </div>
  `;

	// Enable the Add to cart button and
	// run the add to cart function when clicked
	const addToCartButton = document.querySelector("#addToCartButton");
	addToCartButton.addEventListener("click", () => {
		addToCart(product);
	});

	// Hide the loader
	const loader = document.querySelector(".loader");
	loader.style.display = "none";
}

displayProductDetails();
