console.error("Hoisting in Javascript");


console.log(a);  // undefined
var a = 10;
console.log(a);  // 10

fun()
var fun = function (){
    console.log("Hello");    // Hello
}

fun()

let func = function (){
    console.log("Hello");   // ReferenceError: Cannot access 'func' before initialization
}

func()   // Hello


fun1()
const fun1 = function (){
    console.log("Hello");   // ReferenceError: Cannot access 'fun1' before initialization
}

fun1()  // Hello