const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm")
const errorMessage = document.getElementById("error-message")


form.addEventListener("submit", (e) =>{
    let errors = []
    if(email){
        errors = getSignUpErrors(username.value, email.value, password.value, confirmPassword.value)
    }
    else{
        errors = getLogInErrors(username.value, password.value)
    }
    if(errors.length > 0){
        e.preventDefault()
        errorMessage.innerText = errors.join(". ")
    }
})







function getSignUpErrors(myName, myEmail , myPassword , myConfirmPassword){
    let myErrors = []
    if(!myName){
        myErrors.push("Username is required")
        username.parentElement.classList.add("incorrect")
        username.parentElement.classList.add("disabled")   
    }
    if(!myEmail){
        myErrors.push("Email is required")
        email.parentElement.classList.add("incorrect")
        email.parentElement.classList.add("disabled")
    }
    if(!myPassword){
        myErrors.push("Password is required")
        password.parentElement.classList.add("incorrect")
        password.parentElement.classList.add("disabled")
    }
    if(myPassword.length < 8){
        myErrors.push("Password must be 8 characters")
        password.parentElement.classList.add("incorrect")
        password.parentElement.classList.add("disabled")
    }
    if(myPassword !== myConfirmPassword){
        myErrors.push("Password's must match")
        password.parentElement.classList.add("incorrect")
        confirmPassword.parentElement.classList.add("incorrect")
        password.parentElement.classList.add("disabled")
        confirmPassword.parentElement.classList.add("disabled")

    }
    return myErrors

}
function getLogInErrors(myName, myPassword){
    let myErrors = []
    if(!myName){
        myErrors.push("Username is required")
        username.parentElement.classList.add("incorrect")
        username.parentElement.classList.add("disabled")
    }
    if(!myPassword){
        myErrors.push("Password is required")
        password.parentElement.classList.add("incorrect")
        password.parentElement.classList.add("disabled")
    }
    return myErrors

}
const allInputs = [username, email, password, confirmPassword].filter(item => item !== null)
allInputs.forEach(input => {
    input.addEventListener("input", () =>{
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect")
            input.parentElement.classList.remove("disabled")
            errorMessage.innerText = ""
        }
    })
})