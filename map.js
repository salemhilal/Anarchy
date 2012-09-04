//Returns a random int inside the given range
function randomRange(low, high) {
	return Math.floor( Math.random() * (high - low + 1) + low);
}

//Represents an individual column of the map.
function Column() {}
	Column.prototype.material = 0; // 0:Rock 
	Column.prototype.height = 200;
	Column.prototype.toneHeight = 100; //Height of alternate coloring
	Column.prototype.hasGrass = true;

//Represents the map in its entirety. 
function Map(width) { if(width != null) this.width = null; this.generate(); }
	Map.prototype.height      = 600; // default for our game
	Map.prototype.width       = 1100;
	Map.prototype.columns     = [];
	Map.prototype.columnWidth = 15;
	Map.prototype.walkHeight  = 240;
	Map.prototype.dropHeight  = 100;
	Map.prototype.colors = {1: "", 2: "#dedcdb", 3:"#f1f1f1", 4:"#988e86", 5:"#493728", 6:"000000", 7:"ffffff", 8:"#fbf5f5", 9:"#e1e1e1"};
	Map.prototype.cloud =  [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,4,9,9,7,7,4,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,4,9,9,8,7,8,8,4,4,4,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,4,9,9,8,8,8,8,7,7,4,4,1,1,1,1,1],
			 [1,1,1,1,4,4,4,4,4,4,4,9,9,9,8,7,7,7,7,4,1,1,1,1,1],
			 [1,1,1,4,9,8,8,7,7,7,7,4,9,9,7,7,7,7,7,4,4,1,1,1,1],
			 [1,1,4,9,9,8,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,1,1],
			 [1,4,9,9,9,9,8,8,8,7,7,7,7,7,7,7,7,7,9,9,8,8,9,4,1],
			 [1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,4,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],]
	Map.prototype.drawGrid = function drawGuy2(guy, size, position) {
	    for(var row = 0; row < 25; row++) {
			for(var col = 0; col <25; col++) {
				var pixel = guy[row][col]
				if (pixel === 1)
					{continue;}
				else
					{
					ctx.fillStyle = this.colors[pixel];
					var xpos = col*size + position[0];
					var ypos = row*size + position[1];
					ctx.fillRect(xpos, ypos, size, size);
				}
			}
		}
	}
	Map.prototype.cloud1 = 0;
	Map.prototype.cloud2 = 0;

	//Gets the column at x
	Map.prototype.getColumn = function(x){
		if(this.columns[Math.floor(x/this.columnWidth)])
			return this.columns[Math.floor(x/this.columnWidth)];
		else
			return null;
	}
	//Gets the height of the column at x
	Map.prototype.getColumnHeight = function(x){
		if(this.columns[Math.floor(x/this.columnWidth)])
			return this.columns[Math.floor(x/this.columnWidth)].height;
		else
			return null;
	}
	//Sets the height of the column at x
	Map.prototype.setColumnHeight = function(x,h){
		this.columns[Math.floor(x/this.columnWidth)].height = h;
	}
	//Explodes column at x, with radius p
	Map.prototype.explode = function(x,p){
		if (p == 0) return;

		//Initial damage
		var index = Math.floor(x/this.columnWidth);
		if(this.columns[index] != null){

			window.explodeEffect(x, this.height - this.getColumnHeight(x), p, "#B55D2A")
			col = this.columns[index]
			col.hasGrass = false;
			col.height = col.height -  parseInt(this.columnWidth * p);
			if(col.height < col.toneHeight) col.toneHeight = col.height;
			if(col.height <= 0) col.height = 0;
		
		}

		//Splash damage
		for(var i=1; i<=p; i++){
			if(this.columns[index +i] != null){
				col = this.columns[index + i]
				col.hasGrass = false;
				col.height = col.height -  parseInt(this.columnWidth * (1/i) * p);
				if(col.height < col.toneHeight) col.toneHeight = col.height;
				if(col.height <= 0) col.height = 0;
			}
			if(this.columns[index -i] != null){
				col = this.columns[index - i]
				col.hasGrass = false;
				col.height = col.height -  parseInt(this.columnWidth * (1/i) * p);
				if(col.height < col.toneHeight) col.toneHeight = col.height;
				if(col.height <= 0) col.height = 0;
			}
		}
	}
	Map.prototype.generate = function () {
		var numberOfColumns = this.width / this.columnWidth;
		for (var x = 0; x < numberOfColumns; x++) {

	    	var newColumn = new Column();
	    	if(x != 0 && Math.random() < .70){ 	//Use the old block height
	    		newColumn.height = this.columns[x-1].height;
	    		newColumn.toneHeight = this.columns[x-1].toneHeight 
	    		//bit of variation
	    		+ (Math.random() > .7 ? this.columnWidth  * randomRange(-1,1) : 0);
	    	}
	    	else{								//Generate a new one
	    		newColumn.height = randomRange( this.walkHeight - 20, this.walkHeight + 20);
	    		newColumn.toneHeight = newColumn.height - parseInt((this.height*3)/11)
	    	}
	    	this.columns[x] = newColumn;
		}
	}
	//Draws the... uh, sky.
	Map.prototype.drawSky = function (ctx){
		ctx.fillStyle = "#53545E";
		ctx.fillRect(0, 0, this.width, this.height);
	}

	//Draws the ground
	Map.prototype.drawClouds = function(ctx){
		this.cloud1 = (this.cloud1 + .5) % this.width;
		this.cloud2 = (this.cloud2 + .2) % this.width;
		console.log(this.cloud1)
		console.log(this.cloud2)
		console.log("those were clouds")
		this.drawGrid(this.cloud, 3, [this.cloud2,20]);
    	this.drawGrid(this.cloud, 6, [this.cloud1,50]);
	}



	//Draws the ground.
	Map.prototype.drawGround = function(ctx) {
		var pos = 0
		  , columnWidth = this.columnWidth
	      , mapHeight = this.height;

		for (var x = 0; x < this.columns.length; x++) {
			var height = this.columns[x].height
			  , toneHeight = this.columns[x].toneHeight
			  , hasGrass = this.columns[x].hasGrass;
	    	
	    	//Draw column
	    	ctx.fillStyle = "#B55D2A";
			ctx.fillRect(pos, mapHeight - height, columnWidth, height);
			
			//Shade the column
			ctx.fillStyle = "#9A4616";
			ctx.fillRect(pos, mapHeight - toneHeight, columnWidth, toneHeight);

			//Draw some grass, unless it's been blown off.
			if(hasGrass){
				ctx.fillStyle = "#539A44";
				ctx.fillRect(pos, mapHeight-height, columnWidth, columnWidth)
			}

			pos += columnWidth;
		}
	}

	Map.prototype.draw = function(ctx) {
		//First, draw the sky.
		this.drawSky(ctx);
		//Then, put some clouds on dat.
		this.drawClouds(ctx);
		//Finally, overlay the ground on top.
		this.drawGround(ctx);
	}




