function sum(num, pad) {
	return num + pad;
}

function sub(num, pad) {
	return num - pad;
}

function mult(num, pad) {
	return num * pad;
}

function div(num, pad) {
	return num / pad;
}

const data = [2, 5, 7, 9];

function mathOperations(data, op, pad) {
	const results = [];
	for (num of data) {
		results.push(op(num, pad));
	}
	return results;
}

console.log(mathOperations(data, sum, 2));
console.log(mathOperations(data, mult, 2));
