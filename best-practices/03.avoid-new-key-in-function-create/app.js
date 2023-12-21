'use strict';

const abRatio = 0.95;
const input = 52;

// const abFactor = new Function('value', 'return (value * abRatio)');
// console.log(`abFactor: ${abFactor(input)}`);

const abFactor = (value) => {
	return value * abRatio;
};
console.log(`abFactor: ${abFactor(input)}`);
