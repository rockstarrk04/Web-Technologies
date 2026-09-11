// console.error("Objects");

// // todo : Creation of object using Direct Literal {}
// // let obj = {}
// // console.log(obj);
// // console.log(typeof(obj));

// // todo : Example 1 : create car object

// let car = {
//     carname : "BMW" , 
//     carcolour : "Black",
//     carMakeYear : 2020 , 
//     isActive : true
// }

// // console.log(car);
// // console.log(typeof(car));

// //! Accessing the property of object

// // todo : using dot operator
// //? syntax : objectName.propertyName

// // console.log(car.carname);
// // console.log(car.isActive);
// // console.log(`${car.carname} car colour is ${car.carcolour}`);


// // // todo : using subScript operator
// // //? syntax : objectName["propertyName"]

// // console.log(car["carname"]);
// // console.log(car["isActive"]);
// // console.log(`${car["carname"]} car colour is ${car["carcolour"]}`);


// //! Modification of Object properties (create , read , add , delete , update)
// // todo : create an object with properties

// //? using direct literal {}
// let person = {
//     fname : "Dinga",
//     age : 25,
//     place : "Goa"
// }
// console.log(person);


// // todo : read properties of the object
// //? Syntax : objectName.propertyName   (using dot operator)
// // console.log(person.fname);

// //? Syntax : objectName["propertyName"]    (using subscript operator)
// console.log(person["fname"]);
// console.log(`${person["fname"]} age is ${person["age"]}`);


// // todo :  Add new property to the object
// //? Syntax : objectName.NewPropertyName = newValue   (using dot operator)
// // person.Gender = "Male"

// //? Syntax : objectName["NewPropertyName"] = newValue    (using subscript operator)
// person["Gender"] = "Male"
// console.log(person);


// // todo :  Delete property to the object
// //? Syntax : delete objectName.PropertyName     (using dot operator)
// delete person.Gender

// //? Syntax : delete objectName["PropertyName"]      (using subscript operator)
// delete person["Gender"]
// console.log(person);


// // todo : Update property to the object
// //? Syntax : objectName.PropertyName = newValue    (using dot operator)
// person.age = 29

// //? Syntax : objectName["PropertyName"] = newValue      (using subscript operator)
// person["age"] = 29
// console.log(person);

//! Object Property with space

// let person = {
//     "first name" : "Dinga",
//     "last name" : "Raja",
//     age : 25
// }
// console.log(person);

// todo : accessing the property with space
// console.log(person.first name);   //? not possible with dot operator
// console.log(person["last name"]);    //? possible with subscript operator
// console.log(person["age"]);  //? possible with both dot & subscript operator

// todo : storing propertyname in variable then access.
// let key = "age"
// console.log(person[key]);


//! Nested Object
// let person = {
//     fname : "Dinga",
//     lname : "Raja",
//     age : 26,
//     address : {
//         houseNo : 1234,
//         city : "Goa",
//         pincode : 123456
//     }
// }

//? accessing property using dot operator
// console.log(person);
// console.log(person.address);
// console.log(person.address.city);
// console.log(`${person.fname} is from ${person.address.city}`);

//? Accessing property using subscript operator / Bracket Notation
// console.log(person["address"]);
// console.log(person["address"]["city"]);
// console.log(`${person["fname"]} is from ${person["address"]["city"]}`);

// =========================================================================

// *10-09-2026

// NOTE : traditional way of creating methods in objects
//! Creation of method inside object
// todo: Function inside object

// let demo = {
//     text : function() {            // anonymous function
//         console.log("Hello");
//     }
// }

// demo.text()

// todo : Function with parameter in a object

// let display = {
//     text : function(name){
//         console.log(`Hello ${name}`);
//     }
// }
// display.text("Ram")

// let con = {
//     lg : function(text){
//         console.log(`${text}`);
//     }
// }
// con.lg("Welcome");
// console.log("Welcome");


// todo : function with paramter and return statement in object

// let number = {
//     add : function (a,b){
//         return `${a} + ${b} = ${a + b}`
//     }
// }
// let res = number.add(10,20);
// console.log(res);
// console.log(number.add(100,200));

// todo : multiple function with paramter and return statement in object
// let number = {
//     add : function (a,b){
//         return `${a} + ${b} = ${a + b}`
//     },

//     multiplication : function(a,b){
//         return `${a} * ${b} = ${a * b}`
//     },

//     checkEvenOrOdd : function(num) {
//         return (num % 2 == 0) ? `${num} is Even` : `${num} is Odd`
//     },

//     power : function(a,b) {
//         return `${a} ^ ${b} = ${a**b} `
//     },

//     factorial : function(num) {
//         fact = 1
//         if (num == 0 || num == 1){
//             return `fact of ${num} is 1`
//         }
//         else{
//             fact = 1
//             for (let i = 1 ; i <= num ; i++){
//                 fact *= i
//             }
//             return `Fact of ${num} is ${fact}`
//         }
//     }
// }

