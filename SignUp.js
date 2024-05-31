function checkDate(x){
    if(x == ""){
        return false
    }
    else{
        for(i=0; i< x.length; i++){
            if(isNaN(x[i])){
                return false
            }
        }
    }
    return true
}

function validationCheck(){
    var username = document.getElementById("usernametxt").value
    var password = document.getElementById("passwordtxt").value
    var confirmpass = document.getElementById("confirmpasstxt").value
    var date = document.getElementById("datetxt").value
    var month = document.getElementById("monthtxt").value
    var year = document.getElementById("yeartxt").value
    var genderM = document.getElementById("genderM").checked
    var genderF = document.getElementById("genderF").checked
    var tnc = document.getElementById("tnc").checked

    if(username == ""){
        alert("Fill the Username min 5 character")
    }
    else if(username.length < 5){
        alert("Fill the Username min 5 character")
    }
    else if(password == ""){
        alert("Fill the Password min 8 character")
    }
    else if(password.length < 6){
        alert("Fill the Password min 8 character")
    }
    else if(confirmpass == ""){
        alert("Fill the Password")
    }
    else if(confirmpass != password){
        alert("Password doesn't match")
    }
    else if(date.length < 0 && date.length > 2){
        alert("Date only 1-31")
    }
    else if(!checkDate(date)){
        alert("Only insert Number")
    }
    else if(month == ""){
        alert("Choose month")
    }
    else if(year.length < 0 && year.length > 4){
        alert("Year only 4 Number")
    }
    else if(!checkDate(year)){
        alert("Only insert Number")
    }
    else if(!genderM && !genderF){
        alert("Choose the Gender")
    }
    else if(!tnc){
        alert("Check the T&C")
    }
    else {
        window.location.replace("MoviesPage.html")
    }
    
}