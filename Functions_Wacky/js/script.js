// JavaScript written by Jeramie Brehm 1MAY2013; Professional Wacky //

//Free AK-47 with truck purchase. As advertised in Florida, a truck dealership gave vouchers for free AK-47 rifles with purchase of a new truck. It did not guarantee but offer payment for those qualified to obtain and own an AK-47. For this work, I will be assuming qualifications to include, 18 yrs of age, qualifying background check, and voucher for the weapon from truck dealership.


//variables
//define birth year month and prompt for data
var birthM = prompt("What month were you born in? Use number for month. i.e. October = 10");
//define year of birth and prompt for data
var birthY = prompt("What year were you born in? Please use four digit year. i.e. 1980.");
//define this month's numeric data and prompt
var currentM = prompt("What month are we currently in? Use number for month. i.e. April = 4");
//define current year and prompt for data.
var currentY = prompt("What year are we currently in? Please use four digit year. i.e. 1947");
//define background check variable w/ prompt.
var bgCheck = prompt("Did you pass your background check? yes or no");

//FUNCTION
//initial function line setup with 4 arguements. Had issues with data being interpreted as string data. used parseInt to ensure integer data.
function calcTimeMonths(timeCM, timeCY, timeBM, timeBY){
	//define current time in months and parse variable and ensure it is an integer in base 10.
	var timeCMI = parseInt(timeCM, 10);
	//define current time in years and parse variable and ensure it is an integer in base 10.
	var timeCYI = parseInt(timeCY, 10);
	//define months of birth year in months and parse variable and ensure it is an integer in base 10.
	var timeBMI = parseInt(timeBM, 10);
	//define birth year and parse variable and ensure it is an integer in base 10.
	var timeBYI = parseInt(timeBY, 10);
	//define total current date in months equals current year times 12 months plus months already passed.
	var currentMonths = timeCMI + timeCYI * 12;
	//define birth date in months equals birth year times 12 months plus months already passed at month of birth.
	var birthMonths = timeBMI + timeBYI * 12;
	//define final age in years by subtracting the persons total months alive from current dates total months and divide by 12 to compute years.
	var ageYears = (currentMonths - birthMonths) / 12;
	//return results to function call
	return ageYears;
}
//define actual age and function call to calculate total age.
var ageActual = calcTimeMonths(currentM, currentY, birthM, birthY);
