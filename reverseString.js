// Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
const reverseString = (a) => {
	return a.split("").reverse().join("").split(" ").reverse().join(" ");
};
console.log(reverseString("This is an example!"));

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
	return str.split("").reverse().join("");
}
console.log(solution("world"));
