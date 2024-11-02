class Obstacle {

  constructor(id) {
    //Definimos en pantalla y su posición aleatoria
    this.element = document.createElement("div");
    this.element.classList.add(id);
    myGame.element.appendChild(this.element);

    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;



    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
  }
}
