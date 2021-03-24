// Validate length of input
export default function validateLength(value, minLength) {
	if (value.length >= minLength) {
		return true;
	}
}
