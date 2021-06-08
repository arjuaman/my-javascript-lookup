let a = {
    Name: "Astrid",
    Age: 24,
    Cheeks: "Soft"
};
console.log(a.Cheeks);
// a = document.all;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })

/*
Element selectors:
1. single element selector
2. multiple element selector

*/

//1. single element selector
 a = document.getElementById('first');
// console.log(a);

//a = a.className;

//a = a.childNodes;
a = a.parentNode;
console.log(a);

