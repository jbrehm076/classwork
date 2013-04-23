// JavaScript Document Jeramie Brehm 23 April 2013 else if statements

var kidHeight = 50;
var minHeight = 48;
var wParentHeight = 45; //the height of kid with parent

//if child is over 48 inches height
if(kidHeight > minHeight){
	//code performed if condition true
	console.log("You can ride the coaster!");
	}else if(kidHeight > wParentHeight ){
		//youcan ride with a parent present
		console.log("YOu can ride but only with a parent present.");
	}else{
		//sorry you have growing to do
		console.log("Sorry kid you got some growing to do");
	}
