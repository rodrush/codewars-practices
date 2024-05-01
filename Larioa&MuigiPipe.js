// Given a list of unique numbers sorted in ascending order,
// return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

const pipeFix = (numbers) => {
	let first = numbers[0];
	let last = numbers[numbers.length - 1];

	let arr = [];
	for (let i = first; i <= last; i++) {
		arr.push(i);
	}
	return arr;
};

console.log(pipeFix([1, 3, 5, 6, 7, 8]));
