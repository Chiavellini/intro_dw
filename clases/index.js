import Persona from "./persona.js";
import Coche from "./coche.js";
import Perro from "./perro.js";

const persona1 = new Persona("Bernardo", 21, "CDMX");
persona1.saludar();
persona1.decirEdad();
persona1.decirCiudad();

const coche1 = new Coche("Toyota", "Corolla", "Rojo");
coche1.mostrarMarca();
coche1.mostrarModelo();
coche1.mostrarColor();

const perro1 = new Perro("Toby", "Labrador", 3);
perro1.ladrar();
perro1.mostrarNombre();
perro1.mostrarRaza();
