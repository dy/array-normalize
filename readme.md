# array-normalize

Normalize array in-place to zero mean and unit variance.

[![npm install array-normalize](https://nodei.co/npm/array-normalize.png?mini=true)](https://npmjs.org/package/array-normalize/)

```js
const normalize = require('array-normalize')

normalize([0, 50, 100]) // [0, .5, 1]
```

## API

### array = normalize(array, n=1)

Normalizes n-dimensional array in-place using dimensions `n` as stride, ie. for 1d array the expected data layout is `[x, x, x, ...]` for 2d is `[x, y, x, y, ...]`, etc. Every dimension is normalized independently, so 2d array is normalized to unit square `[0, 0, 1, 1]`.
