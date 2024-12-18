class Game {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
    this.currentScreen = 1;
    this.livesElement = document.querySelector("#lives");
    this.scoreElement = document.querySelector("#score");

    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;

    this.updateLives();
    this.updateScore();

    this.ambienceSound = new Audio("./sounds/ambienceSound.wav");
    this.ambienceSoundMetro = new Audio("./sounds/ambienceSoundMetro.m4a");
    this.isAmbienceSoundPlaying = false;
    this.isAmbienceSoundMetroPlaying = false;
    this.ambienceOffice= new Audio ("./sounds/ambienceOffice.mp3")
    this.isAmbienceOfficePlaying = false;
  }

  updateLives() {
    this.livesElement.innerText = "♥️".repeat(this.lives);
  }
  updateScore() {
    this.scoreElement.innerText = this.score.toString();
  }
  clearScreen() {
    this.element.innerHTML = "";
  }

  changeScreen(screen, Pickpocket) {
   
    this.currentScreen = screen;
    this.clearScreen();
    Cockroach.cockroachArray=[];
    Tourist.touristsArray=[];
 

    this.obstacleTop;
    this.obstacleBottom;
    this.obstacleCenter;

    if (screen === 2) {
      this.element.setAttribute( "id", "game-area-2")
      this.obstacleTop = new Obstacle("obstacle-top");
      this.element.appendChild(this.obstacleTop.element);
      this.obstacleTop.height =
        this.obstacleTop.element.getBoundingClientRect().height;
      this.obstacleTop.width =
        this.obstacleTop.element.getBoundingClientRect().width;

      this.obstacleBottom = new Obstacle("obstacle-bottom");
      this.element.appendChild(this.obstacleBottom.element);
      this.obstacleBottom.height =
        this.obstacleBottom.element.getBoundingClientRect().height;
      this.obstacleBottom.width =
        this.obstacleBottom.element.getBoundingClientRect().width;

      if (myGame.score >= 300) {
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

      setTimeout(() => {
        // código asíncrono
        this.pickpocket = new Pickpocket();
      }, 500);
    }
  }

  changeScreenFinal(screen) {
    this.currentScreen = screen;
    this.clearScreen();
    this.element.classList.add("win");
  
  }
}

const myGame = new Game();
