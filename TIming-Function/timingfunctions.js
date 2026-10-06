//! timing functions
/**
   -> timing functions are used to execute a function after a certain amount of time or delay the execution time or repeatedly at a fixed time interval
   -> timing should pass in milliseconds (1000 milliseconds = 1second)
 */
//? window.setTimeout()
//? window.setInterval()
//? window.closeTimeout()
//? window.closeInterval()

//todo: setTimeout() :- it executes a function once after a specified delay

//? window.setTimeout(CBF , timer)

// setTimeout(()=>{
//     console.log("hello");
// },3000)

//todo: setInterval() ;- it executes a function repeatedly after every specified interval

//? window.setInterval(CBF , timer)
// setInterval(()=>{
//     console.log("JavaScript");
// },1000)

//todo:clearTimeout() : it is used to terminate a setTimeOut() function before it executes & it accepts the return valye of seTimeout()

//todo: clearInterval() : it is used to terminate a setInterval() functon & it accepts the return value of setInterval()

//! example program : to print "hello" msz for 5 times in every second

let x= setInterval(()=>{
    console.log("hello");
},1000)
setTimeout(() => {
    clearInterval(x)
    console.log("stop")
}, 5000);

//! 
let num=1
let printnumbers=()=>{
    console.log(num++);
}
let reset=()=>{
    num=1
}

//! Timer
// let timer=()=>{
//     let val=10;
//     let s=setInterval(()=>{
//         console.log(val--);
//     },1000)
//     setTimeout(()=>{
//         clearInterval(s)
//         console.log("Time Up")
//     },10000)
// }