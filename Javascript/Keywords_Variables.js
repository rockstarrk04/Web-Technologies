// var , let , const
// dec , init , re-init , re-dec

console.log('var keyword');
// possible: dec , init , re-init , re-dec

var a; // declaration
a = 100; // initial
console.log(a)

var a; // re-declaration
a='hello' // re-initial
console.log(a);


console.log('let keyword');
//  possible : dec , init , re-init , 

let b; // declaration
b = 100; // initial
console.log(b)
b = true // re - initial 
console.log(b);


let b; // re-declare not possible // Identifier 'b' has already been declared
b='hello'
console.log(b);


console.log('const keyword');
//  possible : dec , init

const a; // declaration
a = 100; // initial
console.log(a)
a = false // re-initial not possible // Missing initializer in const declaration

const a; // re-declare not possible // Identifier 'b' has already been declared
a='hello'
console.log(a);