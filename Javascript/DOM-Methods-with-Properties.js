//! DOM Methods with Properties

// todo : Example 1
// let text = document.getElementById("text")
// console.log(text);

// console.log(text.innerText);  // display only , what is visible in screen
// console.log(text.innerHTML);  // display entire inner html tags used 
// console.log(text.textContent);  // displays both visible & invisible contents (only text)

// todo : Example 2
// let msz = document.querySelector("#msz")
// msz.innerText = "I love Javascript"

//! Apply CSS
// msz.style.color = "red"
// msz.style.background = "yellow"

// msz.style.cssText = `color : blue ; background : yellow`

//! Add Image 
// let img = document.querySelector("img")
// img.src = "./Image/image-1.jpg"    //? Add src path for the image
// img.title = "Dynamic Image"        //? Add title name for the HTML Element

//! Add Title name for the Webpage
// document.title = "Dynamic Webpage"

//! Creating the HTML element & Adding the content
let h3Tag = document.createElement("h3")
h3Tag.innerText = "Welcome"
h3Tag.innerHTML += "<div> Nested Element </div>"
console.log(h3Tag);

//! To display the newly created in the screen 
document.body.appendChild(h3Tag)

//! Remove the HTML element (Remove the content only from the display)
h3Tag.remove()

let spiders = document.getElementsByClassName('text')
// console.log(spiders);
let colorWhite = "color : white"

spiders[0].style.cssText = `${colorWhite} ; background : Orange`
spiders[1].style.color = `blue`
spiders[2].style.cssText = `${colorWhite} ; background : green`

let divTag = document.getElementById('divTag')