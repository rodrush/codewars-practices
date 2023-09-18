// An anagram is the result of rearranging the letters of a word to
// produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments
// given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

const anagram = (test, original) => {
	let a = original.toLowerCase().split("").sort().join("");
	let b = test.toLowerCase().split("").sort().join("");
	return a == b ? true : false;
};
console.log(anagram("ound", "round"));
// anagram("foefet", "toffee");
