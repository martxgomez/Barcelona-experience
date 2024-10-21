class Player {
  constructor() {
    //Creamos el jugador y sus atributos,score y life en pantalla
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player");
    myGame.element.appendChild(this.element);
    this.scoreElement = document.createElement("div");
    this.scoreElement.setAttribute("id", "score");
    myGame.element.appendChild(this.scoreElement);
    this.lifeElement = document.createElement("div");
    this.lifeElement.setAttribute("id", "life");
    myGame.element.appendChild(this.lifeElement);

    this.positionBottom = (myGame.height/2);
    this.positionLeft = 0;
    this.velocity = 30;
    this.direction = null;
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
  }

  //Definimos el movimiento del jugador
  //No se si eliminar la direccion izquierda para evitar problemas a futuro
  move(direction) {
    switch (direction) {
    //   case "left":
    //     this.positionLeft -= this.velocity;
    //     if (this.positionLeft < 0) {
    //       this.positionLeft = 0;
    //     }
    //     break;
      case "right":
        this.positionLeft += this.velocity;
        if (this.positionLeft > myGame.width - this.width) {
          this.positionLeft = myGame.width - this.width;
        }
        break;
      case "bottom":
        this.positionBottom -= this.velocity;
        if (this.positionBottom < 0) {
          this.positionBottom = myGame.height/2;
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
      const cockroachTop = cockroach.positionBottom+ cockroach.height;

      if (
        playerRight> cockroachLeft  &&
        playerLeft < cockroachRight &&
        playerTop > cockroachBottom &&
        playerBottom < cockroachTop
      ) {
        this.score+=50;
        this.scoreElement.innerText= this.score +"p.";
        cockroach.destroy();
      }
    });
  }
}

const player = new Player();
