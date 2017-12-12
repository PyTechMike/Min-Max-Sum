function isNumber(value) {
	return (typeof value === 'number'); 
}

function min (numbers) {
	return Math.min.apply(Math, numbers.filter(isNumber));
}

function max (numbers) {
	return Math.max.apply(Math, numbers.filter(isNumber));
}

function sum() {
	var args = []
				.slice
				.call(arguments)
				.filter(isNumber);	
	var sum = args.reduce(function(previousValue, currentValue) {
		return currentValue + previousValue;
	})
	return sum;
}

console.log(sum(1, 99, 'flood'));
console.log(max(['teeext', 43, 99]));
console.log(min(['feef', 43, 99]));



