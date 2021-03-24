import { getUserName } from "../localStorage/storage.js";
import logOut from "./logOut.js";
import updateCartBadge from "../shoppingCart/updateCartBadge.js";

// This function will create the header and nav html,
// including logic to check if user is logged in
// and only show elemts to logged in user

export default function createHeader() {
	const header = document.querySelector("header");
	header.classList.add("header"); // For sass/BEM setup

	const { pathname } = window.location;
	const userName = getUserName();

	// Define the log in link
	let loginLink = `
      <li class="nav__item">
        <a href="login.html" class="nav__link ${
			pathname === "/login.html" ? "active" : ""
		}">Log in</a>
      </li>
`;

	// Redefine log in link if user is logged in
	// and show log out button instead
	if (userName) {
		loginLink = `
    <li class="nav__item">
      <a href="add.html" class="nav__link ${
			pathname === "/add.html" ? "active" : ""
		}">Add product</a>
    </li>
    <li class="nav__item">
  <a href="#" class="nav__link" id="logOutButton">
    Log out
  </a>
</li>
`;
	}

	// Setting the header html and apply
	// active class to link of active page
	header.innerHTML = `
  <div class="header__inner">
    <a href="index.html" class="header__logo">
      <img src="img/graphics/site-logo.svg" alt="ShoeBox logo">
    </a>
    <div class="header__burger">
      <span class="header__burger__line"></span>
      <span class="header__burger__line"></span>
      <span class="header__burger__line"></span>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="products.html" class="nav__link ${
				pathname === "/products.html" ? "active" : ""
			}"
            >Products</a
          >
        </li>
        <li class="nav__item">
          <a href="cart.html" class="nav__link cart-link ${
				pathname === "/cart.html" ? "active" : ""
			}"><img src="img/graphics/cart.svg" alt="Shopping cart icon">Cart<span class="cart-link__badge"></span></a>
      </li>
      ${loginLink}
      </ul>
    </nav>
    <div class="header-message-container"></div>
  </div>
  `;

	//Update cart badge
	updateCartBadge();

	// Enable logout button functionality
	logOut();

	// Set header height variable for CSS sizing
	setHeaderHeight();
}

// Function to set the header-height variable
// that is used in spacing of elements below the header,
// based on screen size.
// Will run 1 second after screen resize as well.

function setHeaderHeight() {
	const header = document.querySelector(".header");
	let headerHeight = header.offsetHeight;
	let root = document.documentElement;
	root.style.setProperty("--header-height", headerHeight + "px");
}

// Set the new header height 1s after window is resized
window.addEventListener("resize", function handleResize() {
	setTimeout(function () {
		setHeaderHeight();
	}, 1000);
});
