// JavaScript written by Jeramie Brehm 24APR2013; Conditionals Wacky //

//determine how much it will cost to buy dog food. Premium is $2 dollars a pound. Standard is $.75 dollars a pound. There is a ten percent discount for premium food when going in the morning.

//define how many lbs of premium dog food and establish variable for use in discounting 10 percent.
var foodPrem = prompt("How many pounds of premium food do you want to buy?");
var premTot;

//define how many lbs of standard dog food are to be bought.
var foodStd = prompt("How many pounds of standard food do you want to buy?");

//define when user is going to go to store.
var shopTime = prompt("At what hour do you plan to go to the store?");

//validation conditional
//determine if any of the data collected from user is empty using or boolean algebra.
if(foodPrem == "" || foodStd == "" || shopTime == ""){
	//one or more of the fields is empty. Display to console they didn't fill in the blanks.
		console.log("Ah, ah, ah... You didn't fill in the blanks correctly!");
