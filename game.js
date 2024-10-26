class Game {
  constructor() {
    this.score = 0;
    this.lives = 5;
    this.gameOver = false;
    this.currentScreen = 1;

    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
  }

  clearScreen() {
    this.element.innerHTML = "";
  }

  changeScreen(screen, Pickpocket) {
    this.currentScreen = screen;
    this.clearScreen();

    if (screen === 2) {
      const obstacleTop = new Obstacle("obstacle-top");
      this.element.appendChild(obstacleTop.element);
      const obstacleBottom = new Obstacle("obstacle-bottom");
      this.element.appendChild(obstacleBottom.element);
      // const obstacleCenter = new Obstacle("obstacle-center");
      // this.element.appendChild(obstacleCenter.element);
      if (player.score >= 300) {
        player.positionLeft = 300;
        player.positionBottom = (this.height - player.height) / 2;
      } else if (player.score >= 100 && player.score < 300) {
        player.positionLeft = 150;
        player.positionBottom = (this.height - player.height) / 2;
      } else {
        player.positionLeft = 100;
        player.positionBottom = (this.height - player.height) / 2;
      }
      player.velocity = 3;
      player.element.style.left = player.positionLeft + "px";
      player.element.style.bottom = player.positionBottom + "px";
      myGame.element.appendChild(player.element);
      myGame.element.appendChild(player.scoreElement);
      myGame.element.appendChild(player.livesElement);

      setTimeout(() => {
        // código asíncrono
        this.pickpocket = new Pickpocket();
      }, 500);
    }
  }
}

const myGame = new Game();
