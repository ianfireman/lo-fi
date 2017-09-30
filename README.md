# lo-fi

A Node.js package that checks whether a given string is null or empty. A basic package for an npm publish tutorial.

## Usage

First, install the package using npm:

    npm install lo-fi --save

Then, require the package and use it like so:

    var loFi = require('lo-fi');

    console.log(loFi("")); // true
    console.log(loFi(null)); // true
    console.log(loFi(undefined)); // true

    console.log(loFi("Hello World")); // false

## License

MIT