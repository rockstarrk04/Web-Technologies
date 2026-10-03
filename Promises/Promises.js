//! Promises 

// let p = new Promise((resolve , reject) => {
//     let success = true;
//     if (success){
//         resolve("Congrats....")
//     } else {
//         reject("Better luck to next time")
//     }
// })

// // console.log(p);

// p.then((data) => {
//     console.log(data);
// })

// p.catch((err) => {
//     console.log(err);
// })

// p.finally(() => {
//     console.log("Task Completed");
// })

//! Promise Methods

// let resolve = Promise.resolve("Success")
// resolve.then((data) => {
//     console.log(data); 
// })

// let reject = Promise.reject("Failed")
// reject.catch((err) => {
//     console.log(err);
// })

// todo : Promise.all()
// let t1 = Promise.resolve("HTML")
// let t2 = Promise.resolve("CSS")
// let t3 = Promise.resolve("JS")

// let p = Promise.all([t1 , t2 , t3])
// p.then((data) => {
//     console.log(data);
// })

// todo : Promise.allSettled()
// let t1 = Promise.resolve("HTML")
// let t2 = Promise.reject("Error")
// let t3 = Promise.resolve("JS")

// let p = Promise.allSettled([t1 , t2 , t3])
// p.then((data) => {
//     console.log(data);
// })

// todo : Promise.race()
// let p1 = new Promise((res) => {
//     setTimeout(() => {
//         res("Promise 1")
//     } , 3000)
// })

// let p2 = new Promise((res) => {
//     setTimeout(() => {
//         res("Promise 2")
//     } , 1000)
// })

// let p = Promise.race([p1 , p2])
// p.then((data) => {
//     console.log(data);
// })