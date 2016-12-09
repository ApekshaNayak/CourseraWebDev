//Functions are First-Class data types
//Functions are objects.
function multiply(x, y) {
	return x*y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);

//Function factory.
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier*x;
	};
	return myFunc;
}

var multiplyBy5 = makeMultiplier(5);
console.log(multiplyBy5(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(60));

//Passing functions as arguments.
function doOperationOn(x, operation){
	return operation(x);
}

var result = doOperationOn(2, multiplyBy5);
console.log(result);

var result = doOperationOn(20, doubleAll);
console.log(result);

