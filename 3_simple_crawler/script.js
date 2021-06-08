//let toOpen = prompt("Enter the link to crawl");
//location.href = `\\${toOpen}`;
let a = document.links;
let str = "javascript";
Array.from(a).forEach(function(element){
    if(element.href.includes("javascript")){
        console.log(element);
    }
})