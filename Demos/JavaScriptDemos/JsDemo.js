"use strict";

//hoisting example with 'var'
//you can assign a value ot a variable
// then declare the variable below the assignment.
number = 11;
var number = 5;
console.log(number);
var number = 6;
console.log(number);

//there is no hoisting with 'let'
// num2 = 5;
// let num2;
// console.log(num2);

//const keyword to make a variable unchangable.
const num3 = 5;
//num3 = 8;
let num4 = "jerry",
	num5 = 36;
console.log(num4 + " is " + num5 + "years old");
num4 = 56;
console.log(num4);
let num6 = "jenny";
console.log(`Mark is not ${num6}'s brother`);
//compaare with C# syntax
//console.log($"Mark is not {num6}'s brother");

//an unassigned variable is 'undefined'
let num7;
console.log(num7);

//declare an object
let user = {
	name: "Mark",
	age: 41,
};
console.log(user.name);

//declare an empty object
let user1 = {};
console.log(user1);
user1.name = "jim"; //then assign it a field
console.log(user1.name);
//add a nested object to the existing object.
user1.anotherObject = { sides: 4, color: "blue" }; //assign another field
//access those values
console.log(user1.anotherObject.sides);
console.log(user1.anotherObject.color);
//get the data type of an object of variable.
console.log(typeof user1);
console.log(typeof num3);

//
user1.id = 321;
user1.id = Symbol("id");
console.log(user1.id);
let user2 = { id: 322 };
console.log(user2.id);

//operators have an order of operations similar to
//PEMDAS(Mult and Div are equal so they move left ot right.)
let result = (10 / (3 + 2)) * 4 + 5 ** 2 + 6 - 9;
console.log(result);

//user '+' to concatenate values of string and number. it no madda.
let newString = user1.name + num6 + user.age;
console.log(newString);

//use operators to create expressions.
let num8 = 10,
	num9 = 20;
let num10 = ++num8 + num9; //11+20
console.log("right here" + num10);

num10 = ++num8 + num9++; //12+20
console.log(num10);

num10 = ++num8 + num9++; //13+21
console.log(num10);
console.log(`num8 is ${num8} and num9 is ${num9}`); //13 adn 22

//decare multiple variables in the same line.
let num11 = 10,
	num12 = "10";
//use equality operators to see strict and loose equality.
console.log(num11 == num12);
console.log(num11 === num12);
let num13 = 102;
console.log(num11 === num13);

let a = { name: "kim" };
let b = { name: "kim" };
console.log(a === b); //two separately declared objects point to different places in memory.
console.log(Object.keys(a), Object.values(a), Object.keys(b)); //print all the field keys or values

let c = {};
let d = c;
console.log(c == d);
c.age = 10;
console.log(c == d);
//d.age = 11;
console.log(c == d);
console.log(d.age);

//falsy values evaluate to false => false, null, undefined, 0, -0, 0n, NaN, "" (empty string)
//al else evaluates to true.
let joe = null;
if (!joe) {
	console.log("this is null valued joe => " + joe);
}
console.log(+joe); //use the '+' to implicitely convert to Numebr format.

//get the ascii code value of a string.
console.log(String(num13).charCodeAt(2));

//use the built in Math object asnd helper functions
console.log(Math.floor(132.6737));
console.log(Math.ceil(132.6737));
console.log(Math.pow(13, 2));
console.log(Math.random() * 10);
console.log(Math.max(132, 453, 321, 2));

//create an object and print the whole object
let obj = {
	name: "mark",
	age: 20,
	height: "6-1",
};
console.log(obj);

//convert an object to a string in JSON format.
let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

//now you can use string functions on the 'stringified' object because it's a string
console.log(jsonObj.length);
console.log(jsonObj.substring(9, 13));

//.parse the stringified object back into it's object form.
let obj1 = JSON.parse(jsonObj);
console.log(obj1);

//send alerts to the browser screen. this is useful for confirming clicks and submissions etc...
alert(`The JSON Stringified object is => ${jsonObj}`);
