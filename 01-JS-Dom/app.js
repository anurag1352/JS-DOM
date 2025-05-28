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

//CLASS-LIST
let section = document.querySelector('.projects .project-card');
console.log(section.classList);

let heading = document.querySelector('h1');
console.log(heading.classList);

heading.classList.add("abc");
console.log(heading.classList);

// heading.classList.remove("abc");
// console.log(heading.classList);

let valid = heading.classList.contains("abc");
console.log(valid);

let toggle = heading.classList.toggle("abc");
console.log(toggle);
console.log(toggle.classList);

//NAVIGATION
let h3 = document.querySelector('h3')
console.log(h3.parentElement);

let projectCard = document.querySelector(".project-card");
console.log(projectCard.children);
console.log(projectCard.childElementCount);

let skill = document.querySelector("#skills");
console.log(skill.children);

let ul = document.querySelector("#skills ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);
console.log(ul.childElementCount);

let h1 = document.querySelector(".hero");
console.log(h1.children);

//  ADDING ELEMENT.

// let newP = document.createElement("p");
// console.dir(newP);
// newP.innerHTML = "Hey i new p";

// // let body = document.querySelector("body");
// // body.appendChild(newP);

// let skills = document.querySelector("#skills .skill-list");
// skills.appendChild(newP);

// newP.append(" This is new text");
// newP.prepend(" New paragraph ");

// let btn = document.createElement("button");
// console.dir(btn);
// btn.innerHTML = "Click me";

// let skil = document.querySelector("#skills .skill-list");
// skil.appendChild(btn);

let btn = document.createElement("button");
console.dir(btn);
btn.innerHTML = "Click me";

let about = document.querySelector(".about .peter");
// about.insertAdjacentElement('beforebegin', btn);
//about.insertAdjacentElement('afterbegin', btn);
//about.insertAdjacentElement('afterend', btn);
about.insertAdjacentElement('beforeend', btn);

//    REMOVE ELEMENTS
let body = document.querySelector(".about .peter");
let dlt = body.removeChild(btn);
console.log(dlt);