// console.log(number.add(100,200));
// console.log(number.multiplication(100,5));
// console.log(number.checkEvenOrOdd(11));
// console.log(number.power(2,8));
// console.log(number.factorial(5));


// NOTE : Method creation in object using shorthand ES6

// let display = {
//     name : "Dinga",
//     sayHello(name){
//         console.log(`Hello ${name}`);
//     },

//     sayBye(name){
//         console.log(`Bye ${name}`);
//     }
// }

// display.sayHello('Ram')
// display.sayBye('Ram')

//! "this" keyword in Object
// NOTE : "this" keyword refers to the current object


// todo : Accessing the property of same object in method
// let person = {
//     fname : "Dinga",
//     lname : "Raja",
//     fullname(){
//         console.log(`My name is ${this.fname} ${this.lname}`);
//     }
// }
// person.fullname()

// todo : Update the property of same object

// let student = {
//     name : "Dinga",
//     updateName(newName){
//         this.name = newName
//     }
// }
// console.log(student.name);  // Dinga
// student.updateName("Raja")
// console.log(student.name);  // Raja


// ! getter and setter functions

// todo  : getter function is created using "get" keyword and It is used to read the values.
// let person = {
//     fname : "Dinga",
//     lname : "Raja",
//     get fullname(){
//         return (`My name is ${this.fname} ${this.lname}`);   
//     }
// }
// console.log(person.fullname);


// todo  : setter function is created using "set" keyword and It is used to update the values.
// let person = {
//     name : "Dinga",
//     set fullname(newValue){
//         this.name = newValue
//     }
// }
// console.log(person.name);
// person.fullname = "Dingu"
// console.log(person.name);

// !======= 11-09-26 ==========================================================

//! Create object using "new" keyword

// // todo : Create the object
// let car = new Object()
// console.log(car);


// // todo : add the property to object
// car.name = "KIA"
// car.colour = "Black"
// car.model = 2026
// console.log(car);

// // todo : Update property of the object

// car.colour = "Black & White"
// console.log(car);


// // todo : delete property of an object

// delete car.colour
// console.log(car);

// !---------------------------------------------------
//* Creating the object using constructor function

// function Car(name){
//     this.carname = name
// }

// let c1 = new Car("BMW")     // explicit fuunction converted to object using "new" keyword

// console.log(c1);
// console.log(typeof(c1));


// todo : Create two object with 5 properties using constructor function

// function student(name,age,city,branch,number){
//     this.name = name
//     this.age = age
//     this.city = city
//     this.branch = branch
//     this.number = number
// }

// let s1 = new student("Ram",22,"Madurai","CSE",9876543210)
// console.log(s1);
// console.log(typeof s1);


// let s2 = new student("Suneel",22,"Andhra","ECE",8986543210)
// console.log(s2);
// console.log(typeof s2);

//! ==============================================

//! Built-in Methods of Objects in Javascript   (Important Topic)
 
// let student = {
//     fname : "Dinga",
//     lname : "Raja",
//     age : 25
// }
// console.log(student);

// //? Object.keys(ObjectName) ==> get only keys in an object , returns as string array
// console.log(Object.keys(student));

// //? Object.keys(ObjectName) ==> get only value in an object , returns as string array
// console.log(Object.values(student));

// //?Object.keys(ObjectName) ==> get key value pairs in an object , returns as string array
// console.log(Object.entries(student));

// //? Object.keys(ObjectName)[index_value] ==> get specific key value pair in entries() , returns as string array
// console.log(Object.entries(student)[0]);


//? Object.freeze(ObjectName) ==> Prevents the modification of existing property attributes and values, and     prevents the addition of new properties.

// let student = {
//     fname : "Dinga",
//     place : "Goa"
// }

// Object.freeze(student)
// console.log(student);

// student.lname = "Raja"    //! adding new property is not possible
// console.log(student);

// student.place = "Bangalore"    //! updating property is not possible
// console.log(student);

// delete student.fname      //! deleting the property is not possible
// console.log(student);

//? Object.seal(ObjectName) ==> adding  , deleting properties is not possible , updating the value os properties is possible in existing properties.


// let student = {
//     fname : "Dinga",
//     place : "Goa"
// }
// Object.seal(student)
// console.log(student);

// student.lname = "Raja"    //! adding new property is not possible
// console.log(student);

// student.place = "Bangalore"    //! updating property is possible
// console.log(student);

// delete student.fname      //! deleting the property is not possible
// console.log(student);



// ? Object.assign(object_Names)   ==> combine two object's properties and values to a single object

// let username = {fname : "Dinga"}
// let address = {city : "Goa"}
// let user = Object.assign(username,address)
// console.log(user);


//? Object.hasOwn(object_Name , "property_name") ==> returns boolean value , whether that property is present in tha object or not.

// let student = {
//     fname : "Dinga",
//     place : "Goa"
// }
// console.log(Object.hasOwn(student , "place"));    //* true
// console.log(Object.hasOwn(student , "age"));    //* false