
//console.log(this);


//Function constructors
function Circle(radius) {
	this.radius = radius;
	console.log(this);

	this.getArea =  
	function() {
		return Math.PI * Math.pow(this.radius,2);
	};
}

var myCircle = new Circle(100);
console.log("Area of the Circle: "+myCircle.getArea());

/*//Function Constructor using
function Square(side){
	this.side = side;
}

Square.prototype.getArea =
function getArea() {
	return Math.pow(this.side,2);
};

var mySquare = new Square(10);
console.log("Area of the Square: "+mySquare.getArea());

var mySquare2 = new Square(20);
console.log("Area of the Square2: "+mySquare2.getArea());
console.log(mySquare2);*/