// JavaScript written by Jeramie Brehm 18APR2013 Expressions Personal

//determine how storage is used on iphone and by songs and pictures.

//define device
var deviceType = prompt("What type of device are you using to store your songs and photos? i.e. ipod"); 

//define how many photo's are on phone
var devicePhotos = prompt("How many photos are on your " + deviceType + " phone?");

//define average size of each photo
var devicePhotoSize = prompt("How much memory does each photo take up in megabytes on average on your " + deviceType + "?");

//define how many songs are on phone
var deviceSong = prompt("How many songs do you have on your " + deviceType + "?");

//define avg. size of each song.
var deviceSongSize = prompt("How much memory does each song take up on average in megabytes?"); 

//define total used space; calculation: no. of pics mult. by avg space per pic plus number of songs mult. by avg size per song.
var  usageTotal = devicePhotos * devicePhotoSize + deviceSong * deviceSongSize;

//Display to console in writer defined format.
console.log("Your " + deviceType + " is utilizing " + usageTotal + " megabytes of storage for your songs and photos.");