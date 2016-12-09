/*//Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: "+a);
console.log("b: "+b);

console.log("b after update: ");
b = 5;
console.log("a: "+a);
console.log("b: "+b);*/

//Passing by Reference vs by Value
/*function changePrimitive(primitive) {
	console.log("Change in primitive before: ");
	console.log(primitive);

	primitive = 5;
	console.log("after: ");
	console.log(primitive);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive origi value: ");
console.log(value);*/

function changeObject(obj) {
	console.log("Change in primitive before: ");
	console.log(obj);

	obj.x = 5;
	console.log("after: ");
	console.log(obj);
}

var valueObj = {x: 7};
changeObject(valueObj);
console.log("after changeObject origi value: ");
console.log(valueObj);