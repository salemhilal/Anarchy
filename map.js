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
	Map.prototype.columnWidth = 20;
	Map.prototype.walkHeight = 300;
	Map.prototype.dropHeight = 100;

	Map.prototype.generate = function (mapWidth) {
		numberOfColumns = mapWidth / this.columnWidth;
		for (var x = 0; x < numberOfColumns; x++) {

	    	var newColumn = new Column();
	    	if(x != 0 && Math.random() < .75){ 	//Use the old block height
	    		newColumn.height = this.columns[x-1].height;
	    	}
	    	else{								//Generate a new one
	    		newColumn.height = randomRange(this.walkHeight - 20, this.walkHeight + 20);
	    	}

	    	newColumn.toneHeight = newColumn.height - 170 + randomRange(-3, 3);

	    	this.columns[x] = newColumn;
		}
	}

	Map.prototype.draw = function(ctx) {
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

			//Draw some grass
			if(hasGrass){
				ctx.fillStyle = "#539A44";
				ctx.fillRect(pos, mapHeight-height, columnWidth, 15)
			}

			pos += columnWidth;
		}
	};


