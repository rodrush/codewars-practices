// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.
const fillArr = (N) => {
	let arr = [];
	for (let i = 0; i <= N - 1; i++) {
		arr.push(i);
	}
	return arr;
};
console.log(fillArr(5));
