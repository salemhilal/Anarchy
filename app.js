var gameObjects = [];

//Set turn to player 1

//animation loop
var run = true; 
while(run){
	updateCanvas()
}

function updateCanvas(){
	//Check each render-able object, and call its move function
	a.forEach(function(x){
		x.draw();
	})
}
