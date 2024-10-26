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

}
