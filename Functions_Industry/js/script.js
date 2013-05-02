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
