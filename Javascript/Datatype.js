document.write(`<h2>Datatypes in Javascript</h2>`)
/*
Types of Datatype in JavaScript:
    1)  Primitive :
            * number
            * string
            * boolean
            * undefined
            * null
            * big int

    2)  Non-Primitive :
            * array
            * object
            * functions
*/

console.warn(`number datatype`)
let a = 100;
console.log(a);
console.log(typeof(a));

console.warn(`string datatype`)
// string can be declared by using '' , "" , ``(bacltik is recommended)
let b = `I'm using string datatype`
console.log(b);
console.log(typeof(b));

console.warn(`boolean datatype`)
let c = true
console.log(c);
console.log(typeof(c));


console.warn(`undefined datatype`);
let d
console.log(d); // undefined (here, value)
console.log(typeof(d));  // undefined (here, datatype)
//  NOTE : undefined is  default value of the variable in Javascript and its datatype is undefined itself.


console.warn(`null dataype`);
let a1 = null
console.log(a1);    // null
console.log(typeof(a1));    // object

// Using in-built methods
// typecasting

// Number()
console.error(`Using inbuilt method`);
console.warn(`Number()`);

let n1 = Number(120);
console.log(n1);
console.log(typeof(n1));

let n2 = Number(`abc`);
console.log(n2); // Nan (Not a Number)
console.log(typeof(n2)); // number


let n3 = Number(true);
console.log(n3); // 1
console.log(typeof(n3)); // number

let n4 = Number(false);
console.log(n4); // 0
console.log(typeof(n4)); // number

// String()
console.warn(`String()`);

let str1 = String(100)
console.log(str1); // 100 (as a string)
console.log(typeof(str1)); // string

let str2 = String(true)
console.log(str2); // true (as a string)
console.log(typeof(str2)); // string

let xyz = `i love js`
let str3 = String(xyz)
console.log(str3); // i love js
console.log(typeof(str3)); // string

// Boolean()
console.warn(`Boolean()`);
let bool1 = Boolean(true)
console.log(bool1); // true 
console.log(typeof(bool1)); // boolean

let bool2 = Boolean(10)
console.log(bool2); // true 
console.log(typeof(bool2)); // boolean

// any value other than 0 is considered as true in boolean (including -ve value)

let bool3 = Boolean(0)
console.log(bool3); // false
console.log(typeof(bool3)); // boolean

let bool4 = Boolean(-10)
console.log(bool4); // true 
console.log(typeof(bool4)); // boolean

let bool5 = Boolean(``)    // any character or string is considered as true in boolean 
console.log(bool5); // false
console.log(typeof(bool5)); // boolean

let bool6 = Boolean(`a`)
console.log(bool6); // true
console.log(typeof(bool6)); // boolean

let bool7 = Boolean(8+3)
console.log(bool7); // true
console.log(typeof(bool7)); // boolean

let bool8 = Boolean(!8+3)   // 8+3 --> 11 (true) ---> !true = false ----> 0
console.log(bool8); // false
console.log(typeof(bool8)); // boolean

// Undefined()
console.warn(`Undefined()`);
let u1 = undefined;
console.log(u1); // undefined
console.log(typeof(u1));  // undefined


// **checking the values of keywords in Javascript**
console.warn(`checking the values of keywords in Javascript`);

console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number(undefined));  // Nan
console.log(Number(null));  // 0

// **default value of in-built method**
console.warn(`default value of in-built method`);

console.log(Number()); // 0
console.log(String()); // ''
console.log(Boolean()); // false