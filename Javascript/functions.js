// ! Types of Function in Javascript
// 1.   General / Normal Function
// 2.   Anonymous Function
// 3.   Arrow Function
// 4.   Self Invoking Function
// 5.   Callback Function
// 6.   Higher Order Function


// console.warn('General / Normal Function');

// ? Function without parameter and without return statement

function sayHello(user){
    console.log(`Hello ${user}`);
}
// sayHello("Dinga")
// sayHello("Dingi")

function fun(){
    console.log("This is my 1st Example");
}
// fun()

function add(){
    let a = 10
    let b = 20
    let res = a+b
    console.log(`${a} + ${b} = ${res}`);
}
// add()

//? Function with parameter and without return statement
// todo : WAP to add two numbers using general function

function add2Number(a,b){
    let res = a+b;
    console.log(res);
}
// add2Number(100,300)
// add2Number(10,30)

// todo : WAP to check even or odd number using general Function with parameter

// function check_even_odd(num){
//     (num %2 == 0) ? console.log('Even') : console.log('Odd');
// }

// check_even_odd(101)
// check_even_odd(100)

//? Function without parameter and with return statement

function sender(){
    let x = 100
    console.log(`${x} - printing inside function`);
    return x
}
// receiver = sender()
// console.log(`${receiver} - printing outside function`);

//? Function with parameter and with return statement

function text(txt){
    let text = txt
    console.log(`Hello ${text} - printed inside function`);
    return text
}

// msg = text("Ram")
// console.log(`Hello ${msg} - printed outside function`);

function demo(value){
    console.log(value);
    return `${value}`
    
}

// demo("Hello")
// demo(100)

// todo : How to assign default value of paramter
function func(value = null){
    console.log(value);
}

// func()
// func("Hello")
function fun4(a = b = c = 420){
    // let b = "is"
    console.log(a);
    console.log(b);
    console.log(c);
    
}
// fun4("Dinga")


//! =================================================

