// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("Button Clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("Key was presed");
// })

// inp.addEventListener("keyup", function() {
//     console.log("Key was relesed");
// })

//      FORM EVENT
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted");
})