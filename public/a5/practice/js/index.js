//alert('Hello World!');
// eslint-disable-next-line no-unused-vars
/* global _ */
console.log('Hello World!');

let global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;


console.log("Variables and constants");
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);