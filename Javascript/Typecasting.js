console.error('Typecasting in Javascript');

console.warn('Implicit Typecast Method');

console.log(10+true);  // 11
console.log(10 - true + true);  // 10

console.warn('Explicit Typecast Method');

console.log(Number('100'));  // 100
console.log(parseInt("10.25"));  // 10
console.log(parseFloat("100.321"));  // 100.321

console.log(Number('100px'));  // NaN
console.log(parseInt("10.25px"));  // 10
console.log(parseInt("px100.23")); // NaN
console.log(parseFloat("px100.321"));  // NaN

console.log(Number('100kg'));  // NaN
console.log(parseInt("10.25kg"));  // 10
console.log(parseFloat("100.321kg"));  // 100.321