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
function Map() {}
	Map.prototype.height = 600; // default for our game
	Map.prototype.columns = [];
	Map.prototype.columnWidth = 15;
	Map.prototype.walkHeight = 240;
	Map.prototype.dropHeight = 100;

	Map.prototype.generate = function (mapWidth) {
		numberOfColumns = mapWidth / this.columnWidth;
		for (var x = 0; x < numberOfColumns; x++) {

	    	var newColumn = new Column();
	    	if(x != 0 && Math.random() < .70){ 	//Use the old block height
	    		newColumn.height = this.columns[x-1].height;
	    		newColumn.toneHeight = this.columns[x-1].toneHeight 
	    		 + (Math.random() > .7 ? this.columnWidth  * randomRange(-1,1) : 0);


	    	}
	    	else{								//Generate a new one
	    		newColumn.height = randomRange(this.walkHeight - 20, this.walkHeight + 20);
	    		newColumn.toneHeight = newColumn.height - parseInt((this.height*3)/11)
	    	}

	    	this.columns[x] = newColumn;
		}
	}

	//Draws the.. uh, sky.
	Map.prototype.drawSky = function (ctx){
		ctx.fillStyle = "#53545E";
		ctx.fillRect(0, 0, 900, 600);
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
	};

	Map.prototype.draw = function(ctx) {
		//First, draw the sky.
		this.drawSky(ctx);
		//Then, overlay the ground on top.
		this.drawGround(ctx);
	}


