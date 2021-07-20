// var desired = 25;                             //for debugging
var desired = parseInt(Math.random() * 100)

function action() {
    var text;
    var input = document.getElementById("input-box");
    var output = document.getElementById("output-element");
    var num = parseInt(input.value);

    linebreak = document.createElement("br");

    if (num < desired) {
        text = document.createTextNode("You guessed " + num + " which is LESS than desired value");
        output.appendChild(text);
        output.appendChild(linebreak);
    } else if (num > desired) {
        text = document.createTextNode("You guessed " + num + " which is MORE than desired value");
        output.appendChild(text);
        output.appendChild(linebreak);
    } else {
        output.appendChild(linebreak);
        let element = document.createElement('div');
        text = document.createTextNode(num+" is CORRECT!");
        element.appendChild(text);
        element.style.color = "brown";
        element.style.fontFamily = "Helvetica";
        element.style.fontWeight = "bold";
        output.appendChild(element);
    }

}