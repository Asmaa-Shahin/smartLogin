



var userName = document.getElementById("signUpName");
var userEmail = document.getElementById("signUpEmail");
var userPassword = document.getElementById("signUpPassword");
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");

var userNameInut = localStorage.getItem("userName");



var users;


if (localStorage.getItem("userList") == null) {

    users = [];


}




else {


    users = JSON.parse(localStorage.getItem("userList"));

}
console.log(users)
function signUp() {
    if ((checkInputValidation() == true && isExist() == false) ) {

        var user = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value


        };
        users.push(user);

        localStorage.setItem("userList", JSON.stringify(users));
        document.getElementById("alert2").classList.replace("d-none", "d-block");
        document.getElementById("alert").classList.replace("d-block", "d-none");

        console.log(users);


    } else {

        document.getElementById("alert2").classList.replace("d-block", "d-none");
        document.getElementById("alert").classList.replace("d-none", "d-block");
    }


}

function checkInputValidation() {

    if (userNameValidation() == true && emailValidation() == true && passwordValidation() == true) {

        return true;




    } else {

        return false;
    }


}

function userNameValidation() {

    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
    if (regex.test(userName.value) == true && userName.value != "") {

        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        document.getElementById("userNameAlert").classList.replace("d-block", "d-none");
        return true;
    }
    else {

        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        document.getElementById("userNameAlert").classList.replace("d-none", "d-block");

        return false;
    }




}
function emailValidation() {

    var regex = /@[a-z]{3,10}(\.com)$/;
    if (regex.test(userEmail.value) == true && userEmail.value !== "") {

        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        document.getElementById("userEmailAlert").classList.replace("d-block", "d-none");
        return true;
    }
    else {

        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        document.getElementById("userEmailAlert").classList.replace("d-none", "d-block");

        return false;
    }




}
function passwordValidation() {

    var regex = /^.{3,15}$/;
    if (regex.test(userPassword.value) == true && userPassword.value !== "") {

        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        document.getElementById("userPasswordAlert").classList.replace("d-block", "d-none");
        return true;
    }
    else {

        userPassword.classList.add("is-invalid");
        userPassword.classList.remove("is-valid");
        document.getElementById("userPasswordAlert").classList.replace("d-none", "d-block");

        return false;
    }




}



function isExist() {

    for (var i = 0; i < users.length; i++) {

       
        if (users[i].name.toLowerCase() == userName.value.toLowerCase() ||
            users[i].email.toLowerCase() == userEmail.value.toLowerCase()) {

            userName.classList.remove("is-valid");
            userEmail.classList.remove("is-valid");
            document.getElementById("alert3").classList.replace("d-none", "d-block");
            return true;

        }

        else {


            document.getElementById("alert3").classList.replace("d-block", "d-none");
            
      

        }


    }

    return false;

}









//login


function checkLoginInputs() {

    for (var i = 0; i < users.length; i++) {


        if ((signInEmail.value == users[i].email && users[i].password == signInPassword.value)) {


            localStorage.setItem("userName", users[i].name);


            document.getElementById("correct2").classList.replace("d-block", "d-none");
            register.setAttribute("href", "home.html");

        

        }
        else {

            document.getElementById("correct2").classList.replace("d-none", "d-block");
        }
        

    }

 

}

//logout

function welcome() {
    document.getElementById("welcome").innerHTML = `welcome ${userNameInut}`;


}



function logout() {

    localStorage.removeItem("userName");
    document.getElementById("logOut").setAttribute("href", "index.html");

}

















