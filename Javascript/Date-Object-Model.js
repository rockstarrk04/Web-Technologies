//! Date Object Model : It is used to display current data and time & it returns date in the form of string

let str =  Date()
console.log(str);
console.log(str.slice(0,7));

//todo : converting Date() to object using "new" keyword because to access the properties of object inbuilt method or else it  returns date in form of string


let dateObj = new Date()
console.log(dateObj);
console.log(dateObj.getDate());
console.log(dateObj.getDay());