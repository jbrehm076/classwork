// JavaScript  Jeramie Brehm 23 April 2013; Conditionals_worksheet 

//Last Chance for Gas!
//purpose: determine if refuel is needed in order to reach next station 200 miles away.

//define variables and collect data
var gasRead = prompt("How full is your gas tank (in percent)?");

var gasEff = prompt("What is the efficiency of your vehicle in mpg?");

var gasCap = prompt("How gallons of fuel does your fuel tank hold?");

//determine amount of fuel= capacity times percentage read. det. max range with calculated amount of fuel = amount times mpg.
var fuelNow = gasCap * (gasRead * .01)
var carRange = fuelNow * gasEff;

//if / then statement to determine if refueling needed with required else statement

if(carRange < 200){
	//if range is less than 200 miles
	console.log("You only have " + fuelNow + " gallons of gas in your tank, better get gas now while you can!");
}else{
	//
	console.log("Yes, you can make it without stopping for gas!");
}