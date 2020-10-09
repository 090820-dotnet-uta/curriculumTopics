"use strict";

// //hoisting example with 'var'
// //you can assign a value ot a variable
// // then declare the variable below the assignment.
// number = 11;
// var number = 5;
// console.log(number);
// var number = 6;
// console.log(number);

// //there is no hoisting with 'let'
// // num2 = 5;
// // let num2;
// // console.log(num2);

// //const keyword to make a variable unchangable.
// const num3 = 5;
// //num3 = 8;
// let num4 = "jerry",
// 	num5 = 36;
// console.log(num4 + " is " + num5 + "years old");
// num4 = 56;
// console.log(num4);
// let num6 = "jenny";
// console.log(`Mark is not ${num6}'s brother`);
// //compaare with C# syntax
// //console.log($"Mark is not {num6}'s brother");

// //an unassigned variable is 'undefined'
// let num7;
// console.log(num7);

// //declare an object
// let user = {
// 	name: "Mark",
// 	age: 41,
// };
// console.log(user.name);

// //declare an empty object
// let user1 = {};
// console.log(user1);
// user1.name = "jim"; //then assign it a field
// console.log(user1.name);
// //add a nested object to the existing object.
// user1.anotherObject = { sides: 4, color: "blue" }; //assign another field
// //access those values
// console.log(user1.anotherObject.sides);
// console.log(user1.anotherObject.color);
// //get the data type of an object of variable.
// console.log(typeof user1);
// console.log(typeof num3);

// //
// user1.id = 321;
// user1.id = Symbol("id");
// console.log(user1.id);
// let user2 = { id: 322 };
// console.log(user2.id);

// //operators have an order of operations similar to
// //PEMDAS(Mult and Div are equal so they move left ot right.)
// let result = (10 / (3 + 2)) * 4 + 5 ** 2 + 6 - 9;
// console.log(result);

// //user '+' to concatenate values of string and number. it no madda.
// let newString = user1.name + num6 + user.age;
// console.log(newString);

// //use operators to create expressions.
// let num8 = 10,
// 	num9 = 20;
// let num10 = ++num8 + num9; //11+20
// console.log("right here" + num10);

// num10 = ++num8 + num9++; //12+20
// console.log(num10);

// num10 = ++num8 + num9++; //13+21
// console.log(num10);
// console.log(`num8 is ${num8} and num9 is ${num9}`); //13 adn 22

// //decare multiple variables in the same line.
// let num11 = 10,
// 	num12 = "10";
// //use equality operators to see strict and loose equality.
// console.log(num11 == num12);
// console.log(num11 === num12);
// let num13 = 102;
// console.log(num11 === num13);

// let a = { name: "kim" };
// let b = { name: "kim" };
// console.log(a === b); //two separately declared objects point to different places in memory.
// console.log(Object.keys(a), Object.values(a), Object.keys(b)); //print all the field keys or values

// let c = {};
// let d = c;
// console.log(c == d);
// c.age = 10;
// console.log(c == d);
// //d.age = 11;
// console.log(c == d);
// console.log(d.age);

// //falsy values evaluate to false => false, null, undefined, 0, -0, 0n, NaN, "" (empty string)
// //al else evaluates to true.
// let joe = null;
// if (!joe) {
// 	console.log("this is null valued joe => " + joe);
// }
// console.log(+joe); //use the '+' to implicitely convert to Numebr format.

// //get the ascii code value of a string.
// console.log(String(num13).charCodeAt(2));

// //use the built in Math object asnd helper functions
// console.log(Math.floor(132.6737));
// console.log(Math.ceil(132.6737));
// console.log(Math.pow(13, 2));
// console.log(Math.random() * 10);
// console.log(Math.max(132, 453, 321, 2));

// //create an object and print the whole object
// let obj = {
// 	name: "mark",
// 	age: 20,
// 	height: "6-1",
// };
// console.log(obj);

// //convert an object to a string in JSON format.
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// //now you can use string functions on the 'stringified' object because it's a string
// console.log(jsonObj.length);
// console.log(jsonObj.substring(9, 13));

// //.parse the stringified object back into it's object form.
// let obj1 = JSON.parse(jsonObj);
// console.log(obj1);

//send alerts to the browser screen. this is useful for confirming clicks and submissions etc...
// //alert(`The JSON Stringified object is => ${jsonObj}`);

// //DOM manipulation below
// let para = document.getElementsByTagName("p");
// para[0].textContent = "The text is changed";
// para[0].style.color = "orange";

// let h1s = document.getElementsByTagName("h1");
// h1s[0].style.color = "pink";

// let h1id = document.getElementById("h1id");
// h1id.style.color = "brown";

// let bodyChild = document.body.childNodes;
// //apparently a list is not Zero indexed.
// bodyChild[2].textContent = "This is the second child of the body";

// ///////////////

// let buble = document.getElementsByClassName("buble")[0];
// let bubble = document.getElementsByClassName("bubble")[0];

// buble.addEventListener("mouseover", () => (buble.style.fontWeight = "900"));
// // buble.addEventListener("mouseout", () => (buble.style.fontWeight = "100"));