// todo : WAP to print even from 20-30 using general function with parameter
function EvenNumber(a,b){
    console.warn(`Even numbers from ${a} - ${b}`);
    
    for (let i = a; i <= b; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}

// EvenNumber(20,30)

function EvenNumber(){
    let Start = Number(prompt('Enter Start number : '))
    let End = Number(prompt('Enter End number : '))
    if (Start > End){
        let temp = Start
        Start = End
        End = temp
    }
    console.warn(`Even numbers from ${Start} - ${End}`);
    
    for (let i = Start; i <= End; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}


/* // todo : WAP to print odd from 20-30 using general function with parameter
    NOTE : Take input from user using prompt()
*/

function OddNumber(){
    let Start = Number(prompt('Enter Start number : '))
    let End = Number(prompt('Enter End number : '))
    if (Start > End){
        let temp = Start
        Start = End
        End = temp
    }
    console.warn(`Odd numbers from ${Start} - ${End}`);
    
    for (let i = Start; i <= End; i++){
        if (i%2 == 1){
            console.log(i);
        }
    }
}


/* // todo : WAP to add two numbers
    NOTE :
    ---> Take input from user using prompt() while onclick button
    ---> if input value is NaN print Not a Number or else perform operation
*/

function add2Number(){
    let Start = parseFloat(prompt('Enter Start number : '))
    let End = parseFloat(prompt('Enter End number : '))
    if (isNaN(Start) || isNaN(End)){
        alert("It is Not a Number")
    }
    else{
        alert(`${Start} + ${End} = ${Start+End}`);
    }
}

/* // todo : WAP to check +ve or -ve
    NOTE :
    ---> Take input from user using prompt() while onclick button
    ---> if input value is NaN print Not a Number or else perform operation
*/

function pos_or_neg(){
    let num = parseFloat(prompt('Enter number : '))

    // if (num == 0){
    //     alert(`${num} is neither +ve nor -ve`)
    // }
    // else if ( num > 0){
    //     alert(`${num} is Positive`)
    // }
    // else if (num < 0){
    //     alert(`${num} is Negative`)
    // }
    // else{
    //     alert('It is Not a Number')
    // }

    Number.isNaN(num) ? alert('It is Not a Number') :
    num > 0 ? alert(`${num} is Positive`) :
    num < 0 ? alert(`${num} is Negative`) : 
    alert(`${num} is neither +ve nor -ve`);
}

// ! Programs with Parameter & return statements
/* todo : WAP to check even or odd using general function with paramter and return statement 
(NOTE : check even/odd number when parameter is holding number data else return as Invalid Option)
*/

function evenOdd(num = null){
    if (!Number.isNaN(num)){
        return `${num} is neither +ve nor -ve`
    }
    else if ( num % 2 == 0){
        return `${num} is even`        
    }
    else{
        return `${num} is neither +ve nor -ve`
    }
}

// evenOdd(10)

// =============================================================================

//todo: WAP to find largest of Two numbers using general function with parameter and return statement 
// (NOTE: find largest of 2 number when parameter is holding number data or else return as Invalid Option)

function largest_of_two(a,b) {
    if (typeof a === 'number' && typeof b === 'number'){
        return (a > b) ? console.log(`${a} is largest`) : console.log(`${b} is largest`) ;
    }
    else
        console.log("Invalid Option");
}
// largest_of_two(10,20);


//todo: WAP to find largest of Three numbers using general function with parameter and return statement 
// (NOTE: find largest of 3 numbers when parameter is holding number data or else return as Invalid Option)

function largest_of_three(a,b,c){
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
        if (a > b && a > c)
            return console.log(`${a} is largest`);
        else if (b > a && b > c){
            return console.log(`${b} is largest`);
        }
        else
            return console.log(`${c} is largest`);
    }
}

// largest_of_three(100,30,25)


//todo: Factorial Program of Number using general function with parameter and return statement 
// (NOTE: print factorial number when parameter is holding number data or else return as Invalid Option)

function factorial(num){
    if (typeof num === "number"){
        if (num === 0 || num === 1)
            return console.log(`Factorial of ${num} is 1`);
        else{
            fact = 1
            i = 1
            while (i <= num){
                fact *= i;
                i++;
            }
            return console.log(`Factorial of ${num} is ${fact}`);
        }
    }
    else{
        console.log('Invalid Option');
    }
}

// factorial(5)


// console.warn("Anonymous Function");

// todo : Function without parameter and without return statement
let a = function(){
    console.log("This is my first example");
}
// a()


// todo : Function with parameter and without return statement
let b = function(a,b){
    let res = a+b
    console.log(`${a} + ${b} = ${a+b}`);
}
// b(10,20)

// todo :  Function without parameter and with return statement
let c = function(){
    let a = 10
    let b= 20
    return a+b;
}
res = c()
// console.log(res);


// todo :  Function with parameter and with return statement
let d = function(a,b,c){
    return a+b+c
}
res = d(10,20,30)
// console.log(res);


// ====================================================
// console.warn("Arrow Function");


// todo :  Function without parameter and without return statement
let Arrow1 = () => {
    console.log("Hello");
}
// Arrow1()

// todo :  Function with parameter and without return statement
let Arrow2 = (a,b) => {
    let val = a + b
    console.log(res);
}
// Arrow2(10,20)

// todo :  Function without parameter and with return statement
let Arrow3 = (a,b) => {
    return a+b
}
let val = Arrow3(10,50)
// console.log(val);

// todo :  Function with parameter and with return statement
let Arrow4 = (a,b,c) => {
    return a+b+c
}
let value = Arrow4(10,50,10)
// console.log(value);


let arrowEvenOdd = (number) => {
    return (number%2 == 0) ? `${number} is Even` : `${number} is odd` ;
}
// console.log(arrowEvenOdd(100));

// =========================================

// ! Special behaviour of Arrow function
// todo : Example 1 - In arrow function , if we have only one line statement , then curly braces is optional
let arr1 = () => console.log("Welcome");
// arr1()



// ======================================================
console.warn("Self invoking Function");

//! Self invoking Function / Immediate Invoking Function
// ? Self invoking Function - using general function
// (function Self(){
//     console.log("Hello SIF , using general function");
// }) ()

//? (or)  

// (function Self(){
//     console.log("Hello SIF , using general function");
// }() ) 


// ? Self invoking Function - using anonymous function
// (function (){
//     console.log("Hello SIF , using anonymous function");
// }) ()

// ? (or)

// (function (){
//     console.log("Hello SIF , using anonymous function");
// } () ) 

// ? Self invoking Function - using arrow function
// (() => {
//     console.log("Hello SIF , using arrow function");
// }) ()


// todo : Example program 1 : SIF with parameter and return statement

let returnValue = (function (a , b){
    let res = a + b
    return (`${a} + ${b} = ${res}`);
}) (10 , 30)

// console.log(returnValue);

// res = ((num) => {
//     return num % 2 == 0 ? `${num} is Even` : `${num} is Odd` ;
// }) (21)
// console.log(res);

// ? Shortform of above code using special behaviour of arrow function

// console.log((num => num % 2 == 0 ? `${num} is Even` : `${num} is Odd`) (21));