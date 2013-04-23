// JavaScript  Jeramie Brehm 23 April 2013; Conditionals_worksheet 

//Last Chance for Gas!
//purpose: determine if refuel is needed in order to reach next station 200 miles away.

//define variables and collect data
var gasRead = prompt("How full is your gas tank (in percent)?");

var gasCap = prompt("How gallons of fuel does your fuel tank hold?");

var gasEff = prompt("What is the efficiency of your vehicle in mpg?");

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


//Check the Login
//purpose: authenticate login and password then output console message as prescribed by assignment.


//define and prompt for variables input name and input password.
var nameInput = prompt("Enter username");
var pwdInput = prompt("Enter password");

//define correct user name and passwords
var correctName = "dude21";
var correctPwd = "buddy13";

//implement logic comparitor with else statements for subsequent arguements. if name AND pwd match print welcome message. else if name doesn't match print username error. if previous 2 comparisons don't work it must be password error and print password error.
if(nameInput === correctName && pwdInput === correctPwd){
	console.log('Welcome, ' + nameInput + "!");
}else if(nameInput != correctName){
	console.log("User not found. Try again.");
}else{
	console.log("Password does not match our records.");
}


//Movie Ticket Price
//purpose: using movie start time and age of viewer, determine if the age will yield discount along with discount due to matinee prices.

//define viewer age and movie start variables with prompt. 
var viewerAge = prompt("How old are you?");
var movieTime = prompt("What time does the movie start? Note: All movies start on the hour.");

//defined ticket pricing variables.
var ticketDisc = "$7.00";
var ticketNorm = "$12.00";
var ticketActual

//compare variables as any trues will result in discounted price.
if(viewerAge >= 55 || viewerAge < 10){
	ticketActual = ticketDisc;
}else if(movieTime <= "5" && movieTime >= "3");
	ticketActual = ticketDisc;
}else(ticketActual = ticketNorm){}
console.log("The ticket price is " + ticketActual + ".");


	
		