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