console.error("Objects");

// todo : Creation of object using Direct Literal {}
// let obj = {}
// console.log(obj);
// console.log(typeof(obj));

// todo : Example 1 : create car object

let car = {
    carname : "BMW" , 
    carcolour : "Black",
    carMakeYear : 2020 , 
    isActive : true
}

// console.log(car);
// console.log(typeof(car));

//! Accessing the property of object

// todo : using dot operator
//? syntax : objectName.propertyName

// console.log(car.carname);
// console.log(car.isActive);
// console.log(`${car.carname} car colour is ${car.carcolour}`);


// // todo : using subScript operator
// //? syntax : objectName["propertyName"]

// console.log(car["carname"]);
// console.log(car["isActive"]);
// console.log(`${car["carname"]} car colour is ${car["carcolour"]}`);


//! Modification of Object properties (create , read , add , delete , update)
// todo : create an object with properties

//? using direct literal {}
let person = {
    fname : "Dinga",
    age : 25,
    place : "Goa"
}
console.log(person);


// todo : read properties of the object
//? Syntax : objectName.propertyName   (using dot operator)
// console.log(person.fname);

//? Syntax : objectName["propertyName"]    (using subscript operator)
console.log(person["fname"]);
console.log(`${person["fname"]} age is ${person["age"]}`);


// todo :  Add new property to the object
//? Syntax : objectName.NewPropertyName = newValue   (using dot operator)
// person.Gender = "Male"

//? Syntax : objectName["NewPropertyName"] = newValue    (using subscript operator)
person["Gender"] = "Male"
console.log(person);


// todo :  Delete property to the object
//? Syntax : delete objectName.PropertyName     (using dot operator)
delete person.Gender

//? Syntax : delete objectName["PropertyName"]      (using subscript operator)
delete person["Gender"]
console.log(person);


// todo : Update property to the object
//? Syntax : objectName.PropertyName = newValue    (using dot operator)
person.age = 29

//? Syntax : objectName["PropertyName"] = newValue      (using subscript operator)
person["age"] = 29
console.log(person);