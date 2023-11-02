function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,2) // 3
// addTwoNumbers(3, null) // 3 // arguments


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Shubham"); // Shubham
    // return result
    // console.log("Shubham");  // Bydefault return ke baad work nahi hota hai


    return number1 + number2
}
const result = addTwoNumbers(3,5)

// console.log("result : " , result); // result : 8


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Shubham")); // Shubham just logged in
// console.log(loginUserMessage()); // undefined


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // Please enter a username
// undefined


function loginUserMessage(username = "Shubham"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()); // Shubham just logged in 
console.log(loginUserMessage("kalwar")); // kalwar just logged in
