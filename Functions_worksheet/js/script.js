// Written by  Jeramie Brehm; 30APR2013, Functions: worksheets //

//Circumference
//calculate the circumference of a circle.

//Variables
//define and prompt user for radius property of the circle.
var circRad = prompt("What is the radius of the circle?");
//define pi out 2 decimal points.
var pi = 3.14;
//define circumference variable and setup function passing arguments.
var circTot = calcCirc(circRad, pi);

//Function:circumference
//execute calculation for circumference = two times radius times Pi
function calcCirc(circRad, pi){
	
	var circumference = 2 * circRad * pi;
	return circumference;
}
//display to console text message with completed circumference.
console.log("The circumference of the circle is " + circTot +".");
	//



