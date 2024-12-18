class Cockroach {
  //Creamos un array donde vayan apareciendo las cucarachas
  static cockroachArray = [];
  constructor() {
    //Definimos en pantalla y su posición aleatoria
    this.element = document.createElement("div");
    this.element.classList.add("cockroach");
    myGame.element.appendChild(this.element);
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;

    this.positionLeft = myGame.width;
    this.positionBottom = Math.floor(Math.random() * (myGame.height - 50));

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
    this.velocity = 2.1;

    Cockroach.cockroachArray.push(this);
  }

  //definimos el método para que las cucarachas se muevan de derecha a izquierda
  move() {
    this.positionLeft -= this.velocity;
    this.element.style.left = this.positionLeft + "px";

    if (this.positionLeft <= 0) {
      // eliminar del HTML
      this.element.remove();
      // eliminar del array
      // localizar la cucaracha en concreto (la que acaba de pisar)
      const index = Cockroach.cockroachArray.indexOf(this);
      Cockroach.cockroachArray.splice(index, 1);
    }
  }
  //Definimos el método para eliminar la cucaracha de la pantalla
  destroy() {
    const cockroachIndex = Cockroach.cockroachArray.indexOf(this);
    Cockroach.cockroachArray.splice(cockroachIndex, 1);
    this.element.remove();
  }
}
