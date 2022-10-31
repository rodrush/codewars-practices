//take a string and captilize the first letter
const upper = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(upper("rodney"));
