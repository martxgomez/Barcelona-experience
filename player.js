class Player {
  constructor() {
    //Creamos el jugador y sus atributos,score y life en pantalla
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player-secondscreen-1");
    myGame.element.appendChild(this.element);
    this.scoreElement = document.createElement("div");
    this.scoreElement.setAttribute("id", "score");
    this.score = 0;
    myGame.element.appendChild(this.scoreElement);
    this.livesElement = document.createElement("div");
    this.livesElement.setAttribute("id", "life");
    myGame.element.appendChild(this.livesElement);
    this.lives = 3;

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = (myGame.height-this.height)/2;
    // this.positionLeft = 0;
    this.velocity = 5;
    this.direction = null;
    
  }

  //Definimos el movimiento del jugador
  //No se si eliminar la direccion izquierda para evitar problemas a futuro
  move(direction) {
    switch (direction) {
      case "left":
        this.positionLeft -= this.velocity;
        if (this.positionLeft < 0) {
          this.positionLeft = 0;
        }
        break;
      case "right":
        this.positionLeft += this.velocity;
        if (this.positionLeft > myGame.width - this.width) {
          this.positionLeft = myGame.width - this.width;
        }
        break;
      case "bottom":
        this.positionBottom -= this.velocity;
        if (this.positionBottom < 0) {
          this.positionBottom = 0;
        }
        break;
      case "top":
        this.positionBottom += this.velocity;
        if (this.positionBottom > myGame.height - this.height) {
          this.positionBottom = myGame.height - this.height;
        }
        break;

      default:
        break;
    }

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
  }

  //Definimos el método atacar a una cucaracha(para ganar puntuación)
  attack() {
    //marcamos los limites del player
    const playerLeft = this.positionLeft;
    const playerRight = this.positionLeft + this.width;
    const playerBottom = this.positionBottom;
    const playerTop = this.positionBottom + this.height;

    //Verificamos cada cucaracha y su posición
    Cockroach.cockroachArray.forEach((cockroach) => {
      //marcamos los limites de la cucaracha
      const cockroachLeft = cockroach.positionLeft;
      const cockroachRight = cockroach.positionLeft + cockroach.width;
      const cockroachBottom = cockroach.positionBottom;
      const cockroachTop = cockroach.positionBottom + cockroach.height;

      if (
        playerRight > cockroachLeft &&
        playerLeft < cockroachRight &&
        playerTop > cockroachBottom &&
        playerBottom < cockroachTop
      ) {
        this.score += 50;
        this.scoreElement.innerText = this.score;
        cockroach.destroy();
      }
    });
  }

  receiveDamage() {
    //marcamos los limites del player
    const playerLeft = this.positionLeft;
    const playerRight = this.positionLeft + this.width;
    const playerBottom = this.positionBottom;
    const playerTop = this.positionBottom + this.height;

    //Verificamos cada cucaracha y su posición
    Tourist.touristsArray.forEach((tourist) => {
      //marcamos los limites de la cucaracha
      const touristLeft = tourist.positionLeft;
      const touristRight = tourist.positionLeft + tourist.width;
      const touristBottom = tourist.positionBottom;
      const touristTop = tourist.positionBottom + tourist.height;

      if (
        playerRight > touristLeft &&
        playerLeft < touristRight &&
        playerTop > touristBottom &&
        playerBottom < touristTop &&
        !tourist.hasDamagedPlayer
      ) {
        this.lives--;
        this.livesElement.innerText = this.lives;
        console.log(this.lives);
        tourist.hasDamagedPlayer = true;
        //si pierde todas las vidas pierde
        if (this.lives <= 0) {
          myGame.gameOver = true;
          this.gameOverElement = document.createElement("div");
          this.gameOverElement.setAttribute("id", "game-over-1");
          myGame.element.appendChild(this.gameOverElement);
        }
      }
    });
  }
}

const player = new Player();
