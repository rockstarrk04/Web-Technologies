let display = document.getElementsByTagName('h2')

let DigitalClock = () => {
    let DateObj = new Date()
    display[0].innerText = DateObj.toLocaleTimeString()
    display[1].innerText = DateObj.toLocaleDateString()
    let curDay = DateObj.getDay()

    switch(curDay){
        case 0 : curDay = "Sunday"; break;
        case 1 : curDay = "Monday"; break;
        case 2 : curDay = "Tuesday"; break;
        case 3 : curDay = "Wednesday"; break;
        case 4 : curDay = "Thursday"; break;
        case 5 : curDay = "Friday";break;
        case 6 : curDay = "Saturday";break;
    }
    display[2].innerText = curDay
}