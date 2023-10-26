const accountId = 144553  // unchangeble
let accountEmail = "Shubham.kumar070902@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2 // Not allowed

/*
prefer not use var 
because of issue in block scope and functional scope
*/

accountEmail = "abs@gmail.com"

accountPassword= "21212121"

accountCity = "Bangaluru"

console.table([accountId, accountEmail , accountPassword, accountCity, accountState]);