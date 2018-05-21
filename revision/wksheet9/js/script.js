var stuff = ["Chasing Cars", "Human", "Mr. Brightside", "Super Massive Black Hole", "Twisted Transistor", "Yellow", "Seven Nation Army"];
var fruits = new Array();
function ld() {
    //var stuff = ["Chasing Cars", "Human", "Mr. Brightside", "Super Massive Black Hole", "Twisted Transistor", "Yellow", "Seven Nation Army"];
    document.getElementById("p").innerHTML += stuff.length;
    
}
function fetch() {
    var i = document.getElementById("ind").value;
    if(document.getElementById("1").checked == true)
    {
        var res = stuff[i-1];
    }
    else
    {
        var res = stuff[i];
    }
    console.log(res);
    if(res == undefined)
    {
        document.getElementById("item").style.color = "red";
        document.getElementById("item").innerHTML = "0-6 only!";    
    }
    else
    {
        
        document.getElementById("item").style.color = "";
        document.getElementById("item").innerHTML = res;
    }    
}
function enter() {
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    var m3 = document.getElementById("m3").value;
    fruits[0] = m1;
    fruits[1] = m2;
    fruits[2] = m3;
    document.getElementById("ar").innerHTML = fruits.join();
}