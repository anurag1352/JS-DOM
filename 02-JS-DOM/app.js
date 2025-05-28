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
let btns = document.querySelectorAll("button");

for(btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("You double clicked me");
    });
}

function sayHello() {
    console.log("Hello");
}

function sayName() {
    console.log("Apna college");
}