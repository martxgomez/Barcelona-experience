class Tourist {
  //Creamos un array donde vayan apareciendo los turistas

  static touristsArray = [];
  constructor() {
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
    this.type = tourist;

    this.element = document.createElement("div");
    this.element.classList.add("tourist");
    myGame.element.appendChild(this.element);

    this.positionLeft = myGame.width;
    this.positionBottom = Math.floor(Math.random() * (myGame.height - 50));

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
    this.velocity = 2;
    Tourist.touristArray.push(this);
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
      const index = Tourist.touristArray.indexOf(this);
      Tourist.touristArray.splice(index, 1);
    }
  }
}

