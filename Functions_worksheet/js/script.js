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
//execute calculation for circumference 
function calcCirc(circRad, pi){
	//def. circumference variable and equation equals two times radius times Pi
	var circumference = 2 * circRad * pi;
	//return statement returning resultants calculated in function.
	return circumference;
}
//display to console text message with completed circumference.
console.log("The circumference of the circle is " + circTot +".");


//Stung!
//stated 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal with prompted data.

