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


