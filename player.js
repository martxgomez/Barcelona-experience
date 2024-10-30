class Player {
  constructor() {
    //Creamos el jugador y sus atributos,score y life en pantalla
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player");
    myGame.element.appendChild(this.element);

    // this.scoreElement = document.createElement("div");
    // this.scoreElement.setAttribute("id", "score");
    // this.score = 0;
    // myGame.element.appendChild(this.scoreElement);

    // this.livesElement = document.createElement("div");
    // this.livesElement.setAttribute("id", "life");
    // this.lives = 3;
    // myGame.element.appendChild(this.livesElement);

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = (myGame.height - this.height) / 2;
    this.positionLeft = 0;
    this.velocity = 4.5;
    this.direction = null;

    this.crunchSound = new Audio("./sounds/Crunch.wav");

    this.excuseMeSound = new Audio("./sounds/excuseMe.wav");

    this.sagradaFamilia = new Audio("./sounds/SagradaFamilia.mp3");

    this.sangria = new Audio("./sounds/Sangria.mp3");
    this.counter = 0;
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
        myGame.score += 50;
        myGame.updateScore();
        cockroach.destroy();
        appearScoreAdElement(cockroach.positionLeft, cockroach.positionBottom);
        this.crunchSound.currentTime = 0;
        this.crunchSound.play();
      }
    });
  }

  receiveDamage() {
    //marcamos los limites del player
    const playerLeft = this.positionLeft;
    const playerRight = this.positionLeft + this.width;
    const playerBottom = this.positionBottom;
    const playerTop = this.positionBottom + this.height;

    //Verificamos cada turista y su posición
    Tourist.touristsArray.forEach((tourist) => {
      //marcamos los limites de los turistas
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
        myGame.lives--;
        myGame.updateLives();
        tourist.hasDamagedPlayer = true;

        if (this.counter === 0) {
          this.sagradaFamilia.currentTime = 0;
          this.sagradaFamilia.play();
        } else if (this.counter === 1) {
          this.excuseMeSound.currentTime = 0;
          this.excuseMeSound.play();
        } else {
          this.sangria.currentTime = 0;
          this.sangria.play();
        }
        this.counter = (this.counter + 1) % 3;

        myGame.element.classList.add("shake");
        setTimeout(() => {
          myGame.element.classList.remove("shake");
        }, 300);
      }
      //si pierde todas las vidas pierde
      if (!myGame.lives) {
        myGame.gameOver = true;
        this.gameOverElement = document.createElement("div");
        this.gameOverElement.setAttribute("id", "game-over-1");
        myGame.element.appendChild(this.gameOverElement);
        myGame.ambientSound.pause();
       
      }
    });
  }

  //definimos el metodo para que el player no pueda pasar por encima de los obstaculos
  //no se si añadir un obstaculo central
  block(direction) {
    //definimos límites de obstaculos

    switch (direction) {
      case "bottom":
        this.positionBottom -= this.velocity;
        if (this.positionBottom < myGame.obstacleBottom.height) {
          this.positionBottom = myGame.obstacleBottom.height;
        }
        break;
      case "top":
        this.positionBottom += this.velocity;
        if (
          this.positionBottom >
          myGame.height - myGame.obstacleTop.height - this.height
        ) {
          this.positionBottom =
            myGame.height - myGame.obstacleTop.height - this.height;
        }
        break;

      default:
        break;
    }

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
  }
}
function appearScoreAdElement(left, bottom) {
  const scoreAdElement = document.createElement("div");
  scoreAdElement.classList.add("score-ad");
  scoreAdElement.style.left = left + "px";
  scoreAdElement.style.bottom = bottom + "px";
  myGame.element.appendChild(scoreAdElement);

  setTimeout(() => {
    scoreAdElement.remove();
  }, 300);
}
const player = new Player();
