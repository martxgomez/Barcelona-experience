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

    this.obstacleTop;
    this.obstacleBottom;
    this.obstacleCenter

    if (screen === 2) {
      this.obstacleTop = new Obstacle("obstacle-top");
      this.element.appendChild(this.obstacleTop.element);
      this.obstacleTop.height = this.obstacleTop.element.getBoundingClientRect().height;
      this.obstacleTop.width = this.obstacleTop.element.getBoundingClientRect().width;
    

      this.obstacleBottom = new Obstacle("obstacle-bottom");
      this.element.appendChild(this.obstacleBottom.element);
      this.obstacleBottom.height = this.obstacleBottom.element.getBoundingClientRect().height;
      this.obstacleBottom.width = this.obstacleBottom.element.getBoundingClientRect().width;

      // this.obstacleCenter = new Obstacle("obstacle-center");
      // this.element.appendChild(this.obstacleCenter.element);
      // this.obstacleBottom.height = this.obstacleBottom.getBoundingClientRect().height;
      // this.obstacleBottom.width = this.obstacleBottom.getBoundingClientRect().width;


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

  changeScreenFinal(screen) {
    console.log("hola");
    
    this.currentScreen = screen;
    this.clearScreen();
    this.element.classList.add("win");
    console.log("Clases actuales del elemento:", this.element.classList)
}}

const myGame = new Game();
