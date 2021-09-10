var usernamevar2 = document.getElementById("loginoldaccusername").value;
var passwordvar2 = document.getElementById("loginoldaccpassword").value;

var localstorage = localStorage.getItem("username")
var localstorage2 = localStorage.getItem("password")



function backfunction()
{
    window.location = "index.html";
}
function changescreen()
{
    if(usernamevar2 = "")
    {
        document.getElementById("h41").innerHTML = "Please type in your username before signing up!";
    }
    if(passwordvar2 = "")
    {
        document.getElementById("h41").innerHTML = "Please type in your password before signing up!";
    }
    else if(usernamevar2 == localstorage && passwordvar2 == localstorage2)
    {
        window.location = "kwitter_home.html";
    }
}