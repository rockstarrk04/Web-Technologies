console.error("String in Javascript");

console.warn("Strings");

// todo : String Concatenation
let str = "JavaScript"
console.log(str);
console.log("I Love"+ str);
console.log("I Love "+ str);

console.log("I Love", str);
console.log("I Love ", str);    


// Todo : String Interpolation
console.log(`I Love ${str}`);

//! String Methods

let text = "Javascript"
console.log(text);   // Javascript
console.log(typeof(text));   // string
console.log(text.length);   // 10
console.log(text[3]);   // a
console.log(text[-3]);   // undefined



// ? NOTES:
/*
    --> charAt() and at() are used to get a character from a string based on its index position.
    --> In charAt() we can work only with positive index and not with negative index 

 */

let s1 = "Javascript"
console.log(s1);  // Javascript

// todo : length
console.log(s1.length);   // 10

// todo : charAt()
console.log(s1.charAt(4));   // s
console.log(s1.charAt(-4));  // empty string

// todo : at()
console.log(s1.at(5));   // c
console.log(s1.at(-5));  // c

// todo : charCodeAt()
console.log(s1.charCodeAt(6));   // 114
console.log(s1.charCodeAt(-7));  // NaN
console.log(s1.at(-9).charCodeAt(0));  // 97

// todo : toUpperCase() , toLowerCase()
console.log(s1.toLowerCase());    // javascript
console.log(s1.toUpperCase());    // JAVASCRIPT

// todo : startsWith() , endsWith()
/*
    NOTE: 
    --> startsWith() checks whether the string starts with specified text
        syntax : string.startsWith (searchString , indexPosition)
    
    --> endsWith() checks whether the string ends with specified text
        syntax : string.endsWith (searchString , length)
    
    --> Both returns the boolean value (true / false)
*/

console.log(s1.startsWith("Java"));     // true
console.log(s1.startsWith('ava'));     // false
console.log(s1.startsWith("a" , 1));    // true

console.log(s1.endsWith("t"));          // true
console.log(s1.endsWith("J"));          // false