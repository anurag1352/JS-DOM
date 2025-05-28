//Q.1
let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerHTML = "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

//Q.2
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "userName");

//Q.3
let button = document.querySelector("#btn");
button.classList.add("btnStyle");

//Q.4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1Style");

//Q.5
let para = document.createElement("p");
para.innerHTML = "Apna collge <b>delta</b> practice";
document.querySelector("body").append(para);
