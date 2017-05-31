'use strict'

const norm = require('./')
const assert = require('assert')

let a = [-Infinity, -1, 0, 1, Infinity]
assert.deepEqual(norm(a.slice()), [0, 0.5, 0.5, 0.5, 1])

let b = [0, .5, 1]
assert.deepEqual(norm(b.slice()), b)

let c = [0, 50, 100]
assert.deepEqual(norm(c.slice()), [0, .5, 1])

let d = [0, 0, .1, .2, 1, 2]
assert.deepEqual(norm(d.slice(), 2), [0, 0, .1, .1, 1, 1])
