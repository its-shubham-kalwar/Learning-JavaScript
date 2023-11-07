const user = {
    username : "shubham",
    price : 999,


    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // output - 13 to 23
    }
}

// {
//     username: 'shubham',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
//   Sk, welcome to website
//   {
//     username: 'Sk',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// user.welcomeMessage() // shubham, welcome to website

// user.username = "Sk"

// user.welcomeMessage() // Sk, welcome to website

// console.log(this); // {}


// function chai(){
//     console.log(this);
// }

// chai()

// output - global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }


// const chai = () => {
//     let username = "Shubham"
//     // console.log(this.username); // undefined
//     console.log(this); // {}
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo()); // NaN


const addTwo = (num1 , num2) => num1 + num2

console.log(addTwo(3,4)); // 7


