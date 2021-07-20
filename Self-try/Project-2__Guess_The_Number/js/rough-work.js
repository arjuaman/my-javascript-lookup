// var desired = parseInt(Math.random() * 100)

// function action() {
//     // alert("Inside function action");
//     var input = document.getElementById("input-box");
//     var output = document.getElementById("output-element");
//     var num = parseInt(input.value);
//     if (num < desired)
//         output.innerText = "You guessed " + num + " which is LESS than desired value";
//     else if (num > desired)
//         output.innerText = "You guessed " + num + " which is MORE than desired value";
//     else 
//         output.innerText = " Correct!";
// }

// var desired = 25; //parseInt(Math.random() * 100)

// function action() {
//     var text;
//     var input = document.getElementById("input-box");
//     var output = document.getElementById("output-element");
//     var num = parseInt(input.value);

//     linebreak = document.createElement("br");

//     if (num < desired) {
//         text = document.createTextNode("You guessed " + num + " which is LESS than desired value");
//         output.appendChild(text);
//         output.appendChild(linebreak);
//     } else if (num > desired) {
//         text = document.createTextNode("You guessed " + num + " which is MORE than desired value");
//         output.appendChild(text);
//         output.appendChild(linebreak);
//     } else {
//         text = document.createTextNode(num+" is Correct!");
//         output.appendChild(linebreak);
//         output.appendChild(text);
        
//     }

// }