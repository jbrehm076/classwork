// JavaScript written by Jeramie Brehm 01 May 2013. Functions Personal //

//to get rest of day off you exceed your last 1.5 mi. run by dicated percent percent.

//FUNCTION
//annonymous function to calc. percentage of input number
var calcTimePer = function(lastTime, percent){
	//defines time percentage variable and equation equals time mult. by percantage.
	var timePercent = lastTime * percent;
	//Returns results back to function call
	return timePercent;
}

//VARIABLES
//define previous time variable with prompt for data
var prevTime = prompt("What was your last time for 5 mile run in minutes? i.e. 5, 4.5");
//define variable for current time with prompt
var curTime = prompt("What was your current time for 5 mile run in minutes? i.e. 5, 4.5");
