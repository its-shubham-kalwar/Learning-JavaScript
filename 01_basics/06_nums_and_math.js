const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); // 23.9
// console.log(otherNumber.toPrecision(2)); // 24
// console.log(otherNumber.toPrecision(1)); // 2e+1

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++



// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.2)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,3,5,6,1,9)); // 1
// console.log(Math.max(6,9,4,10,12)); // 12


// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);


