//! Using Event Attribute

let onOffBtn = (e) => {
    let btnText = e.target.innerText
    if (btnText === "ON") {
        e.target.innerText = "OFF"
        e.target.style.cssText = `color : red ; border : solid 4px red`
    }
    else {
        e.target.innerText = "ON"
        e.target.style.cssText = `color : green; border : solid 4px green`
    }
}

//! Using Event Property

let btn2 = document.querySelector("#btn2")
btn2.onclick = () => {
    let btnText = btn2.innerText
    if (btnText === "ON"){
        btn2.innerText = "OFF"
        btn2.style.cssText = `color : red ; border : solid 4px red`
    }
    else{
        btn2.innerHTML = "ON"
        btn2.style.cssText = `color : green ; border : solid 4px green`
    }    
}

//! Using Event Method

let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click" , () => {
    let btnText = btn3.innerText
    if (btnText === "ON"){
        btn3.innerText = "OFF"
        btn3.style.cssText = `color : red ; border : solid 4px red`
    }
    else{
        btn3.innerHTML = "ON"
        btn3.style.cssText = `color : green ; border : solid 4px green`
    }
})

// Todo : addEventListener Method with event object

let btn4 = document.querySelector("#btn4")
btn4.addEventListener("click" , (event) => {
    let btnText = event.target.innerText
    if (btnText === "ON"){
        event.target.innerText = "OFF"
        btn4.style.cssText = `color : red ; border : solid 4px red`
    } else{
        event.target.innerText = "ON"
        btn4.style.cssText = `color : green ; border : solid 4px green`
    }
})


let dayNightbtn = document.getElementById("dayNightbtn")
dayNightbtn.onclick = () => {
    if (dayNightbtn.innerText === "Day"){
        dayNightbtn.innerText = "Night"
        document.body.style.cssText = `color:White ; background:black`
    }else{
        dayNightbtn.innerText = "Day"
        document.body.style.cssText = `color:black ; background:white`
    }
}

let GenerateOTP = document.getElementById('GenerateOTP')
let generateOTP = () => {
    let randomNumber = Math.random() * 10000
    let otp = Math.floor(randomNumber)
    if (otp > 1000){
        GenerateOTP.innerText = otp
    }else{
        generateOTP()
    }
}