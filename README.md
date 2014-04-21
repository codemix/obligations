# Obligations

Tiny JavaScript library for [preconditions](http://en.wikipedia.org/wiki/Precondition) and [postconditions](http://en.wikipedia.org/wiki/Postcondition), intended for use with [Contractual](https://github.com/codemix/contractual).


## Installation

```
npm install obligations
```

## Usage

```js
var obligations = require('obligations');

obligations.precondition(1 > 0); // always ok
obligations.precondition(false); // throws a PreconditionError
obligations.precondition(0 > 1, "The world has ended!"); // throws a PreconditionError with a custom message


obligations.postcondition(1 > 0); // always ok
obligations.postcondition(false); // throws a PostconditionError
obligations.postcondition(0 > 1, "The world has ended!"); // throws a PostconditionError with a custom message

```


## License

MIT, see [LICENSE.md](./LICENSE.md).

