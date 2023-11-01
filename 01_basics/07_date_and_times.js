// Dates 

// let myDate = new Date()
// console.log(myDate.toString()); // Wed Nov 01 2023 04:42:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Nov 01 2023
// console.log(myDate.toLocaleString()); // 11/1/2023, 4:42:22 AM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM


// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);// 1698814398285

// console.log(myCreatedDate.getTime()); // 1673654400000

// console.log(Math.floor(Date.now()/1000)); // 1698814815

let newDate = new Date()
// console.log(newDate); // 2023-11-01T05:02:56.692Z
// console.log(newDate.getMonth()); // 10
// console.log(newDate.getDay()); // 3


let smart = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(smart); // Wednesday