// bubble.addEventListener("mouseover", () => (bubble.style.fontWeight = "100"));

// /////////////
// let body = document.body;
// let newNode = document.createElement("p");
// newNode.textContent = "This is a new Node and child of the body";

// body.appendChild(newNode);

// newNode.addEventListener("mouseover", () => (newNode.style.fontWeight = "900"));
// newNode.addEventListener("mouseout", () => (newNode.style.fontWeight = "100"));

//////////////////////////
//Day2
let user = {
	name,
	size: 5,
};
// user.name = "Mark";
user.address = "123 main";
user.size = 5;

console.log(user.name);
console.log(user.address);
//this is a one-off function
user.newFunction = function () {
	alert(`you called ${this.address}= the addess....the function`);
};

// user.newFunction();

//reusesble function
function alertMe() {
	alert("this is an alert");
}

user.alertMe = alertMe;
// user.alertMe();

let user2 = {};
user2.assignedFunction = user.alertMe;
// user2.assignedFunction();

//use the 'in' keyword to see in a field exists in an object
let myBool = "house" in user;
console.log(myBool);

user2.newFunction1 = user3;
user2.newFunction1("Mark", "Moore");

function user3(fname, lname) {
	console.log(`this is my name ${fname} ${lname}`);
}

function User(fname, lname) {
	name, (this.lname = lname);
	this.fname = fname;
}

//use the new keyword when creating new instances of a reusable object
let user4 = new User("Laura", "Moore");
// let user45 = User("laura1", "Moore1");//this doesn't work
let user5 = new User("Bethany", "Moore");
console.log(`${user4.fname} is her first name`);
console.log(`${user5.lname} is her last name`);
// console.log(`${user45.lname} is her last name`);

let square = class {
	constructor(length) {
		this.sideLength = length;
	}
	squareArea() {
		return this.sideLength ** 2;
	}
};

let square1 = new square(4);
console.log(`the squares side length is ${square1.sideLength}`);
let area = square1.squareArea();
console.log(`the squares area is ${area}`);
console.log(square1.name);

let square2 = class Squares {
	constructor(length) {
		this.sideLength = length;
		this.diagonal = Math.sqrt(2 * length ** 2);
	}

	get diag() {
		//getter allows checking
		return this.diagonal;
	}
	squareArea() {
		return this.sideLength ** 2;
	}

	//static fields are called through the class template (not an instance)
	static Perimeter(square) {
		return square.sideLength * 4;
	}
};

let square6 = new square2(5);
console.log(`the squares side length is ${square6.sideLength}`);
let area1 = square6.squareArea();
console.log(`the squares area is ${area1}`);
console.log(square2.name);

let perimeter = square2.Perimeter(square6);
console.log(perimeter);
console.log(square6.diag);

class Human {
	constructor(legs, arms) {
		this.height = 6;
		this.numLegs = legs;
		this.numArms = arms;
	}
}

//prototypal in heritance
let child1 = Object.create(new Human(2, 2));
console.log(child1.height);
child1.numArms = 4;
console.log(child1.numArms);

class Animal {
	constructor(legs, arms) {
		this.numLegs = legs;
		this.numArms = arms;
	}

	runSpeed() {
		return `My ${this.numLegs} carry me fast.`;
	}
}

class Horse extends Animal {
	constructor(legs, arms, tLength) {
		super(legs, arms);
		this.tailLength = tLength;
	}
}

let horse1 = new Horse(3, 4, 10);
console.log(
	`My stats are legs =>${horse1.numLegs}, arms => ${
		horse1.numArms
	}, tail length => ${horse1.tailLength} and I run => ${horse1.runSpeed()}`
);

// function counter() {
// 	let count = 0;

// 	return function () {
// 		return count++;
// 	};
// }

// let count = counter();

// console.log(count());
// console.log(count());
// console.log(count());

let func1 = function (name) {
	let words = `My name is ${name}`;
	return words;
};

let func2 = (name) => {
	let words = `My name is ${name}`;
	return words;
};

console.log(func1("Mark"));
console.log(func2("Arely"));

function tellWords(func1, func2) {
	let ours = "our dogs";
	// return ours;
	func1(ours);
	func2(ours);
}

tellWords(
	(variable1) => {
		console.log(`Hello, there.`);
		let my = "my";
	},
	(variable2) => {
		console.log("goodbye");
		let your = "your dog";
		console.log(`these are ${variable2}.. no ${your}`);
	}
);

// (function () {
// 	let var1 = 56;
// 	alert(`this in an IIFE ... ${var1}`);
// })();

function counter1() {
	let times = 0;
	return function () {
		return times++;
	};
}

let counter = counter1();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function makeSentence(word) {
	let word1 = "The";
	return function (y) {
		return word1 + " " + word + " " + y;
	};
}

let sentence = makeSentence("ground");
console.log(sentence("is hard"));

//spread operator
const Foo3 = (...args) => args;
console.log(Foo3(1, "asd", { x: () => null }, class X {}, null));

