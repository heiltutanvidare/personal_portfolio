// Display the products as HTML
// If ShowOnlyFeatured is set to true, only featured
// products will show
export async function displayProducts(products, ShowOnlyFeatured) {
	const loader = document.querySelector(".loader");
	const productsContainer = document.querySelector(".products__container");
	let html = "";

	// const products = await getApiData("/products");
	let filteredProducts = products;

	// Set featured class for additional styling
	let featuredCssClass = "";

	// Filter to show only the featured products
	if (ShowOnlyFeatured === true) {
		filteredProducts = products.filter(filterProducts);
		featuredCssClass = "product--featured";

		function filterProducts(product) {
			if (product.featured) {
				return true;
			}
		}
	}

	filteredProducts.forEach((product) => {
		// Handle missing image
		let imgSrc = "img/photos/missing_img.png";
		if (product.image) {
			imgSrc = product.image.url;
		}

		// Define the HTML
		html += `
				<a href="details.html?id=${product.id}" class="product ${featuredCssClass}">
					<div class="product__image-container">
						<img src="${imgSrc}" alt="${product.title}" class="product__image" loading="lazy"/>
					</div>
					<div class="product__details">
						<h3 class="product__details__title">${product.title}</h3>
						<p class="product__details__price">$${product.price}</p>
					</div>
				</a>
			`;
	});

	// Apply the HTML to the container
	productsContainer.innerHTML = html;

	// Hide loader
	loader.style.display = "none";
}
