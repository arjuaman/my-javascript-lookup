const btn = document.querySelector("#button_A");
const head = document.querySelector("#heading_A");

btn.onClick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
};