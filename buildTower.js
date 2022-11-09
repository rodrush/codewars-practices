// Build a pyramid-shaped tower, as an array/list of strings,
// given a positive integer number of floors.
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
function towerBuilder(nFloors) {
	var result = [];
	for (var i = 0; i < nFloors; i++) {
		result.push(
			" ".repeat(nFloors - i - 1) +
				"*".repeat(i * 2 + 1) +
				" ".repeat(nFloors - i - 1)
		);
	}
	return result;
}
console.log(towerBuilder(3));
