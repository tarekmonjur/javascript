function sum() {}

const data = [2, 5, 7, 9];

function mathOperations(data, op, pad) {
	const results = [];
	for (value of data) {
		results.push(op(value, pad));
	}
	return results;
}

console.log(mathOperations(data, sum, 2));
