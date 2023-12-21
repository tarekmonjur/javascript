'use strict';

const today = new Date();
// const weekAgo = weekAgoDate();

// function declaration
// function weekAgoDate() {
// 	const date = new Date();
// 	date.setDate(date.getDate() - 7);
// 	return date;
// }

// function expression
const weekAgoDate = function () {
	const date = new Date();
	date.setDate(date.getDate() - 7);
	return date;
};

const weekAgo = weekAgoDate();

console.log(today);
console.log(weekAgo);
