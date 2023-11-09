const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject){
    // console.log(key);
}
// output -- 
// js
// cpp
// rb
// swift

for (const key in myObject){
    // console.log(`$?{key} shortcut is for ${myObject[key]}`);
}
// output -- 
// js shortcut is for Javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple



const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
// output -- 
// 0
// 1
// 2
// 3
// 4



// const map = new Map()
// map.set('IN', 'India')
// map.set('IN', 'India')
// map.set('USA', "United states of america")
// map.set('Fr', "France")

// for (const key in map){
//     console.log(key);
// }
// output -- not working