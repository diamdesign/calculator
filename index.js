var num1, func, num2;
var sum = 0;

function calculation() {
	sum = 0;
	num1 = prompt(
		"Write the first number or your full calculation like a+b (+,-,*,/)"
	);

	if (num1.indexOf("+") >= 0) {
		let numbers = num1.split("+");
		console.log(numbers);
		sum = parseInt(numbers[0]) + parseInt(numbers[1]);
	} else if (num1.indexOf("-") >= 0) {
		let numbers = num1.split("-");
		console.log(numbers);
		sum = parseInt(numbers[0]) - parseInt(numbers[1]);
	} else if (num1.indexOf("*") >= 0) {
		let numbers = num1.split("*");
		console.log(numbers);
		sum = parseInt(numbers[0]) * parseInt(numbers[1]);
	} else if (num1.indexOf("/") >= 0) {
		let numbers = num1.split("/");
		console.log(numbers);
		sum = parseInt(numbers[0]) / parseInt(numbers[1]);
	} else {
		func = prompt("Select: +, -, * or /");
		num2 = prompt("Write the second number");

		let number1 = parseInt(num1);
		let number2 = parseInt(num2);

		console.log(number1, func, number2);
		if (func === "+") {
			sum = number1 + number2;
		} else if (func === "-") {
			sum = number1 - number2;
		} else if (func === "*") {
			sum = number1 * number2;
		} else if (func === "/") {
			sum = number1 / number2;
		} else {
			alert("You selected a wrong function to calculate the numbers.");
		}
	}
	console.log("Sum:", sum);

	alert("The result of your calculation is: " + sum);

	var nextTry = prompt("Do you want to try again? [Y/N]");
	if (nextTry === "Y" || nextTry === "y") {
		console.log("Calculation again...");
		calculation();
	} else {
		return;
	}
}

calculation();
