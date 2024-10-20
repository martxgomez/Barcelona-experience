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

    this.positionLeft = myGame.width
    this.positionBottom = Math.floor(Math.random() * (myGame.height - 50));

    this.element.style.left = this.positionLeft + "px";
    this.element.style.bottom = this.positionBottom + "px";
    this.velocity = 10;

    Cockroach.cockroachArray.push(this);
  }

  //definimos el método para que las cucarachas se muevan de derecha a izquierda
  move() {
    this.positionLeft -= this.velocity;
    this.element.style.left = this.positionLeft + "px";

    if (this.positionLeft >= myGame.width - this.width) {
      // eliminar del HTML
      this.element.remove();
      // eliminar del array
      // localizar la bullet en concreto (la que acaba de chocar)
      const index = Cockroach.cockroachArray.indexOf(this);
      Cockroach.cockroachArray.splice(index, 1);
    }
  }
  //Definimos el método para eliminar la cucaracha de la pantalla
  destroy() {
    const cockroachIndex = Cockroach.cockroachArray.indexOf(this);
    Cockroach.cockroachArray.splice(bulletIndex, 1);
    this.element.remove();
  }
}

//Generamos 5 cucarachas
for (let index = 0; index < 5; index++) {
    new Cockroach();
  }