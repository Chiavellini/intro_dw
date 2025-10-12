export default class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  mostrarMarca() {
    console.log("marca: " + this.marca);
  }

  mostrarModelo() {
    console.log("modelo: " + this.modelo);
  }

  mostrarColor() {
    console.log("color: " + this.color);
  }
}


