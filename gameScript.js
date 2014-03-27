// javascript for WMTC landing page

var dino;
var gameTimer;
var zombieTimer;
var speed = 1;

function init(){
	dino = document.getElementById('dino');
	dino.style.marginLeft = "400px";

	gameTimer = window.setInterval(gameLoop, 15);
	zombieTimer = window.setInterval(zombies, 3000);
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

		//hit test
		if (event.keyCode == 32) {
			dino.src = "img/trex_fire02.png";
		};
	});
	document.addEventListener('keyup', function(event){
		if (event.keyCode == 32) {
			dino.src = "img/trex_stand.png";
		};
	});
}

function zombies(){
	var makeZombie = document.createElement("IMG").src = "zombie_walk_right.gif";
	var zr = document.getElementById("banner").innerHTML = makeZombie;
	var zombiePosition = parseInt(zr.style.marginLeft);
	zombie.style.marginLeft = (zombiePosition + speed) + "px";
}

function stopLoop(){
	window.clearInterval(gameTimer);
}

