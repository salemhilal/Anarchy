

var frameLength = 20 //Time, in ms, between frame renders. 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var map = new Map();
map.generate(900);

var gameObjects = [];


function updateCanvas(){
	//Draw the map
	map.draw(ctx);	
	//Draw the characters
		//TODO
}

//Animation loop
var framecount = 0;
var animator = setInterval(function(){
	framecount++;
	if(framecount%50 == 0){
		map.generate(900);	
	}
	updateCanvas();
}, frameLength)
