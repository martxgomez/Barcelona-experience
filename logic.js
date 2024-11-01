document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      player.direction = "left";
      break;
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
  if (!myGame.gameOver) {
    requestAnimationFrame(gameLoop);
    frames++;

    if (myGame.currentScreen === 1) {
      if (!myGame.isAmbienceSoundPlaying) {
        myGame.ambienceSound.currentTime = 0;
        myGame.ambienceSound.play();
        myGame.isAmbienceSoundPlaying = true;
      }

      player.receiveDamage();
      if (frames % 100 === 0) {
        new Cockroach();
      }

      if (frames % 80 === 0) {
        new Tourist();
      }

      Cockroach.cockroachArray.forEach((cockroach) => {
        cockroach.move();
      });

      Tourist.touristsArray.forEach((tourist) => {
        tourist.move();
      });
      player.attack();

      player.move(player.direction);
    } else if (myGame.currentScreen === 2) {
      player.move(player.direction);
      player.block(player.direction);
    }

    if (
      myGame.currentScreen === 1 &&
      player.positionLeft + player.width >= myGame.width
    ) {
      myGame.changeScreen(2, Pickpocket);
    } else if (myGame.currentScreen === 2) {
      if (myGame.isAmbienceSoundPlaying) {
        myGame.ambienceSound.pause();
        myGame.isAmbienceSoundPlaying = false;
      }
      if (!myGame.isAmbienceSoundMetroPlaying) {
        myGame.ambienceSoundMetro.currentTime = 10;
        myGame.ambienceSoundMetro.play();
        myGame.isAmbienceSoundMetroPlaying = true;
      }
      if (myGame.pickpocket) {
        myGame.pickpocket.move();
        myGame.pickpocket.pick();
      }
      if (player.positionLeft + player.width >= myGame.width) {
        myGame.changeScreenFinal(3);
        myGame.ambienceSoundMetro.pause();
      }
    } else if (myGame.currentScreen === 3) {
      myGame.ambienceSoundMetro.pause();
      myGame.isAmbienceSoundMetroPlaying = false;
      window.location.href = "./ganar.html";
      if (!myGame.isAmbienceOfficePlaying) {
        myGame.ambienceOffice.currentTime = 10;
        myGame.ambienceOffice.play();
        myGame.isAmbienceOfficePlaying = true;
      }
    }
  }
}

requestAnimationFrame(gameLoop);
