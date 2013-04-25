// JavaScript written by Jeramie Brehm 24 April 2013. Conditionals Personal

//determine if use of nitro medication can be used or contraindications exist. Systolic pressure must be above 100 mmHg. No use of erectile disfunction (ED) medications, number of doses have they taken.

//define systolic variable and prompt for input
var bpSys = prompt("What is current systolic pressure in mmHg? i.e. 120 / 80 where 120 is the systolic pressure.");

//define ED variable and prompt for data. Define nitro eligibility variable for later use 
var erectDisf = prompt("Are you currently on erectile disfunction (ED) medications? Yes or No.");
var edYesNo

//define dosage variable for how many doses already taken. 
var nitroTaken = prompt("How many doses of nitro have you taken already?");

//Validation
// Validate whether any of the fields prompted to user contain data. Using OR boolean equation in if statement.
if(bpSys == "" || erectDisf == "" || nitroTaken == ""){
	//display that user did not correctly input data requested.
	console.log("You did not correctly supply data needed.");
}else{
	//display to console data entry sufficient.
	console.log("Data submitted. Please Wait.");
}
//determine total doses of nitro remaining. Three minus nitroTaken variable. Define nitro available var.
var nitroAvail = 3 - nitroTaken;

//If ED med taken, patient not able to take nitro pre-hospital. Ternary with statement to console.
edYesNo = (erectDisf == "Yes"  || erectDisf == "yes") ? "Due to medications already taken, you cannot take nitro" : "No ED contraindications present.";

//display ternary result variable to console.
console.log(edYesNo);

//determine if systolic pressure is at acceptable levels and how many doses can be administered. Incorporate all variables in AND boolean conditional.

