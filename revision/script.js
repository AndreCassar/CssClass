function degToFah() 
{
    var d = document.getElementById("deg").value;
    console.log(d);
    var f = ((d * 1.8) + 32);
    console.log(f);
    document.getElementById("fah").value = f;
    alert(f)
}