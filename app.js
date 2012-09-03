/* Projectiles - Here, we define a projectile class which is used to govern how the projectiles are
used in weapons and interact with their environment. Each projectile defines a mass, damage raduius,
damage amount and most importantly, a trajectory equation*/

function Projectile() {

}

Projectile.prototype.mass = 10;
Projectile.prototype.equation = [1, 1, 1];
Projectile.prototype.intialPosition = (0,0);

Projectile.prototype.damageRaduis = 10;
Projectile.prototype.damage = 50; // Damage at center of radius

// Weapons
function Weapon() {
	this.fire = function(angle, mode, power) {}; // Fires the weapon at a given angle, mode, power
	this.switchMode = function() {}; // Switches the weapon mode (if there is a secondary)
}

Weapon.prototype.name = "Bow"
Weapon.prototype.currentMode = "primary"; // Primary or secondary mode
Weapon.prototype.range = 100; 
Weapon.prototype.ammunition = 20;
Weapon.prototype.accuracy = 20;

Weapon.prototype.primaryProjectile = Projectile("arrow");
Weapon.prototype.secondaryProjectile = null;


// Player prototype
function Player() {
    this.move = function(vector) {}; // Moves the player by a vector left or right
    this.aimWeapon = function (direction) {}; // Aims the players weapon in a given direction (0-360)
    this.shootWeapon = function (weaponMode) {}; // Fires the weapon in primary or secondary mode

    this.pickUpObject = function (objectName) {}; // Adds nearby object to inventory
    this.dropObject = function (objectName) {}; // Adds nearby object to inventory

    this.switchWeapon = function (objectName) {}; // Cycles through the players weapons

}

Player.prototype.health = 100;
Player.prototype.position = (0,0);
Player.prototype.color = "black";
Player.prototype.name = "Wilson";

Player.prototype.inverntory = [];
Player.prototype.weapons = []; // 0:Primary 2:Secondary 3:Grenades 4:Special

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

function run() {

}