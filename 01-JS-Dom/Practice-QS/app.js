//Q.1
let p = document.createElement("p");
p.innerHTML = "Hey i'm Red";
document.querySelector('body').append(p);

p.classList.add("red")

//Q.2
let h3 = document.createElement("h3");
h3.innerHTML = "Hey i'm blue h31";
document.querySelector('body').append(h3);

h3.classList.add("blue")


//Q.3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");

h1.innerHTML = "I'm in a div";
para.innerHTML = "I'm para"

div.append(h1);
div.append(para);
div.classList.add("box");
document.querySelector('body').append(div);