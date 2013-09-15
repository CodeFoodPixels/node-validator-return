node-validator-return
=====================

Catches and returns errors from node-validator instead of just throwing them.

To install node-validator-return, use [npm](http://github.com/isaacs/npm):

```bash
$ npm install validator-return
```

Please refer to [node-validator](https://github.com/chriso/node-validator) for documentation on how to use the validator functions.

## Example

```javascript

var validator = require('validator-return'),
    check = validator.check,
    sanitize = validator.sanitize;

// Prints true to the console
console.log(check("bacon").isEmail().errors());

// Prints false to the console
console.log(check("tasty@bacon.com").isEmail().errors());

// Prints an array containing 'Invalid Email' to the console
console.log(check("bacon").isEmail().errors(true));

// Prints false to the console
console.log(check("tasty@bacon.com").isEmail().errors(true));
```

## Usage

To use node-validator-return, you need to require it in your file instead of node-validator (as node-validator-return is a wrapper and includes node-validator). From that point, you simply chain `.errors()` onto the end of your validation method chain.

`.errors()` accepts an optional boolean parameter to state if you want error messages returned. By default it doesn't return the error messages and only returns a boolean value for if there are errors or not. If you use `.errors(true)`, you will get an array of error messages if there are any, or a boolean value of false if there aren't.

## License

The MIT License (MIT)

Copyright (c) 2013 Luke Bonaccorsi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

