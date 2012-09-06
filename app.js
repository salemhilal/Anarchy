

var frameLength = 20 //Update the frame 50 times/sec.  

  , canvas = document.getElementById("myCanvas")
  , ctx = canvas.getContext("2d")
  
  , map = new Map()
  , projectiles = []
  , players = [];

function explodeEffect(x, y, color){
	for(var i = 0; i<5; i++){
		projectiles.push(
			new Projectile(x, y, randomRange(-2,2), randomRange(5,10),0, color)
		);
	}
}
function updateCanvas(){
	//Draw the map
	map.draw(ctx);	
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
	updateCanvas();
}, frameLength)
