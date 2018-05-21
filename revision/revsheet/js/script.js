var n = document.createElement("nav");
var u = document.createElement("ul");
var l = document.createElement("li");
var l2 = document.createElement("li");
var a = document.createElement("a");
var a2 = document.createElement("a");

var w = document.createTextNode("Welcome");
var d = document.createTextNode("Details");
a.appendChild(w);
a.href = "index.html";
a2.href = "details.html"
a2.appendChild(d);
l.appendChild(a);
l2.appendChild(a2);
document.body.appendChild(n);
n.appendChild(u);
u.appendChild(l);
u.appendChild(l2);
