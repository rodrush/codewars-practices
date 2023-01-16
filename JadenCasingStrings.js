// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in
// the same way he originally typed them.
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
function toJadenCase(str) {
	const toJadenCase = str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
		letter.toUpperCase()
	);
	console.log(toJadenCase);
}
toJadenCase("How can mirrors be real if our eyes aren't real");

// const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
