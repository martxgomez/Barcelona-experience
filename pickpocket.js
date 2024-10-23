class Pickpocket {
  constructor() {
    //Definimos en pantalla y su posición aleatoria
    this.element = document.createElement("div");
    this.element.setAttribute("id", "pickpocket");
    myGame.element.appendChild(this.element);
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
  }
  move() {
    this.positionLeft += this.velocity;
    this.element.style.left = this.positionLeft + "px";
  }
}
