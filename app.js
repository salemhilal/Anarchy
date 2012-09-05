/* Generates a walkable map for the game
 * Map is of type [{height: int}]
 *   walkHeight: how high/low falling can occur
 *	 width: how wide the map should be.
 */



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = new Map();
x.generate(900);
x.draw(ctx);