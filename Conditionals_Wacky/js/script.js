// JavaScript written by Jeramie Brehm 17APR2013; Expressions Industry //

//Using interrogatives, calculate total product moves per hour of site automation vehicles.
//define number of vehicles on track at site.
var vehicleNumber = prompt("How many vehicles does your site have on the track?");

//define average pick up / delivery time
var transportTime = prompt("How long in minutes does it take for a vehicle to arrive to your tool?");

//define how much product is in each container being transported.
var productNumber = prompt("how much product is in each container?");

//define productMPH; calculation: divide 60 by delivery time for moves per hour. mult. by number of vehicles for total moves per hour. mult * product per container for total product moved per hour. mult by 672 for projected monthly avg at current numbers.
var productMpm = 60 / transportTime * vehicleNumber * productNumber * 672;

//define 4 weeks historical product moved.
var productHist = [850356, 935103, 1000324, 950232];

//define historical product move avg; array calc. add historical data, divide by 4 weeks for monthly avg product moves.
var productHistAvg = (productHist[0] + productHist[1] + productHist[2] + productHist[3]) / 4;

//display data to console in writer defined format.
console.log("You're currently trending a monthly average of " + productMpm + " moves per month with a historical average of " + productHistAvg + " moves last month.");
