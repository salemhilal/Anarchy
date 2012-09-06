

var frameLength = 20 //Update the frame 50 times/sec.  
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var map = new Map();
map.generate(900);

var gameObjects = [];



function updateCanvas(){
	//Draw the map
	map.draw(ctx);	
	//Draw the characters
	gameObjects.forEach(function(x){
		x.update();
		x.draw();
	})
}

function animationTest(){
	//Draw player
	//Apply gravity
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
