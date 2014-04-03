// javascript for WMTC landing page

var dino;
var gameTimer;
// var createZombieTimer;
var cloneZombieTimer;
var timerCheck;
var speed = 20;

function init(){
	dino = document.getElementById('dino');
	dino.style.marginLeft = "400px";

	gameTimer = window.setInterval(gameLoop(), 15);
	// createZombieTimer = window.setInterval(createZombie(), 1000);
	cloneZombieTimer = window.setInterval(function(){cloneZombie();}, 1000);
	// timerCheck = window.setInterval(timer(), 1000);
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



// makin and movin zombies!!

//var newZom;

// function createZombie(){     // default constructor.. 
// 	var imgElem = document.createElement("img");
// 	imgElem.src = "img/zombie_walk_right.gif";
// 	imgElem.setAttribute("class", "frontZom");
// 	newZom = document.getElementById('banner').appendChild(imgElem); // change: made this global
// 	newZom.style.marginLeft = "50px";
// 	newZom.style.height = "40px";
// 	newZom.style.width = "auto";
// 	newZom.style.display = "block";
// }

function cloneZombie(){
	var zombieElem = document.getElementById('banner').lastChild;
	var zombieClone = zombieElem.cloneNode(true);
	var newZombie = document.getElementById('banner').appendChild(zombieClone);
	console.log('new zombie');
}

// var timertimer = window.setInterval(function(){timer();}, 1000);

// function timer(){
// 	console.log('timer');
// }



// function moveZombie(){
// 	newZom.style.marginLeft = "0px";
// 	var zomPos = parseInt(newZombie.style.marginLeft);
// 	newZom.style.marginLeft = (zomPos + speed) + "px";
// }



function stopLoop(){
	window.clearInterval(gameTimer);
	window.clearInterval(timer);
}















