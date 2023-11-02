// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "shubham"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'shubham', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Shubham",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname); // { userfullname: { firstname: 'Shubham', lastname: 'Kumar' } }
// console.log(regularUser.fullname.userfullname.firstname); // Shubham

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2}
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id : 1,
        email:"user@gmail.com"
    },
    {
        id:1,
        email: "user@gmail.com"
    },
    {
        id:1,
        email: "user@gmail.com"
    },
    {
        id:1,
        email: "user@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'shubham', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'shubham' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged')); // false

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true