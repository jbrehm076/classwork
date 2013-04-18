// JavaScript written by Jeramie Brehm 17APR2013; Expressions Wacky //

//Purpose Determine mph difference when using larger tires on your 4x4.
//define the machine's name
var beastName = prompt("What's the name of your 4x4 rig?");

//define current tire size
var tireDiaOld = prompt("What is the current tire diameter in inches on your mall-crawler?");

//define new tire size
var tireDiaNew = prompt ("What diameter in inches are the tires you want to put on that stump-jumper?");

//define mph to show differences
var mphGiven = prompt("Enter what speedometer reading in miles per hour(mph), that you want to test?");

//mult. new tire diameter by speedometer reading, divided by old tire diameter to determine actual speed.
var speedActual = tireDiaNew * mphGiven / tireDiaOld;

//display info and appropriate message
console.log("For " + beastName + ", with the new " + tireDiaNew + " inch tires and reading " + mphGiven + " mph on your speedometer. You're actually going " + speedActual + " mph.");
