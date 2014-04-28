# Obligations

[![Build Status](https://travis-ci.org/codemix/obligations.svg?branch=master)](https://travis-ci.org/codemix/obligations)


Tiny JavaScript library for [preconditions](http://en.wikipedia.org/wiki/Precondition), [postconditions](http://en.wikipedia.org/wiki/Postcondition) and [invariants](http://en.wikipedia.org/wiki/Invariant_\(computer_science\)), intended for use with [Contractual](https://github.com/codemix/contractual).


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

obligations.invariant(1 > 0); // always ok
obligations.invariant(false); // throws an InvariantError
obligations.invariant(0 > 1, "The world has ended!"); // throws a InvariantError with a custom message

```


## License

MIT, see [LICENSE.md](./LICENSE.md).

