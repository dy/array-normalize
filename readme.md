# array-bounds  [![experimental](https://img.shields.io/badge/stability-unstable-yellow.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/array-bounds.svg)](https://travis-ci.org/dfcreative/array-bounds)

Find min/max values from (possibly nd-) array.

[![npm install array-bounds](https://nodei.co/npm/array-bounds.png?mini=true)](https://npmjs.org/package/array-bounds/)

```js
const bounds = require('array-bounds')

bounds([0, 50, 100]) // [0, 100]
```

## API

### [min, max] = bounds(array, n=1)

Figures out bounds of n-dimensional array using dimensions `n` as stride, ie. for 1d array the expected data layout is `[x, x, x, ...]` for 2d is `[x, y, x, y, ...]`, etc. Returned array contains bounds for every dimension, eg.

```js
//get bounds of 3d-data
let [minX, minY, minZ, maxX, maxY, maxZ] = bounds([x1, y1, x1, x2, y2, z2, ...], 3)
```
