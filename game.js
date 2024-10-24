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
    myGame.element.innerHTML = "";
  }
  createNewScreen(id) {
    const screenElement = document.createElement("div");
    screenElement.setAttribute("id", id);
    myGame.element.appendChild(screenElement);
  }

  changeScreen(screen) {
    this.currentScreen = screen;
    this.clearScreen();

    if(screen===2){
      myGame.createNewScreen("screen-2");
    }
  }
}

const myGame = new Game();
