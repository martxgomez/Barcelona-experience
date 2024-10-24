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
    this.element.innerHTML="";
  }
  // createNewScreen(id) {

  //   const screenElement = document.createElement("div");
  //   screenElement.setAttribute("id", id);
  //   myGame.element.appendChild(screenElement);
  // }

  changeScreen(screen) {
    this.currentScreen = screen;
    this.clearScreen();

    if (screen === 2) {
      // myGame.createNewScreen("game-area");
      if (player.score >= 300) {
        
        player.positionLeft = 100;
        
        // player.positionBottom = (myGame.height - this.height) / 2;
      } else if (player.score >= 100 && player.score < 300) {
        
        player.positionLeft = 60;
       
        // player.positionBottom = (myGame.height - this.height) / 2;
      } else {
      
        player.positionLeft = 30;
        
        // player.positionBottom = (myGame.height - this.height) / 2;
      }
       player.positionBottom = (myGame.height - this.height) / 2;
       player.element.style.left = player.positionLeft + "px";
      player.element.style.bottom = player.positionBottom + "px";
      myGame.element.appendChild(player.element);
      myGame.element.appendChild(player.scoreElement);
      myGame.element.appendChild(player.livesElement);
      // new Player();
    }
  }
}

const myGame = new Game();
