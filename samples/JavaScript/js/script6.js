/*//Arrays
var arry = new Array();
arry[0] = "Apeksha";
arry[1] = 2;
arry[2] = function(name) {
	console.log("Hello "+name);
};
arry[3] = {course : "HTML, CSS and JS"};

console.log(arry);
arry[2]("Kavita");
arry[2](arry[0]);
console.log(arry[3].course);*/

//Short Hand Arrays.
/*var names = ["Apeksha", "Abhishek", "Aaradhya"];
console.log(names);

for (var i = 0; i < names.length; i++) {
	console.log("Hello "+names[i]);
}

names[10] = "Jim";
for (var i = 0; i < names.length; i++) {
	console.log("Hello "+names[i]);
}*/

//For loop type
/*var myObj = {
	name: "Yaakov", 
	course: "HTML, CSS & JS", 
	platform: "Coursera"
};

for(var prop in myObj) {
	console.log(prop+ ": "+ myObj[prop]);
};*/

var names2 = ["Apeksha", "Abhishek", "Aaradhya"];
names2.greeting = "Hi!";
for(var name in names2) {
	console.log("Hello "+ names2[name]);
};

