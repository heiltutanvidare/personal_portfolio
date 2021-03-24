import commonUI from "./ui/commonUI.js";
import { displayProducts } from "./api/data/displayProducts.js";
import { getApiData } from "./api/data/getApiData.js";
import displayMessage from "./ui/displayMessage.js";

// Apply common UI elements
commonUI();

// Enable breadcrumb navigation
const breadcrumbsContainer = document.querySelector(".breadcrumbs");
breadcrumbsContainer.innerHTML = `
    <a href="index.html">Home</a>
    <p>></p>
    <p>Products</p>
	`;

(async function productsPage() {
	const messageContainer = document.querySelector(".message-container");

	// Get products from API on page load
	const products = await getApiData("/products");
	// Display products from the API
	// Passing in true will only show featured
	let ShowOnlyFeatured = false;
	displayProducts(products, ShowOnlyFeatured);

	// Hide the loader
	const loader = document.querySelector(".loader");
	loader.style.display = "none";

	// Invoke function to enable search
	searchForProduct();

	// Button to clear the search field
	const clearBtn = document.querySelector(".products__search__clear");
	clearBtn.style.display = "none";

	// Search feature
	function searchForProduct() {
		const searchInput = document.querySelector("#productSearch");
		searchInput.addEventListener("input", handleSearch);

		function handleSearch(e) {
			messageContainer.innerHTML = "";
			const searchTerm = e.target.value.trim().toLowerCase();

			let searchedProducts = products.filter(searchProducts);

			function searchProducts(product) {
				if (
					product.title.toLowerCase().includes(searchTerm) ||
					product.description.toLowerCase().includes(searchTerm)
				) {
					return true;
				}
			}
			if (searchedProducts.length === 0) {
				displayMessage(
					"warning",
					"We are sorry, but could not find any products with a matching title or description.",
					".message-container"
				);
			}
			// When input changes, run the display products function,
			// passing in the searched for products, and false(to not show only featured)
			displayProducts(searchedProducts, ShowOnlyFeatured);

			// Display clear button if search term is added
			if (searchTerm.length > 0) {
				clearBtn.style.display = "flex";
			}

			// When clear button is clicked,
			// clear the srach input, display all products,
			// hide button and hide any search messsage
			clearBtn.addEventListener("click", () => {
				e.target.value = "";
				displayProducts(products, ShowOnlyFeatured);
				clearBtn.style.display = "none";
				messageContainer.innerHTML = "";
			});
		}
	}
})();
