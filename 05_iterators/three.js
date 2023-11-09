const arr = [1, 2,3,4,5]

for (const num of arr){
    // console.log(num);
}
// output -- 
// 1
// 2
// 3
// 4
// 5



const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}
// output -- 
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


/// Maps

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('USA', "United states of america")
map.set('Fr', "France")

// console.log(map);
// output -- 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United states of america',
//     'Fr' => 'France'
//   }



for (const key of map){
    // console.log(key);
}
// output -- 
// [ 'IN', 'India' ]
// [ 'USA', 'United states of america' ]
// [ 'Fr', 'France' ]



for (const [key, value] of map){
    // console.log(key, ':-', value);
}
// output -- 
// IN :- India
// USA :- United states of america
// Fr :- France



const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
for (const [key, value] of myObject){
    // console.log(key, ':-', value);
}
// output -- 
// error - not working

