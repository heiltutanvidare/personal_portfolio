import { displayProducts } from "./api/data/displayProducts.js";
import { setHeroImg } from "./api/data/setHeroImg.js";
import { getApiData } from "./api/data/getApiData.js";
import commonUI from "./ui/commonUI.js";

// Get hero image from the API
// and mount it in the hero section
setHeroImg();

// Apply common UI elements
commonUI();

// Display products from the API
// Passing in true will only show featured
(async function productsPage() {
	const products = await getApiData("/products");
	let ShowOnlyFeatured = true;
	displayProducts(products, ShowOnlyFeatured);
})();
