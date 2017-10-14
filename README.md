# prng

Simple pseudo random number generator based on [Park-Miller-Carta](http://www.firstpr.com.au/dsp/rand31/).

There are more sophisticated and battle tested prng out there so its advised to take a look at more famous generators first.

## Quick start

```
yarn add -S @gen/prng
```

```
// some file.js
const prng = require('@gen/prng').generator(1); // pass seed value
prng.random(); // random int based on seed 
```

