function randomRange(x, y) {
	return Math.floor( Math.random() * (y - x + 1) + x);
}

function Column() {}
	Column.prototype.material = 0; // 0:Rock
	Column.prototype.height = 200;

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
	    	newColumn.height = randomRange(this.walkHeight - 20, this.walkHeight + 20);
	    	this.columns[x] = newColumn;
		}
	}

	Map.prototype.draw = function(ctx) {
		var pos = 0;
		var columnWidth = this.columnWidth;
	    var mapHeight = this.height;

		for (var x = 0; x < this.columns.length; x++) {
			var height = this.columns[x].height;
			var color = "#3D3D3D"
	    	ctx.fillStyle = color;
			ctx.fillRect(pos, mapHeight - height, columnWidth, height);
			pos += columnWidth;
		}
	};


