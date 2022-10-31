// The function should take three arguments -
// operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
const basicMath = (operation, value1, value2) => {
	return eval(value1 + operation + value2);
	// switch (operation) {
	// 	case "+":
	// 		return value1 + value2;
	// 		break;
	// 	case "-":
	// 		return value1 - value2;
	// 		break;
	// 	case "*":
	// 		return value1 * value2;
	// 		break;
	// 	case "/":
	// 		return value1 / value2;
	// 		break;
	// 	default:
	// 		return `${operation} is not a valid operator`;
	// 		break;
	// }
};
console.log(basicMath("*", 8, 7));
