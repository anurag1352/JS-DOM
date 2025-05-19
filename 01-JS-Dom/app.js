// console.log(window);
// console.log(document);
// console.dir(document.all);

// //access h1 at index 8.
// console.dir(document.all[8]);
// console.dir(document.all[8].innerHTML);

// //change the value of h1
// document.all[8].innerHTML = "Peter parker";
// console.dir(document.all[8].innerHTML);

// //SELECTING ELEMENTS.

// //Elementby ID.
// console.log(document.getElementById("footer"));
// //Let store into variable (it's a object).
// let foot = document.getElementById("footer");
// console.log(foot);
// console.dir(foot);
// console.dir(foot.tagName);

//Elementby ClassName.
// console.log(document.getElementsByClassName("project-card"));
// console.log(document.getElementsByClassName("project-card")[0].tagName);

// let card = document.getElementsByClassName("project-card");

// for(let i = 0; i <= card.length; i++){
//     console.log(card);
// }

//Elementby TagName.
// console.log(document.getElementsByTagName("p"));
// let change = document.getElementsByTagName("P") [1].innerHTML = "abc";
// console.log(change);

//QUERY SELECTORS.
console.log(document.querySelector("p"));
console.log(document.querySelector("#footer"));
console.log(document.querySelector(".project-card"));
console.log(document.querySelector("section div"));
console.log(document.querySelectorAll("section div"));