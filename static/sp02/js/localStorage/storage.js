// Variables for storage keys
const tokenKey = "token";
const userKey = "user";
const cartItemKey = "cartItems";

// Save the user object
export function saveUser(user) {
	saveToStorage(userKey, user);
}

// Retreive the username
export function getUserName() {
	const user = getFromStorage(userKey);

	if (user) {
		return user.username;
	}

	return null;
}

// Clear the user and jwt from storage
export function clearUser() {
	removeFromStorage(userKey);
	removeFromStorage(tokenKey);
}

// Save the json web token
export function saveToken(token) {
	saveToStorage(tokenKey, token);
}

// Retreive the json web token
export function getToken() {
	return getFromStorage(tokenKey);
}

// Save cart item to storage
export function saveToCart(cartItem) {
	saveToStorage(cartItemKey, cartItem);
}

// Retreive cart items from storage
export function getCartItems() {
	return getFromStorage(cartItemKey);
}

// Reusable function to save value to any key in local storage.
function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

// Reusable function to save value to any key in local storage.
function getFromStorage(key) {
	const value = localStorage.getItem(key);

	// If the value is not there, return empty array
	if (!value) {
		return [];
	}

	return JSON.parse(value);
}

// Remove any key from storage
function removeFromStorage(key) {
	localStorage.removeItem(key);
}
