

var frameLength = 20 //Update the frame 50 times/sec.  

  , canvas = document.getElementById("myCanvas")
  , ctx = canvas.getContext("2d")
  
  , map = new Map()
  , projectiles = []
  , players = [];

<<<<<<< HEAD
function explodeEffect(x, y, p, color){
	for(var i = 0; i<3*Math.log(20 * p); i++){
		projectiles.push(
			new Projectile(
				x, y, 
				randomRange(-3,3), 
				randomRange(4*Math.log(p),
				10*Math.log(p)),
				0, 
				color)
		);
	}
}

function updateCanvas(){
	//Draw the map
	map.draw(ctx);	

	//Put clouds here

	//Draw the characters
	projectiles.forEach(function(x){
		if (x.exploded) {
			projectiles.splice(projectiles.indexOf(x),1);
		}
		else {
			x.update();
			x.draw(ctx); 
		}
	});

	players.forEach(function(x){
		// x.update();
		x.draw(ctx);
	});
}

function animationTest(){
	//Draw projectile
	//Apply gravity
	//Explode things.
}

function keyPressed(event) {
	if (event.keyCode === 37) {
		players[0].x -= 5
	}
	else if (event.keyCode === 39) {
		players[0].x += 5;
	}
	players[0].update()
    updateCanvas();
}

//Animation loop
var animator = setInterval(function(){
	updateCanvas();
}, frameLength)

var x = new Player(50,0)
x.update()
players.push(x);
updateCanvas();

// Controller Stuff
canvas.addEventListener('keydown', keyPressed, false);
canvas.setAttribute('tabindex','0');
canvas.focus();
