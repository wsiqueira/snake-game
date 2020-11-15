window.onload = function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var item = canvas.getContext('2d');
	var snake = canvas.getContext('2d');

	document.addEventListener('keydown', keyPress);

	setInterval(game, 60);

	var speed = 1;
	var speedX = speedY = 0;
	var snakeX = snakeY = 10;
	var gridLength = 20;
	var gridNumber = 20;
	var itemX = itemY = 15;
	var trail = [];
	var tail = 5;

	function game() {
		snakeX += speedX;
		snakeY += speedY;
		if (snakeX < 0) {
			snakeX = (gridNumber - 1)
		}
		if (snakeX > (gridNumber - 1)) {
			snakeX = 0
		}
		if (snakeY < 0) {
			snakeY = (gridNumber - 1)
		}
		if (snakeY > (gridNumber - 1)) {
			snakeY = 0
		}

		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);

		item.fillStyle = 'red';
		item.fillRect((itemX*gridLength), (itemY*gridLength), gridLength, gridLength);

		snake.fillStyle = 'gray';
		for (var i = 0; i < trail.length; i++) {
			var currentTrail = trail[i];

			snake.fillRect((currentTrail.x*gridLength), (currentTrail.y*gridLength), (gridLength - 1), (gridLength - 1));

			if(currentTrail.x == snakeX && currentTrail.y == snakeY) {
				speedX = speedY = 0;
				tail = 5;
			}
		}

		trail.push({x:snakeX, y:snakeY});

		while(trail.length > tail) {
			trail.shift();
		}

		if(itemX == snakeX && itemY == snakeY) {
			tail++;
			itemX = Math.floor(Math.random()*gridNumber);
			itemY = Math.floor(Math.random()*gridNumber);
		}
	}

	function keyPress(event) {
		switch (event.keyCode) {
			case 37: /*Left*/
				speedX = -speed;
				speedY = 0;
				break;
			case 38: /*Up*/
				speedX = 0;
				speedY = -speed;
				break;
			case 39: /*Right*/
				speedX = speed;
				speedY = 0;
				break;
			case 40: /*Down*/
				speedX = 0;
				speedY = speed;
				break;
			default:
				break;
		}
	}

}