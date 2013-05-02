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
//define the percentage of improvement and prompt for data.
var percent = prompt("What percentage are you trying to exceed?");
//define actual percentage and conversion of percenatage variable for computational use.
var percentAct = (percent * .01);

//function call with previous time input and percentage multiplier.
var percTime = calcTimePer(prevTime, percentAct);

//define needed time to beat to hit goal.
var timeActual = prevTime - percTime;
//display to console text with actual time to beat.
console.log("To meet your goal you must beat " + timeActual + " minutes.");

//else if statement comparing current and previous times
if (curTime > prevTime){
   //display text for non improvement
   console.log("You time has not improved.");
   //comparison of current time to actual time
   }else if(curTime <= timeActual){
   //else statement for meeting time goal and rest of day off eligibility
   console.log("You have met your time goal and are eligible for the rest of the day off.");
   //else statement if none of above conditions are correct.
   }else {
