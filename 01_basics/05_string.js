const name = "Shubham"
const repoCount = 50

// console.log(name + repoCount + "Kumar"); // Shubham50Kumar

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// Hello my name is Shubham and my repoCount is 50


const gameName = new String('Shubham-sk-com')
// console.log(gameName[0]); // S
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 7
// console.log(gameName.toUpperCase()); // SHUBHAM

// console.log(gameName.charAt(2)); // u
// console.log(gameName.indexOf('b')); // 3

const newString = gameName.substring(0, 4)
// console.log(newString); // Shub

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // ub

const newStringOne = "  Shubham  "
// console.log(newStringOne); // __Shubham__
// console.log(newStringOne.trim()); // Shubham

const url = "https://shubham.com/shubham%20kumar"

// console.log(url.replace('%20','-')); // https://shubham.com/shubham-kumar

// console.log(url.includes('shubham'));// true

// console.log(gameName.split('-')); // [ 'Shubham', 'sk', 'com' ]