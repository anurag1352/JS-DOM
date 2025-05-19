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
// console.log(document.querySelector("p"));
// console.log(document.querySelector("#footer"));
// console.log(document.querySelector(".project-card"));
// console.log(document.querySelector("section div"));
// console.log(document.querySelectorAll("section div"));


//SETTING CONTENT IN OBJECTS (MANIPULATION).
// console.log(document.querySelector("p"));
// let para = document.querySelector(".peter");
// console.dir(para);
// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(para.textContent);
// para.innerText = "abc";
// console.log(para);

// let heading = document.querySelector("h1");
// console.log(heading.innerText);
// heading.innerHTML = `<u>${heading.innerHTML}</u>`;
// console.log(heading);

//MANIPULATING ATTRIBUTES.

// let self = document.querySelector(".about");
// console.log(self);
// console.log(self.getAttribute('id'));
// self.setAttribute('id', 'spiderMan');
// console.log(self.getAttribute('id'));


//MANIPULATING STYLE

// let head = document.querySelector("h1");
// console.log(head);
// console.log(head.style);

// head.style.color = "white";
// console.log(head)

// let skill = document.querySelectorAll("#skills .skill-list");

// for(mySkill of skill){
//     mySkill.style.color = "red";
// }
