'use strict'

var getBounds = require('array-bounds')

module.exports = normalize;

function normalize (arr, dim, bounds) {
	if (!arr || arr.length == null) throw Error('Argument should be an array')

	if (dim == null) dim = 1
	if (bounds == null) bounds = getBounds(arr, dim)

	for (var offset = 0; offset < dim; offset++) {
		var max = bounds[dim + offset], min = bounds[offset], i = offset, l = arr.length;

		if (max === Infinity && min === -Infinity) {
			for (i = offset; i < l; i+=dim) {
				arr[i] = arr[i] === max ? 1 : arr[i] === min ? 0 : .5
			}
		}
		else if (max === Infinity) {
			for (i = offset; i < l; i+=dim) {
				arr[i] = arr[i] === max ? 1 : 0
			}
		}
		else if (min === -Infinity) {
			for (i = offset; i < l; i+=dim) {
				arr[i] = arr[i] === min ? 0 : 1
			}
		}
		else {
			var range = max - min
			for (i = offset; i < l; i+=dim) {
				arr[i] = (arr[i] - min) / range
			}
		}
	}

	return arr;
}
