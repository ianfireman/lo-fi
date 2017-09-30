// Change './index' to 'is-null-or-empty' if you use this code outside of this package
var loFi = require('./index');

console.log(loFi("")); // true
console.log(loFi(null)); // true
console.log(loFi(undefined)); // true

console.log(loFi("Hello World")); // false