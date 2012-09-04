/* Generates a walkable map for the game
 * Map is of type [{height: int}]
 *   walkHeight: how high/low falling can occur
 *	 width: how wide the map should be.
 */
function generateMap (walkHeight, width, initialHeight){
	if(initialHeight == undefined)
		initialHeight == 200

	function generateChunk(curWidth, prevHeight){
		var newHeight = prevHeight ((2*Math.random() - 1) * walkHeight)
		if(curWidth <= 10){
			var r = [];
			for(var i=0; i<curWidth; i++){
				r.push({height: newHeight});
			}
			return r; 
		}
		else{
			var chunkWidth = (Math.random() * 10 + 1);
			var r = []
			for(var i=0; i<curWidth; i++){
				r.push({height: newHeight});
			}
			return r.concat(generateChunk(curWidth - chunkWidth, newHeight))
		}
	}

	return generateChunk(width, initialHeight);
}

function Map(colWidth, walkHeight){
	if(colWidth == null) 
		this.colWidth = 5;
	else 
		this.colWidth = colWidth;

	this.columns = generateMap(walkHeight, 900/this.colWidth, initialHeight)



}

Map.prototype.draw = function(){

}