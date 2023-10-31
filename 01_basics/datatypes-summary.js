// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 235894932662893n

// Reference (Non-primitive)
// Array, Object, Functions

const heros = ["Shubham", "kumar", "kalwar"];
let myObj = {
    name: "Shubham",
    age: "22"
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber); // bigint

// console.log(typeof outsideTemp); // Object

// console.log(typeof scorevalue); // number

// console.log(typeof anotherId); // symbol