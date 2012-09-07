

var frameLength = 20 //Update the frame 50 times/sec.  

  , canvas = document.getElementById("myCanvas")
  , ctx = canvas.getContext("2d")
  
  , map = new Map()
  , projectiles = []
  , players = [];

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
		x.update();
		x.draw(ctx);
	});
}

function animationTest(){
	var t = new Projectile(80,200,20,10); projectiles.push(t); 
}

function keyPressed(event) {
	if (event.keyCode === 37) {//Move left
		players[0].xspeed = -4;
	}
	else if (event.keyCode === 39) {//move right
		players[0].xspeed = 4;
	}
	else if (event.keyCode === 38){
		console.log("jump?");
		if(players[0].canJump){
			console.log("Jump!");
			players[0].yspeed = 15; 	
			players[0].y-=2;
		} 
	}
}

function keyReleased(event){
	if (event.keyCode === 37) {//Move left
		players[0].xspeed = 0;
	}
	else if (event.keyCode === 39) {//move right
		players[0].xspeed = 0;
	}
}

//Animation loop
var animator = setInterval(function(){
	updateCanvas();
}, frameLength);

var x = new Player(50,0);
x.update();
players.push(x);

// Controller Stuff
canvas.addEventListener('keydown', keyPressed, false);
canvas.addEventListener('keyup', keyReleased, false);


//Prep canvas for prime time. 
canvas.setAttribute('tabindex','0');
canvas.focus();
