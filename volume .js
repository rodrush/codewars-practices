// Bob needs a fast way to calculate the volume of a cuboid with three values:
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// const vol = (height, width, length) => {
// 	return height * width * length;
// };

// console.log(vol(2, 3, 4));
class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return height * width * length;
	}
}

console.log(Kata.getVolumeOfCuboid(2, 3, 4));
