'use strict'

const norm = require('./')
const assert = require('assert')
const getBounds = require('array-bounds')

let a = [-Infinity, -1, 0, 1, Infinity]
assert.deepStrictEqual(norm(a.slice()), [0, 0.5, 0.5, 0.5, 1])

let b = [0, .5, 1]
assert.deepStrictEqual(norm(b.slice()), b)

let c = [0, 50, 100]
assert.deepStrictEqual(norm(c.slice()), [0, .5, 1])

let d = [0, 0, .1, .2, 1, 2]
assert.deepStrictEqual(norm(d.slice(), 2), [0, 0, .1, .1, 1, 1])

let e = [0, 0, .1, .2, 1, 2]
assert.deepStrictEqual(norm(e.slice(), 2, getBounds(e, 2)), [0, 0, .1, .1, 1, 1])

let f = [0, .25, 1, .25]
assert.deepStrictEqual(norm(f, 2, [0, .5, 1, .5]), [0, .5, 1, .5])

let g = [0, 0, NaN, NaN, 1, 1]
assert.deepStrictEqual(norm(g, 2).map(v => isNaN(v) ? -1 : v), [0, 0, -1, -1, 1, 1])
