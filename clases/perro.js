export default class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  ladrar() {
    console.log("woof");
  }

  mostrarNombre() {
    console.log("nombre: " + this.nombre);
  }

  mostrarRaza() {
    console.log("raza: " + this.raza);
  }
}

