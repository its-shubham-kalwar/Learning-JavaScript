// if

const isUserloggedIn = true
if(isUserloggedIn){

}


if (3 != "2"){

    // console.log("executed"); // executed
}


if (3 === "2"){

    // console.log("executed"); // executed
}


const tem = 41
if(tem < 50) {
    // console.log("less than 50");
}
// console.log("temp is greater than 50");
// output - 
// less than 50
// temp is greater than 50


if(tem === 40){
    console.log("less than 50");
} else {
    console.log("temp is greater than 50");
}
// output -- 
// temp is greater than 50


// switch

// falsy values - false, 0, -0, Bigint, 0n, "", null, undefined, NaN

// truthy values - "0", 'false', " ", [], {}, function(){}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
// console.log(val1); // 5

// val1 = null ?? 10
// console.log(val1); // 10

val1 = undefined ?? 15
// console.log(val1); // 15

val1 = null ?? 10 ?? 15
// console.log(val1); // 10



// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80") // less than 9=80