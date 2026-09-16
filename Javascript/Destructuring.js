// ! Destructuring
// ? It is used to unpacking the values from array or object & stored it in distinct variable.

//! Array Destructuring

// todo : Example 1
// let colors = ["RED" , "GREEN" , "BLUE"]
// console.log(colors);
// console.log(colors[2]);  // accessing elements using the array index position


// let [r,g,b] = colors
// console.log(g);

// todo : Example 2
// numbers = [10 , 20 , 30 , 40 , 50]
// console.log(numbers);
// console.log(numbers[2]);

// let [ten , twenty , thirty] = numbers
// console.log(ten);
// console.log(twenty);
// console.log(thirty);
// console.log(fourty);      //! Error : fourty is not defined

// todo : Example 3 : Skipping elements
// let [ten , , thirty , , fifty] = numbers
// console.log(ten);
// console.log(thirty);
// console.log(fifty);


// todo : Example 4 : Default values of array
// let numbers = [10 , 20 , 30 , , 50]
// let [a , b , c , d=40 , e] = numbers
// console.log(a , b , c , d , e);


// ! Object Destructuring

// todod: Example 1
// let person = {
//     fname : "Dinga",
//     lname : "Raja",
//     age : 20
// }
// console.log(person);

// console.log(`${person.fname} age is ${person.age}`);

// // here property name is used as the distinct variables, so skipping is not needed.
// let {fname , lname , age} = person
// console.log(`${fname} age is ${age}`);

// todo : Example 2 Default values for object
// let person = {
//     fname : "Dinga",
//     age : 20
// }
// console.log(person);
// // person.city = "Goa"
// let {fname , city = "XYZ "} = person
// console.log(fname , city);
// console.log(person);

// todo : Renaming the Variable (distinct variable)
// let student = {
//     name : "Ram",
//     age : 22
// }
// console.log(student);

// let {name , age} = student
// console.log(name , age);

//? Syntax ==> old_distinct_name : new_distinct_name
// let {name : student_name , age : student_age} = student
// console.log(student_name , student_age);

// todo : Working with nested Object
// let person = {
//     fname : "Ram",
//     age : 22,
//     address : {
//         city : "Madurai",
//         pincode : 543210
//     }
// }
// console.log(person);
// let {fname , address} = person
// console.log(fname , address);

// let {city , pincode} = address  //? Nested object
// console.log(`${fname} is from ${city} - ${pincode} `);


// todo: 

// let {fname , age , city} = {
//     fname : "Ram",
//     age : 22,
//     city : 'Madurai'
// }

// console.log(fname , age , city);