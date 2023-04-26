// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.
const nbDig = (n, d) => {
	//Generate array from the legth given
	let a = Array.from({ length: n + 1 }, (v, i) => i);
	// Use .map to genertae a new array with values squared
	let arr = a.map((x) => x * x);
	// Split array into string to loop over each single value
	let sp = arr.toString().split("");
	let count = 0;
	for (let i = 0; i <= sp.length; i++) {
		if (sp[i] == d) {
			count++;
		}
	}
	console.log(count);
};
nbDig(5750, 0);
