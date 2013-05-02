// JavaScript Coded by Jeramie Brehm 01MAY2013; Functions Industry

//area supervisors have been promoted and there is now vacancies. determine if you are eligible.
//Requirements are 3 years in current position. How many are eligible. What is your percentage if everyone is equally qualified.

//FUNCTION
//annonymous function to determine percentage of getting position.
var calcAdvPerc = function(candidates, openings){
	//define percentage variable and equation
	var advPerc = openings / candidates * 100;
	//returns data to function call
	return advPerc;
}

//VARIABLES
//defined time worked in position variable
var timePos = prompt("How many years have you worked in your position?");
//defined number eligible for promotion variable with prompt for data.
var numElg = prompt("How many people total (including yourself) are eligible for these positions?");
//defined number of positions that are open for advancement.
var numPos = prompt("How many positions are open for advancement?");
//defined eligibility variable for later use
var meetElg
//call for function with arguments
var yourChances = calcAdvPerc(numElg, numPos);
