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
let user1 = new Object(); //object constructor syntax
let user2 = {}; //object literal syntax
user2.name = "Mark";
console.log(user2.name);

function user3(name, age) {
	return {
		name: name,
		age: age,
	};
}

let user4 = user3("Matt", 47);
console.log(`${user4.name} is ${user4.age} years old`);

let exists = user4.address;
console.log(exists);

let exists1 = "name" in user4;
console.log(exists1);

for (let value in user4) {
	console.log(user4[value]);
}

function user5(name, age, address) {
	return {
		name: name,
		age: age,
		alertFunc() {
			alert(`This is the ${address}.`);
		},
	};
}

let user6 = user5("Libby", 44, "123 Main");

// console.log(
// 	`The values are ${user6.name} and ${
// 		user6.age
// 	} who lives at ${user6.alertFunc()}`
// );

function User7(name, age, address) {
	this.name = name;
	this.age = age;
	//alertFunc1 = () => alert(`This is the ${address}.`);
}

let user8 = new User7("Jeff", 34);
//user8.alertFunc1 = alert("my addy is...");

// console.log(
// 	`details for user8 are => ${user8.name}, => ${
// 		user8.age
// 	} =>${user8.alertFunc1()}<= address`
// );

//classes
// unnamed class
let Rectangle = class {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle.name);
// output: "Rectangle"

// named.. always has this name
let Rectangle1 = class Rectangle2 {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Rectangle1.name);
// output: "Rectangle2"

let rectangle3 = new Rectangle(4, 5);
console.log(rectangle3.name, rectangle3.height, rectangle3.width);

let rectangle4 = new Rectangle(6, 7);
console.log(rectangle4.height, rectangle4.width);

class Rectangle5 {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	getArea() {
		return this.height * this.width;
	}
	// calcArea() {
	// 	return this.height * this.width;
	// }

	static difference(height, width) {
		return;
	}
}

let rectangle6 = new Rectangle5(7, 8);
console.log(rectangle6.getArea());

console.log(rectangle6);
console.log(Rectangle5);

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// function showOk() {
// 	alert("You agreed.");
// }

// function showCancel() {
// 	alert("You canceled the execution.");
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// ask(
// 	"Do you agree?",
// 	() => alert(`You agreed with Mark`),
// 	() => alert(`You will go to home`)
// );

// function makeFunc() {
// 	var name = "Mozilla";
// 	function displayName() {
// 		alert(name);
// 	}
// 	return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

// makeAdder(5);

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// var add6 = makeAdder();
// var add11 = makeAdder();

// console.log(makeAdder(5)(2)); // 7
// //console.log(add11(10, 2)); // 12

var add7 = makeAdder(5)(2);
console.log(add7);
