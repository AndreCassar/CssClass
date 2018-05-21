var c = 0;
document.getElementById("clks").innerHTML += c;
document.getElementById("ul").style.display = "none";
function change(i) {
    if(document.getElementById(i).style.backgroundColor == "red")
    {
        document.getElementById(i).style.backgroundColor = "blue";    
    }
    else
    {
        document.getElementById(i).style.backgroundColor = "red";
    }
    
             // The function returns the product of p1 and
}

function hid() {
    c++;
    if(document.getElementById("ul").style.display == "")
    {
        document.getElementById("ul").style.display = "none";
        document.getElementById("btn").innerHTML = "Show";    
    }
    else
    {
            document.getElementById("ul").style.display = "";
            document.getElementById("btn").innerHTML = "Hide";
    }
    document.getElementById("clks").innerHTML = "Clicks: "+c;
    if(c > 5)
        document.getElementById("st").innerHTML = "Oh yes";
    if(c > 15)
        document.getElementById("st").innerHTML = "Pls stop oni-chan!!!!!";
    
}