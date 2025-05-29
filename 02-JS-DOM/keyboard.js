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
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Form submitted");
// })


//          EXTRACTING FORM DATA.
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // console.dir(form);
//     // console.dir(form.elements[0]);
//     // console.dir(form.elements[1]);
//     // console.dir(form.elements[2]);

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#password");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);



//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// })


//            MORE EVENTS.
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function() {
    console.log("changed event");
    console.log("final value : ", this.value);
});

user.addEventListener("input", function() {
    console.log("Input changed");
    console.log("final value : ", this.value);
});