//Object literal and "this".

var literalCircle = {
	radius : 10,

	getArea : function () {
		var self = this;
		console.log(self.radius);

		var increasedRadius = function() {
			self.radius = 20;
		};
		increasedRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius, 2);
	}

}

console.log(literalCircle.getArea());