// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("You entered a button")
//     };
//     console.dir(btn);
// }

// // btns.onclick = function() {
// //     alert("Button was clicked")
// // }

// function sayHello() {
//     alert("Hello")
// }
// btns.onclick = sayHello;


//       ADD EVENT LISTENER
// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("You double clicked me");
//     });
// }

// function sayHello() {
//     console.log("Hello");
// }

// function sayName() {
//     console.log("Apna college");
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("para was clicked")
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("Kisi na ungli kari");
// })

//        THIS KEYWORD
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
        console.log(this.innerText);
        this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor) 
    // console.log(this);
    // console.dir(this);

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);