

var frameLength = 20 //Update the frame 50 times/sec.  

  , canvas = document.getElementById("myCanvas")
  , ctx = canvas.getContext("2d")
  
  , map = new Map()
  , gameObjects = [];

function updateCanvas(){
	//Draw the map
	map.draw(ctx);	
	//Draw the characters
	gameObjects.forEach(function(x){
		x.update();
		x.draw(ctx);
	});
}

function animationTest(){
	//Draw projectile
	//Apply gravity
	//Explode things.
}

//Animation loop
var animator = setInterval(function(){
	/*if(framecount%50 == 0){
		map.generate(900);	
	}*/
	updateCanvas();
}, frameLength)
