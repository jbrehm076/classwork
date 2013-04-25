// JavaScript Coded by Jeramie Brehm 24APR2013; Conditionals Industry

//determine if you can take a break and still get maintenance done. Each tool takes 20 min. Personal break is 1 hr. Determine if you can complete maint. and take a break.
//define number of tools requiring maint.
var toolNum = prompt("How many tools are scheduled for maintenance for this shift?");

//define how long is shift.
var shiftTime = prompt("How many hours are alloted for maintenance for this shift?");

//Validation
//Check for null or lack of data collected from prompts to user using or boolean statement.
if(toolNum == "" || shiftTime == ""){
		   //undefined variable found. display to console verbally admonishing user.
		   console.log("If you fail to completely fill in the blanks, I cannot answer you accurately.");
//else operand		   
}else{
	  //validation complete without errors found, display to console data correctly submitted.
	  console.log("Data submitted. Please wait.");
}

