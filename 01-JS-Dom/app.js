console.log(window);
console.dir(document);
console.dir(document.all);

//access h1 at index 8.
console.dir(document.all[8]);
console.dir(document.all[8].innerHTML);

//change the value of h1
document.all[8].innerHTML = "peter parker";
console.dir(document.all[8].innerHTML);