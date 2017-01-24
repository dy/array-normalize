const norm = require('./')
const assert = require('assert')

let a = [-Infinity, -1, 0, 1, Infinity]
assert.deepEqual(norm(a.slice()), [-Infinity, 0, 0, 0, Infinity])

let b = [0, .5, 1]
assert.deepEqual(norm(b.slice()), b)

let c = [0, 50, 100]
assert.deepEqual(norm(c.slice()), [0, .5, 1])
