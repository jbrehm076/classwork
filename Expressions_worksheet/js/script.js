// Written by Jeramie Brehm, 17APR2013, Expressions Worksheet //

//Dog Years
//Calculate Sparky's dog year age based on actual age

//define actual age
var sparkyAgeHuman = prompt('How old is Sparky in human years?');

//multiply actual by dog year factor and assign variable
var sparkyAgeDog = sparkyAgeHuman * 7;

//display sparky's age in dog years
console.log("Sparky is " + sparkyAgeHuman + ' human years old which is ' + sparkyAgeDog + " in dog years.");



//Slice of Pie part 1
//calculate amound of pizza per person.

//total pizzas ordered
var totalPizza = prompt('How many pizzas were ordered for the party?');

//total slices of pizza
var slicesPerPizza = prompt('How many slices does each pizza have?');

//total people at party
var totalPeople = prompt ('How many hungry people are at the party?');



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



//Discounts
//calculate discounted price of an item and create an expression to show price with and w/o sales tax.

//string variable of item description
var itemDescription = prompt('What are you wanting to buy?');

//define discount percentage
var discountPercent = prompt('What is discount percentage of ' + itemDescription + '?');

//define item price
var priceOriginal = prompt('What is original price of ' + itemDescription + '?');

//define sales tax percentage
var taxSales = 7;

//define price after discount; mult. original price times discount percent, then subtract from original price.
var priceDiscount = priceOriginal - priceOriginal * (discountPercent * .01);


//define item price w/tax; multiply item price times sales tax and add results to item price
var priceTaxAdded = priceDiscount + priceDiscount * (taxSales * .01);

//display results in format requirement
console.log("Your " + itemDescription + " was originally $" + priceOriginal + ", but after a " + discountPercent + "% discount, it is now $" + priceDiscount + " without tax, and $" + priceTaxAdded + " with tax.");