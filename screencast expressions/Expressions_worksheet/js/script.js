// Written by Jeramie Brehm, 17APR2013, Expressions Worksheet //

//Dog Years
//Calculate Sparky's dog year age based on actual age

//define actual age
var sparkyAgeHuman = 5;

//multiply actual by dog year factor and assign variable
var sparkyAgeDog = sparkyAgeHuman * 7;

//display sparky's age in dog years
console.log("Sparky is " + sparkyAgeHuman + ' human years old which is ' + sparkyAgeDog + " in dog years.");



//Slice of Pie part 1
//calculate amound of pizza per person.

//total slices of pizza
var slicesPerPizza = 8;

//total people at party
var totalPeople = 5;

//total pizzas ordered
var totalPizza = 4;

//define slices per person. //mult. pizzas by number of slices, and div. by total people for slices per person.
var slicesPerPerson = totalPizza * slicesPerPizza / totalPeople;

//display results in format requirement
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");



//Slice of Pie part II
//Calculate Sparky's portion of pizza

//use previous variables and variable for sparky's share. //us modulo to calculate sparky's cut
var sparkyPizza = totalPizza * slicesPerPizza % totalPeople;

//display sparky's cut
console.log("Sparky got " + sparkyPizza + " slices of pizza.");




//Average shopping bill
//calculate total spent on groceries and derive average weekly spending on groceries.

//define 5 week spending array variable
var weeklySpending = [10, 20, 15, 18, 12];

//define total spent variable and add array contents
var totalSpending = weeklySpending[0] + weeklySpending[1] + weeklySpending[2] + weeklySpending[3] + weeklySpending[4];

//define avg. weekly spending variable and determine using totalSpending variable.
var avgSpendingWeek = totalSpending / 5;

//display results in format requirement
console.log("You have spent a total of $" + totalSpending + " on groceries over 5 weeks. That is an average of $" + avgSpendingWeek + " per week.");


