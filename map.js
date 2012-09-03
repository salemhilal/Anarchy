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
		if(curWidth <= 5){
			var r = [];
			for(var i=0; i<curWidth; i++){
				r.push({height: newHeight});
			}
			return r; 
		}
		else{
			var chunkWidth = (Math.random() * 5 + 1);
			var r = []
			for(var i=0; i<curWidth; i++){
				r.push({height: newHeight});
			}
			return r.concat(generateChunk(curWidth - chunkWidth, newHeight))
		}
	}

	return generateChunk(width, initialHeight);
}