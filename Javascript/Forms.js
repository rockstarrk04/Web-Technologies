let printName = (e) => {
    e.preventDefault()
    let displayName = document.getElementById("displayName")
    let fname = e.target[0].value
    let lname = e.target[1].value
    displayName.innerText = `My name is ${fname} ${lname}`
}


let ageCalc = (e) => {
    e.preventDefault()
    let displayAge = document.getElementById("displayAge")
    let name = e.target[0].value
    let dob = e.target[1].value
    let birthYear = dob.slice(0,4)
    let DateObj = new Date()
    let age = DateObj.getFullYear() - birthYear
    displayAge.innerText = `${name} age is ${age}`
}


let inputValidation = document.querySelector('#emptyFieldValidation')
let errormsz = document.getElementById("errormsz")
inputValidation.addEventListener("submit" , (event) => {
    event.preventDefault()
    let emailId = event.target[0]
    let password = event.target[1]
    if (emailId.value === "" || emailId.value === null){
        emailId.style.border = "solid 2px red"
        errormsz.innerText = "Enter Email Address"
        errormsz.style.cssText = `color:red ; text-align : center`
    }
    else if (password.value === "" || password.value === null){
        password.style.border = "solid 2px red"
        errormsz.innerText = "Enter Password"
        errormsz.style.cssText = `color:red ; text-align : center`
    }
    else{
        console.log(emailId.value);   
    }
})


// todo : Login Page 
let loginform = document.querySelector("#loginform")
loginform.addEventListener("submit" , (event) => {
    event.preventDefault()
    let emailField = event.target[0]
    let pswdField = event.target[1]

    // Create Crendentials Object
    let Crendentials = {
        email : "user@gmail.com",
        password : "user123"
    }
    let {email , password} = Crendentials

    if (emailField.value === email){
        if (pswdField.value === password){
            location.href = "./welcome.html"
        }else{
            alert("Invaild Password");
            pswdField.style.border = "solid 2px red"
        }
    }
    else{
        alert("Invaild Email");
        emailField.style.border = "solid 2px red"
    }
})