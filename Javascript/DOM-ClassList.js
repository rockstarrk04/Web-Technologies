let box = document.getElementById('box')

let redColor = () => {
    box.classList.add('red')
    box.classList.remove('yellow')
    box.classList.remove('green')

    // box.style.background = 'red'
}

let yellowColor = () => {
    box.classList.add('yellow')
    box.classList.remove('red')
    box.classList.remove('green')

    // box.style.background = 'yellow'
}

let greenColor = () => {
    box.classList.add('green')
    box.classList.remove('red')
    box.classList.remove('yellow')

    // box.style.background = 'yellow'
}


let btn1 = document.getElementById('btn1')
btn1.addEventListener("click" , () => {
    // btn1.classList.replace("on" , "off")
    let bool = btn1.classList.contains("on")
    if (bool){
        btn1.classList.replace("on" , "off")
        btn1.innerText = "OFF"
    }else {
        btn1.classList.replace("off" , "on")
        btn1.innerText = "ON"
    }
})

let btn2 = document.getElementById('btn2')
btn2.addEventListener("click" , () => {
    btn2.classList.toggle("on")
    btn2.classList.toggle("off");
    (btn2.innerText === "ON") ? btn2.innerText = "OFF" : btn2.innerText = "ON"
})