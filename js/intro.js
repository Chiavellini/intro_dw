let contador = 1;
console.log("Valor inicial con let: ", contador);

contador = 2;
console.log("Valor redefinido: ", contador);

const PI = 3.1415
console.log("Valor constante: ", PI);

//  const saludar = (nombre) => { //arrow
//    return "hola, " + nombre;
//  }

function saludar(nombre) { //normal
  return "Hola, " + nombre;
}

let frutas = ["manzana", "pera", "piña", "uva", "melon", "papaya"];
console.log("futas: ", frutas);

//agregar mango
frutas.push("mango");
console.log("despues de push: ", frutas);

frutas.shift();
console.log("despues de shift: ", frutas);

const frutasLargas = frutas.filter(frutas => frutas.length > 5);

console.log(frutasLargas);