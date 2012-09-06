



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var map = new Map();
map.generate(900);

var gameObjects = [];


//Draws the.. uh, sky.
function drawSky(ctx){
	ctx.fillStyle = "#7E79EB";
	ctx.fillRect(0, 0, 900, 600);
}

function drawMap(){
	map.draw(ctx)
}

function updateCanvas(){
	//Draw the sky
	drawSky(ctx);
	//Overlay the map
	map.draw(ctx);
	//Draw the characters
		//TODO
}

//Animation loop
	updateCanvas();
