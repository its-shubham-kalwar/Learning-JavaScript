// let a = 10
// const b = 20
// var c = 30

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// var c = 300
let b = 300

if(true) {
    let a = 10
    const b = 20 
    // var c = 30
}

// console.log(a); 
// console.log(b); 
// console.log(c); 



function one(){
    const username = "Shubham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}
// one()



if(true){
    const username = "Shubham"
    if (username === "Shubham"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // scope nahi hai
}

// console.log(username); // scope nahi hai




// ++++++++++++++++++++++++++++++++++++++++++++++  interesting  ++++++++++++++++++++++++++


function addone(num) {
    return num + 1
}

// console.log(addone(5));


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
