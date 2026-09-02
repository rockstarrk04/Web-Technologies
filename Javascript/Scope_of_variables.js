// ! Scope of variable

console.error("Scope of variable");

// todo : Global Scope
// let a = 100;
// console.log(a);
// if(true){
//     console.log(a);
// }
// function fun(){
//     console.log(a);
// }
// fun()


// todo : block Scope
if(true){
     var p = "Hi" // ? function scope / Global scope in statement block
     let q = 100  // ? local scope / block scope
     const r = true; // ? local scope / block scope
    console.log(p,q,r);
}
console.log(p);


// todo : function Scope

function fun1(){
    // ? local scope
    var x = 100 // ? function scope
    let y = 200 // ? block scope
    const z = 300 // ? block scope
    console.log(x,y,z);
}
fun1()


// todo : Example

function demo(){
    if(true){
        var v1 = 100 //?function scope
        let v2 = 200 //?block scope
        const v3 = 300 //?block scope
        // console.log(v1,v2,v3);  //100,200,300
    }
    // console.log(v1); //100
    // console.log(v2); // Reference error : v2 is not defined
    // console.log(v3); // Reference error : v3 is not defined
}
// demo()


// ! Scope Chaining
// todo : Example Program : Scope chain & Lexical scope
// console.warn("Nested Function");

// function outer() {
//     function inner() {
//         console.log("Hello");
//     }
//     inner()
// }
// outer()

let A1 = 100  // Global Scope
function outer() {
    let A2 = 200  // block scope (outer function scope)
    function inner() {
        let A3 = 300  // block scope (inner function scope)
        console.log(A1);
        console.log(A2);
        console.log(A3);
    }
    inner()
}
outer() 