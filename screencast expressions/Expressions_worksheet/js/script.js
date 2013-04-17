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
var totalPeople = 4;

//total pizzas ordered
var totalPizza = 2;

//mult. pizzas by number of slices, and div. by total people for slices per person.
var slicesPerPerson = totalPizza * slicesPerPizza / totalPeople;

//display results in format requirement
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

