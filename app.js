/* Projectiles - Here, we define a projectile class which is used to govern how the projectiles are
used in weapons and interact with their environment. Each projectile defines a mass, damage raduius,
damage amount and most importantly, a trajectory equation*/

function Projectile() {}
	
	

	Projectile.prototype.position = (0,0);
	Projectile.prototype.mass = 10;
	Projectile.prototype.equation = [1, 1, 1];
	Projectile.prototype.intialPosition = (0,0);

	Projectile.prototype.damageRaduis = 10;
	Projectile.prototype.damage = 50; // Damage at center of radius

	Projectile.prototype.explode = function() {
	
	};

// Weapons
function Weapon() {};
	Weapon.prototype.name = "Bow";
	Weapon.prototype.currentMode = "primary"; // Primary or secondary mode
	Weapon.prototype.range = 100; 
	Weapon.prototype.ammunition = 20;
	Weapon.prototype.accuracy = 20;

	Weapon.prototype.primaryProjectile = Projectile();
	Weapon.prototype.secondaryProjectile = Projectile();

	Weapon.prototype.fire = function(angle, power) {
		if (this.ammunition > 0) {
	};

	Weapon.prototype.switchMode = function() {
		if (this.currentMode == "primary" && this.secondaryProjectile != null) {
			this.currentMode = "secondary";
		}
		else {this.currentMode = "primary"}
	}; // Switches the weapon mode (if there is a secondary)


// Player prototype
function Player() {



}

Player.prototype.health = 100;

Player.prototype.x = 0;
Player.prototype.y = 0;

Player.prototype.color = "black";
Player.prototype.name = "Wilson";

Player.prototype.inverntory = [];
Player.prototype.weapons = []; // 0:Primary 2:Secondary 3:Grenades 4:Special
Player.prototype.currentWeapon = Player.prototype.weapons[0];
Player.prototype.aimAngle = 0;

Player.prototype.score = 0; // Based on how many kills you have / how much havok you wreak

// Some parameters we may want to use later
Player.prototype.luck = 10;
Player.prototype.accuracy = 10;
Player.prototype.resillience = 10;

// Some other cool things we may consider adding? Since it is an anarchy, you can barter, cut deals,
// steal things from other people
Player.prototype.inventory = [];
Player.prototype.money = 0;
Player.prototype.kills = 0; // A parameter that records how many kills you have
Player.prototype.charm = 10

// Moves the player by a vector left or right
Player.prototype.move = function(vector) {
	// Check if the move is legal, then...
	this.x += vector[0];
	this.y += vector[1];
}; 

// aim the weapon up or down
Player.prototype.aimWeapon = function (direction) {
	this.weaponAngle += direction;
}; 

Player.prototype.adjustPower = function (change) {
	this.weaponPower += change;
};

Player.prototype.shootWeapon = function () {
	this.currentWeapon.fire(this.weaponAngle, this.weaponPower);
}; // Fires the weapon in primary or secondary mode

Player.prototype.pickUpObject = function (objectName) {}; // Adds nearby object to inventory
Player.prototype.dropObject = function (objectName) {}; // Adds nearby object to inventory
Player.prototype.switchWeapon = function (objectName) {}; // Cycles through the players weapons


var gameObjects = [];


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

//Generate map

//Draw map

function drawMap(map) {

}

//Draw players

//Set turn to player 1

//animation loop
var run = true; 
while(run){

		updateCanvas()


}

function updateCanvas(){
	//Check each render-able object, and call its move function
	a.forEach(function(x){
		x.draw();
	})
}
