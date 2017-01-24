'use strict'

module.exports = normalize;

function normalize (arr) {
	if (!arr || arr.length == null) throw Error('Argument should be an array')

	let max = -Infinity;
	let min = Infinity;

	for (let i = 0, l = arr.length; i < l; i++) {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	}

	if (max === Infinity && min === -Infinity) {
		for (let i = 0, l = arr.length; i < l; i++) {
			arr[i] = arr[i] === max ? 1 : arr[i] === min ? 0 : .5
		}
	}
	else if (max === Infinity) {
		for (let i = 0, l = arr.length; i < l; i++) {
			arr[i] = arr[i] === max ? 1 : 0
		}
	}
	else if (min === -Infinity) {
		for (let i = 0, l = arr.length; i < l; i++) {
			arr[i] = arr[i] === min ? 0 : 1
		}
	}
	else {
		for (let i = 0, l = arr.length; i < l; i++) {
			arr[i] = (arr[i] - min) / (max - min)
		}
	}

	return arr;
}
