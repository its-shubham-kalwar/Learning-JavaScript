// array 

const myArray = [0,1,2,3,4,5]
const myheros = ["shubham", "kumar"]

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray2[1]); // 2


// Array methods

myArray.push(6)
myArray.push(7)
myArray.pop()
// console.log(myArray);


myArray.unshift(9)  // start me add ho jata hai
myArray.shift() // one element start se remove hoga
// console.log(myArray);

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(3)); // 3

const newArray = myArray.join()

// console.log(myArray); // [0, 1, 2, 3, 4, 5, 6]
// console.log(newArray); // 0,1,2,3,4,5,6


// slice , splice


console.log("A", myArray); // [0,1,2,3,4,5,6]

const myn1 = myArray.slice(1,3)
console.log(myn1); // [1,2]
console.log("B", myArray); // [0,1,2,3,4,5,6]

const myn2 = myArray.splice(1,3)
console.log(myn2); // [1,2,3]
console.log("C", myArray); // [0,4,5,6]
