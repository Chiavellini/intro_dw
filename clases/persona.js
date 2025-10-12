export default class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  saludar() {
    console.log("Hola, soy " + this.nombre);
  }

  decirEdad() {
    console.log("Tengo " + this.edad + " años");
  }

  decirCiudad() {
    console.log("Vivo en " + this.ciudad);
  }
}


