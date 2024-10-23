class Game {
  constructor() {
    this.score = 0;
    this.lives = 5;
    this.gameOver = false;

    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
  }

  createNewScreen(id) {
    const screenElement = document.createElement("div");
    screenElement.setAttribute("id", id);
    myGame.element.appendChild(screenElement);
  }
}
const myGame = new Game();
