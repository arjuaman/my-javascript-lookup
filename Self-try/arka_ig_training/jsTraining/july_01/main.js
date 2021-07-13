let x = new Object();
let user = {
    name: "Ankush",
    age: 40,
    active: true,
    deactivate: function() {
        this.active = false;
    }
};
// object properties can only be either string or a Symbol
console.log("new Object", x.toString());
console.log("new Object", Object.keys(user));
console.log("short hand Object", user);
user.deactivate();
console.log("short hand Object", user);
console.log("are two objects same ",{id:'a1231'} === {id:'a1231'});

//alert("\u00A9, \u{1F60A}");
/// strings methods
let stringDiv = document.getElementById("stringDiv");
str = 'This is sample string.';
stringDiv.innerHTML = str.concat('<br/>');
stringDiv.innerHTML += 'length if the string is '+str.length+'<br/>';
stringDiv.innerHTML += `CharAt position 10: ${str.charAt(10)}<br/>`;
stringDiv.innerHTML += `does string includes string: ${str.includes('string')}<br/>`;
stringDiv.innerHTML += `does string includes String: ${str.includes('String')}<br/>`;
stringDiv.innerHTML += `string's position: ${str.indexOf('s')}<br/>`;
stringDiv.innerHTML += `string's position from end: ${str.lastIndexOf('s')}<br/>`;
stringDiv.innerHTML += `Repeat "Disciplin": ${("Disciplin ").repeat(5)}<br/>`;
stringDiv.innerHTML += `Relpace this with that: ${str.replace('This', 'That')}<br/>`;
stringDiv.innerHTML += `Split a string: ${str.split(' ')}<br/>`;
stringDiv.innerHTML += `lowercase: ${str.toLowerCase()}<br/>`;
stringDiv.innerHTML += `subString: ${str.substring(2,10)}<br/>`;
stringDiv.innerHTML += `subStr: ${str.substr(2,10)}<br/>`;


//// Arrays
let a = new Array(10);  // Array(10);
let b = [];
let c = [0,1,2,3,4,5,6,7,8,9,'ten'];

b[0] = "a";
b[5] = "b";
b[20] = "c";
console.log("Arrays ", a, b, c);

a.push(2,4,6,8,10); // add elements in the end of array
console.log(a);
console.log(a.pop(), a); // remove last element of the array
console.log(a.shift(), a); // remove first element of the array
console.log(a.unshift('something'), a); // add element at the beginning of the array
console.log(a.splice(1,9), a); // remove and returns the elements from in between the array
console.log(a.concat(b,c));
console.log(a.includes('ten'));
console.log(c.includes('ten'));

let fl = b.filter(x => x != undefined);
console.log('filtered b', fl);

let mp = c.map(x => x**2);
console.log(mp);

console.log(a.sort());
console.log(c.reverse());
console.log(c.join("|"));
console.log(typeof a);
console.log(Array.isArray(a));
console.log(Array.isArray(str));
console.log((new Array(10)).fill(0));
c.forEach((value, index, array) => {
    console.log(`${value} is at ${index} index`);
})

//// function to reverse a string

function reverseString (str) {
    return str.split('').reverse().join('');
}

console.log('reverse sample string', reverseString(str));

/// set
let set = new Set([1,2,3,4,5,4,3,2,1,0]);
console.log(set);
console.log(set.add(10));
console.log(set.delete(0));

// map
let map = new Map();
map.set('name', 'Ankush');
map.set(40, "age");
let obj = {id:'a1231'}
map.set(obj, 'active');

console.log(map.get('name'));
console.log(map.get(40));
console.log(map.get(obj));
console.log(map.has({id:'a1231'}));
console.log('------------');
map.forEach((value, key) =>{
    console.log(key, value);
})

console.log("keys",map.keys());
console.log("values", map.values());

/// date
console.log(Date.now()); // milisconds since jan 1, 1970
let date = new Date();
let month = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul'];
console.log(date.getDate(), month[date.getMonth()], date.getFullYear(), date.getHours(), date.getMinutes());

/// Math
let {name, age} = user;
let [aa, bb, cc, ...rest] = a;
console.log(...c, c);
console.log(aa, bb, cc, rest);
console.log(name, age);
console.log(Math.random());
console.log(Math.sin(Math.PI/2));
console.log(Math.min(100,34,65));
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
