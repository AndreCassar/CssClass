//var x = prompt("Enter");
function check() 
{
    var i = document.getElementById("in").value;
    var spl = /[^A-Za-z0-9]+/;
    if(i.match(spl) == null)
    {
        alert("Doesn`t contain specials")
    }
    else
        alert("Contains specials")
}