// singleton
// Object.create // constructor method

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name : "Shubham",
    "full name": "Shubham kumar",
    [mySym]: "mykey1",
    age: 22,
    location: "Lucknow",
    email:"user@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); // user@gmail.com
// console.log(JsUser["email"]); // user@gmail.com

// console.log(JsUser["full name"]); // Shubham kumar
// console.log(JsUser."full name"); // not method in js gives error

// console.log(JsUser[mySym]); // mykey1

JsUser.email = "sk@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shubham@gmail.com"
// console.log(JsUser); // {
//     name: 'Shubham',
//     'full name': 'Shubham kumar',
//     age: 22,
//     location: 'Lucknow',
//     email: 'sk@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }


JsUser.greeting = function(){
    console.log("Hello js user");
}

// console.log(JsUser.greeting); // undefined or [Function (anonymous)]
// console.log(JsUser.greeting()); // Hello js user


JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}


console.log(JsUser.greetingTwo()); // hello js user shubham