class Tourist {
  //Creamos un array donde vayan apareciendo los turistas

  static touristsArray = [];
  constructor() {
    //Definimos en pantalla y su posición aleatoria
    this.element = document.createElement("div");
    this.element.classList.add("tourist");
    myGame.element.appendChild(this.element);
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;

    this.positionLeft = myGame.width;
    this.positionBottom = Math.floor(Math.random() * myGame.height);

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
    this.velocity = 1.8;

    //añadimos propiedad para saber si ya ha causado daño
    this.hasDamagedPlayer = false;
    Tourist.touristsArray.push(this);
  }

  //definimos el método para que los turistas se muevan de derecha a izquierda
  move() {
    this.positionLeft -= this.velocity;
    this.element.style.left = this.positionLeft + "px";

    if (this.positionLeft <= 0) {
      // eliminar del HTML
      this.element.remove();
      // eliminar del array
      // localizar los turistas en concreto
      const index = Tourist.touristsArray.indexOf(this);
      Tourist.touristsArray.splice(index, 1);
    }
  }
}
