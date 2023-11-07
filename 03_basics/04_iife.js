// Immediately Invoke Function Expression (IIFE)


// named iife
(function chai () {
    console.log(`DB CONNECTED`);  // DB CONNECTED
})();



// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO shubham
})('shubham')