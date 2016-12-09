x = "I am doing JavaScript";
var message = "in Global space";
function a () {
	var message = "inside function a";
	console.log(message);

	function b() {
		console.log(message);
	}
	b();
}
function c() {
	console.log(message);
}
a();
c();

/*var x = 25;
if((null) || console.log("Hello")|| x > 5) {
	console.log("Hello World");
}*/