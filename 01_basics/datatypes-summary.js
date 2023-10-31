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



// ++++++++++++++++++++++++++++++++++++++++++++++++


// Memory - Stack (Primitive), heap(Non-primitive)

let myYoutubename = "Shubham kumar "
let anothername = myYoutubename
anothername = "Youtube Channel"

// console.log(myYoutubename); // shubham kumar
// console.log(anothername); // Youtube Channel

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "shubham@gmail.com"

console.log(userOne.email); // shubham@gmail.com
console.log(userTwo.email); // shubham@gmail.com