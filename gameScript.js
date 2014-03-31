// javascript for WMTC landing page

var dino;
var gameTimer;
var createZombieTimer;
var speed = 1;

function init(){
	dino = document.getElementById('dino');
	dino.style.marginLeft = "400px";

	gameTimer = window.setInterval(gameLoop, 15);
	createZombieTimer = window.setInterval(createZombie, 1000);
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
	var newZom = document.getElementById('banner').appendChild(imgElem);
	newZom.style.height = "40px";
	newZom.style.width = "auto";
	newZom.style.display = "block";

	var zomPos = parseInt(newZom.style.marginLeft);

	if (zomPos > 0) {
		newZom.style.marginLeft = (zomPos + 50) + "px";
	}
}


function stopLoop(){
	window.clearInterval(gameTimer);
}

