
document.getElementById("1").addEventListener("click", clicked);
document.getElementById("1").addEventListener("mouseout", mouseOut);
    
document.getElementById("2").addEventListener("mouseover", mouseOver);
document.getElementById("2").addEventListener("mouseout", mouseOut);
document.getElementById("3").addEventListener("focus", focused);
document.getElementById("3").addEventListener("focusout", unfocused);
document.getElementById("4").addEventListener("mousedown", mousedown4);
document.getElementById("user").addEventListener("focusout", checkUsername);
document.getElementById("pass").addEventListener("focusout", checkPassword);
    
    

document.getElementById("1").addEventListener("mousemove", function(event) {
    myFunction(event);
});
    
function clicked()
{
    document.getElementById("1").value = "CLICK Event";
}
function myFunction(e) {
    document.getElementById("1").value = "mouse is moving";
    document.getElementById("1").style.color = "pink";
}
    
function mouseOver() {
    document.getElementById("2").value = "mouse is over";
    document.getElementById("2").style.color = "blue";
}
function mouseOut() {
    this.value = "";
    this.style.color = "black";
}

function focused()
{
    document.getElementById("3").value = "this is focused!";
}

function unfocused()
{
    document.getElementById("3").value = "";
}
function mousedown4()
{
    alert("Similar to click event!");
}
function checkUsername()
{
    var username = document.getElementById("user").value;
    document.getElementById("uv").style.color = "red";
    if(username == "")
    {
        document.getElementById("uv").innerHTML = "Please Enter your username!";
    }
    else
    {
        if(username.length < 5)
        {
            document.getElementById("uv").innerHTML = "Username must be at least 5 characters long!";
        }
        else
        {
            document.getElementById("uv").innerHTML = "";
        }
    }
    
}
function checkPassword()
{
    var pass = document.getElementById("pass").value;
    document.getElementById("pv").style.color = "red";
    if(pass == "")
    {
        document.getElementById("pv").innerHTML = "Please Enter your Password!";
    }
    else
    {
        if(pass.length < 6)
        {
            document.getElementById("pv").innerHTML = "Password must be at least 5 characters long!";
        }
        
        else
        {
            var spl = /[^A-Za-z]+/;
        alert(pass.match(spl));
            if(pass.match(spl) == null)
            {
                alert("asfsfsg")
                document.getElementById("pv").innerHTML = "Password contain at least one special char";
            }
            else
            {
                document.getElementById("pv").innerHTML = "";
            }
        }
    }
}
