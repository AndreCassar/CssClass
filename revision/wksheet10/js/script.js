var persons = [];
function Person(fullname, email, age, id) {
    this.fullName = fullname;
    this.email = email;
    this.age = age;
    this.id = id;
}
function submit()
{
    var fn = document.getElementById("fn").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var i = document.getElementById("i").value;
    var p = new Person(fn, email, age, i);
    persons.push(p);
    alert(persons[0])
}
