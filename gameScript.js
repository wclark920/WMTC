// javascript for WMTC landing page

var dino;
var gameTimer;
var timerCheck;
var speed = 20;
var newZombie;
var newZombieTimer;
var moveZombieTimer;

function init(){
	dino = document.getElementById('dino');
	dino.style.marginLeft = "400px";

	gameTimer = window.setInterval(gameLoop(), 15);
	//cloneTimer = window.setInterval(function(){cloneZombie();}, 1000);	


	newZombieTimer = window.setInterval(function(){newZombie();}, 1000);
	moveZombieTimer = window.setInterval(function(){moveNewZombie();}, 500);
}

function gameLoop(){
	document.addEventListener('keydown', function(event){
		var dinoPosition = parseInt(dino.style.marginLeft);
		if (event.keyCode == 39) { // right arrow
			dino.style.marginLeft = (dinoPosition + speed) + "px";
			dino.classList.add("flip");
			stopLoop();
		};
		if (event.keyCode == 37) { // left arrow
			dino.style.marginLeft = (dinoPosition - speed) + "px";
			dino.classList.remove("flip");
			stopLoop();
		};

		if (event.keyCode == 32) {  // fire
			dino.src = "img/trex_fire02.png";
		};
	});
	document.addEventListener('keyup', function(event){ // turn fire off
		if (event.keyCode == 32) {
			dino.src = "img/trex_stand.png";
		};
	});
}

function stopLoop(){
	window.clearInterval(gameTimer);
}

// cloning the zombie..
// function cloneZombie(){
// 	var zombie = document.getElementById('zombieImg');
// 	var clone = zombie.cloneNode(false); // make zombie clone
// 	var cloneDiv = document.getElementById('banner');
// 	newClone = cloneDiv.appendChild(clone);
// 		newClone.style.height = "35px";
// 		newClone.style.marginTop = "1px";
// 		newClone.style.visibility = "visible";
// 	moveZombie();
// }

// function moveZombie(){
// 	var newZombie = document.getElementById('banner');
// 	var newZom = newZombie.innerHTML('zombieImg');
// 	var newZombiePos = parseInt(newZom.style.marginLeft);
// 	newZom.style.marginLeft = (newZombiePos + 10) + "px";
// }

function newZombie(){
	newZombie = document.createElement("img");
	newZombie.setAttribute(src, "img/zombie_walk_right.gif");
	newZombie.style.marginLeft = "10px";
	console.log("something is happening");
}

function moveNewZombie(){
	var zomPosition = parseInt(newZombie.style.marginLeft);
	newZombie.style.marginLeft = (zomPosition + speed) + "px";
}








