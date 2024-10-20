document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        player.move("left");
        break;
      case "ArrowRight":
        player.move("right");
        break;
      case "ArrowUp":
        player.move("top");
        break;
      case "ArrowDown":
        player.move("bottom");
        break;
    }
player.attack();
})

document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
         player.direction=null;
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
  crashTest();

  enemyArea.move();
  player.move(player.direction);
}

requestAnimationFrame(gameLoop);