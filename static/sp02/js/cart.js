import { getCartItems } from "./localStorage/storage.js";
import displayCartItems from "./shoppingCart/displayCartItems.js";
import commonUI from "./ui/commonUI.js";

// Apply common UI elements
commonUI();

// Enable breadcrumb navigation
const breadcrumbsContainer = document.querySelector(".breadcrumbs");
breadcrumbsContainer.innerHTML = `
    <a href="index.html">Home</a>
    <p>></p>
    <a href="products.html">Products</a>
    <p>></p>
    <p>Shopping cart</p>
  `;

// Get the stored cart items from local storage
const cartItems = getCartItems();

// Run the function to display the items
// from the cartItems array
displayCartItems(cartItems);
