document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      player.direction = "right";
      break;
    case "ArrowUp":
      player.direction = "top";
      break;
    case "ArrowDown":
      player.direction = "bottom";
      break;
  }
  player.attack();
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowUp":
    case "ArrowDown":
      player.direction = null;
      break;
  }
});

let frames = 0;

// Creamos un loop infinito
// le decimos a nuestra app que queremos reproducir código en cada frame
function gameLoop() {
  requestAnimationFrame(gameLoop);
  frames++;

  Cockroach.cockroachArray.forEach((cockroach) => {
    cockroach.move();
  });

  Tourist.touristsArray.forEach((tourist) => {
    tourist.move();
  });
  player.attack();

  if (frames % 100 === 0) {
    new Cockroach();
  }

  if (frames % 80 === 0) {
    new Tourist();
  }

  //   enemyArea.move();
  player.move(player.direction);
}

requestAnimationFrame(gameLoop);
