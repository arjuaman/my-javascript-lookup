(function(){
let user = {
        name: "Ankush",
        age: 40,
        active: true,
        deactivate: function () {
            // this.active = false;
            this.disabled = true;
            console.log('User deactivated ', user.active, this);
        }
    };

    document.getElementById("click").onclick = user.deactivate;
    document.getElementById("click2").onclick = user.deactivate.bind(user);

// user.deactivate !== user.deactivate.bind(user);

    function factorial(n) {
        if (n === 1) {
            return n;
        } else {
            return n * factorial(n - 1);
        }
    }

    let fact3 = factorial(3);
    let fact4 = factorial(4);

    console.log('factorial of 3 -> %d and 4 -> %d', fact3, fact4);

    function findPowerOf(x) {
        return function power(pow) {
            return x ** pow;
        }
    }

    let a = findPowerOf(2);
    let b = findPowerOf(3);
    console.log('2 raised to 2 is %d', a(2));
    console.log('2 raised to 3 is %d', a(3));
    console.log('2 raised to 4 is %d', a(4));
    console.log('2 raised to 5 is %d', a(5));
    console.log('3 raised to 6 is %d', b(6));
    console.log('3 raised to 7 is %d', b(7));
    console.log('3 raised to 8 is %d', b(8));
    console.log('3 raised to 9 is %d', b(9));
})();
let stringify;
(function(){
    let symUser = Symbol('user');
    let symUser2 = Symbol('user');
    let json = {name: "Akshay",
        age: 22,
        active: true,
        marks: {
            "eng": 90,
            "math":98
        },
        [symUser]: {id:"Akshay",password:'*********'},
        contact:[
            12344567,
            78912345
        ],
        deactivate: function () {
            // this.active = false;
            this.disabled = true;
            console.log('User deactivated ',  this);
        }
    };
    console.log(json.name);
    console.log(json[symUser]);
    json.deactivate();
    stringify = JSON.stringify(json);
    console.log('another IFFE', JSON.stringify(json));
    // stringify += "abc";
    console.log('parsed ', JSON.parse(stringify));
})();

(function(){
    if(localStorage) {
        let user = localStorage.getItem('user');
        if(!user) {
            console.log('storing in local');
            localStorage.setItem('user', stringify);
        }
        console.log('reserved user', user);
    }
    if(sessionStorage && sessionStorage.getItem('user')) {
        console.log('storing in session');
        sessionStorage.setItem('user', 'akshay');
    }
})();