// let arr = [2, 0, -14, 32, -9];
let arr = [1, 2, 3, 4, 5];

const lp = () => {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			total += arr[i];
		}
	}
	console.log(total);
};
lp();
console.log(arr);
