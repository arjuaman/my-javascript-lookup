const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);
