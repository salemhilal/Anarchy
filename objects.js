/* Projectiles - Here, we define a projectile class which is used to govern how the projectiles are
used in weapons and interact with their environment. Each projectile defines a mass, damage raduius,
damage amount and most importantly, a trajectory equation*/

function Projectile() {}
	Projectile.prototype.position = (0,0);
	Projectile.prototype.mass = 10;
	Projectile.prototype.intialPosition = (0,0);
	Projectile.prototype.damageRaduis = 10;
	Projectile.prototype.damage = 50; // Damage at center of radius
	Projectile.prototype.explode = function() {};
	Projectile.prototype.drawArray = []; // 2D array of integers that contain colors of pixels to draw
	Projectile.prototype.update = function(){}
	Projectile.prototype.draw = function() {};


function Weapon() {}
	Weapon.prototype.name = "Bow";
	Weapon.prototype.currentMode = "primary"; // Primary or secondary mode
	Weapon.prototype.range = 100; 
	Weapon.prototype.ammunition = 20;
	Weapon.prototype.accuracy = 20;
	Weapon.prototype.primaryProjectile = Projectile();
	Weapon.prototype.secondaryProjectile = Projectile();

	Weapon.prototype.fire = function(angle, power) {
		if (this.ammunition > 0) {
			//Render a projectile (give it coordinates and direction)
			return true;
		}
		else
			return false
	}

	Weapon.prototype.switchMode = function() {
		if (this.currentMode == "primary" && this.secondaryProjectile != null) {
			this.currentMode = "secondary";
		}
		else {
			this.currentMode = "primary"
		}
	}

	Weapon.prototype.drawArray = [] // 2D array of integers that contain colors of pixels to draw
	Weapon.prototype.draw = function() { 

	}


// Player prototype
function Player() { }
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

	// Some drawing parameters
	Player.prototype.facingRight = true;

	// Moves the player by a vector left or right
	Player.prototype.move = function(vector) {
		// Check if the move is legal, then...
		this.x += vector[0]; //TODO make this an object. Arrays don't make sense. 
		this.y += vector[1]; //Perhaps vector = {x:int, y:int}
	}; 

	Player.prototype.shootWeapon = function (angle, power) {
		this.currentWeapon.fire(angle, power);
	};

	Player.prototype.pickUpObject = function (objectName) {}; // Adds nearby object to inventory
	Player.prototype.dropObject = function (objectName) {}; // Adds nearby object to inventory
	Player.prototype.switchWeapon = function (objectName) {}; // Cycles through the players weapons

	Player.prototype.drawArray = [];
	Player.prototype.update = function(){
		//If the player's y is on that map chunk's map coordinate + 1, do nothing.
		//else if it's above, move it down. 
			//If it would pass through the height, move it to the ground.
		//else move it to the ground (it shouldn't hit this case.)
	}
	Player.prototype.draw = function() {

	}

