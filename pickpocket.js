class Pickpocket {
  constructor() {
    //Definimos en pantalla y su posición aleatoria
    this.element = document.createElement("div");
    this.element.setAttribute("id", "pickpocket");
    myGame.element.appendChild(this.element);

    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
    this.positionBottom = (myGame.height - this.height) / 2;
    this.positionLeft = 0;
    this.velocity = 4;
  }


  move() {
    this.positionLeft += this.velocity;
    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
    if (this.positionLeft > myGame.width) {
      // eliminar del HTML
      this.element.remove();
    }
  }


 //definimos el método para robar
  pick() {
    //marcamos los limites del player
    const playerLeft = player.positionLeft;
    const playerRight = player.positionLeft + player.width;
    const playerBottom = player.positionBottom;
    const playerTop = player.positionBottom + player.height;

    //marcamos los limites del pickpocket
    const pickpocketLeft = this.positionLeft;
    const pickpocketRight = this.positionLeft + this.width;
    const pickpocketBottom = this.positionBottom;
    const pickpocketTop = this.positionBottom + this.height;


    //si colisionan, player pierde
    if (
      playerRight > pickpocketLeft &&
      playerLeft < pickpocketRight &&
      playerTop > pickpocketBottom &&
      playerBottom < pickpocketTop
    ) {
      myGame.gameOver = true;
      myGame.ambienceSoundMetro.pause();
       window.location.href = "./perder-2.html"
    }
  }

}
