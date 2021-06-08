async function myFunc(){
    console.log("Inside async");
    const response = await fetch('https://api.github.com/users');
    console.log("After response");
    const users = await response.json();
    console.log("After getting data");
    return users; 
    //return "astrid";
}

console.log("Before calling myFunc");
a = myFunc();
console.log("After assigning myFunc");
console.log(a);
console.log("Last line");