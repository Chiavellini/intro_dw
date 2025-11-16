// 1. Función que retorna un objeto
function crearObjeto(a, b) {
  return { a: a, b: b };
}

// 2. Función que retorna true
function esMayor(x, y) {
  return x > y;
}

// 3. Función que retorna 0 (falsy)
function restarIguales(n) {
  return n - n;
}

// 4. Función que retorna null
function retornarNull() {
  return null;
}

// 5. Función que retorna undefined
function retornarUndefined() {
  return undefined;
}

// 6. Función que lanza error
function lanzarError() {
  throw new Error("Error lanzado");
}

// 7. Función que retorna array
function crearArray(x, y) {
  return [x, y];
}

module.exports = {crearObjeto, esMayor, restarIguales, retornarNull, retornarUndefined, lanzarError, crearArray};
