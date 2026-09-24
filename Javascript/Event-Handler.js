//! Events with DOM
//! Event Attribute

let singleClick = () => {
    console.log("Clicked single Time : Event Attribute");
}

let DoubleClick = () => {
    console.log("Clicked Double Time : Event Attribute");
}

let imageHover = () =>{
    console.log("Its a Deer : Event Attribute");
}

let enterkey = () =>{
    console.log("Key is pressed : Event Attribute");
}

//! Event Property

let btn1 = document.getElementById("btn-1") 
btn1.onclick = () => {
    console.log("Button is clicked : Event Property");
}

let img1 = document.getElementById("img-1")
img1.onmouseover = () => {
    console.log("It is a Bird : Event Property");
}

let input = document.getElementsByClassName("input")
input[0].onkeydown = () =>{
    console.log("Enter the Button");
}
input[1].onkeyup = () => {
    console.log("Key is pressed");
}

//! Event Method

let btn2 = document.getElementById("btn-2")
btn2.addEventListener("click" , () => {
    console.log("Button is clicked : Event Method");
})

let img2 = document.getElementById("img-2")
img2.addEventListener("mouseover" , () => {
    console.log("Its a Deer : Event Method" );
})

let input1 = document.getElementsByClassName("input1")
input1[0].addEventListener("keydown" , () => {
    console.log("Enter the Button");
})
input1[1].addEventListener("keyup" , () => {
    console.log("Key is Pressed");
})