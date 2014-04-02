// javascript for WMTC landing page

var dino;
var gameTimer;
var createZombieTimer;
var speed = 20;

function init(){
	dino = document.getElementById('dino');
	dino.style.marginLeft = "400px";

	gameTimer = window.setInterval(gameLoop(), 15);
	createZombieTimer = window.setInterval(createZombie(), 1000);
	makeZombieTimer = window.setInterval(moveZombie(), 1000);
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


function createZombie(){
	var imgElem = document.createElement("img");
	imgElem.src = "img/zombie_walk_right.gif";
	imgElem.setAttribute("id", "frontZom");
	var newZom = document.getElementById('banner').appendChild(imgElem);
	newZom.style.marginLeft = "50px";
	newZom.style.height = "40px";
	newZom.style.width = "auto";
	newZom.style.display = "block";

	moveZombie();
}


function moveZombie(){
	var newZombie = document.getElementById('frontZom');
	newZombie.style.marginLeft = "0px";
	var zomPos = parseInt(newZombie.style.marginLeft);
	newZombie.style.marginLeft = (zomPos + speed) + "px";
	console.log('new zombie');
}


function stopLoop(){
	window.clearInterval(gameTimer);
}















