# jsTraining
All Html, Css and JS trainings
comments // single line comment , /* multiline comments */
; - terminate the line.
Variables - 
var - functional scope  : function {
var abc;
    abc = 2;
    var xeno = 10;
    
    xen0 = 20;
} 
let - block scope : { 
x = 10;
};

const - block scope constant

Data Types - 
Number - int and float - 64bit but operators only work on 32 bit;
String - collection/array of character;
Boolean -  truth values - true or false, 0 or 1; false values = false, 0, "", null, undefined.
Object;
undefined;
null;
NaN - Not a Number; 
infinity and -infinity;

Operators - 
Assignment Operators - 
=, += a += b => a = a + b, -=, *=, /=, %=

AND assignment => x &&= y; x is true
OR assignment => x ||= y; x is false
nullish assignment => x ??= y; x is undefined or null;

Comparison Operators - 
== , != => ! =, ===, !== => ! = =, >, >= => > =, <, <=
3 == '3' => true 
3 === '3' => false

Arithmetic Operator - 
+, - , * , /, %, ++ , --, -

Logical Operator - 
&& - and, || - OR, ! - not
a && b => true , a and b are true

a || b => true, either a or b is true

!a => ture, a is false.

string operator
+ => concat the two strings.
relational operator -> in. if a property or method exists in an object.

binary - & | ^ ~

?: -> a = b? c : d; either c or d will be assigned to a based on b is true or false.

if() {
}

if(a >b) {
//something
} else {
//something
}

if(a > b) {
//something 
if(a > c) {

}
} else if( b > c) {

} else {

}

switch(a) {
case 0:
    break;
case 1:
    break;
default:
}


while(condition is true){

}

do {


} while( condition is true)


for(var i=0; i< 10; i++){

}

for ( in ) {

}

for ( of ) {

}

var random = Math.random(); -> 0 and 1;

var value = prompt('message', defaultValue); => typeof value will be string;
alert('message');

<script></script>
