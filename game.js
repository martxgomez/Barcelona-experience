class Game {
  constructor() {
    this.score = 0;
    this.lives = 5;
    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.gameOver = false;
  }
}

const myGame = new Game();
