//Object creation using 'new object()' method.
/*var company = new Object();
company.name="Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue";

console.log(company);
console.log(company.name);
console.log(company['name']);

company["$stock"] = 120;
company["stock of company"]=150;

console.log(company.$stock);
console.log("Stock of the company: " + company["stock of company"]);

var companyStock = company["stock of company"];
console.log("Stock of the company: " + companyStock);
*/

//Object creation using literals.
var company = {
	name: "Facebook",
	"stock of the company": 130,
	stock:110,
	ceo : {
		name:"Mark",
		favColor: "Green",
	},
};

console.log(company);