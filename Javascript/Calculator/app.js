let input = document.querySelector('input')

let getValue = (e) => input.value += e.target.innerText
let calculateRes = () => input.value = eval(input.value)
let clearAll = () => input.value = ""
// let getValue = (e) => {
//     let btnText = e.target.innerText
//     input.value += btnText 
// }

// let calculateRes = () => {
//     let res = eval(input.value)
//     input.value = res
// }

// let clearAll = () => {
//     input.value = ""
// }