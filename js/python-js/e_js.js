const nombre = "Bernardo";
function saludar(nombreValor) {
  console.log(`hola, ${nombreValor} bienvenido al curso de programacion en js`);
}
saludar(nombre);

const texto = "hola";
const veces = 3;
function repetirTexto(textoValor, repeticiones) {
  Array.from({ length: repeticiones }).forEach(() => console.log(textoValor));
}
repetirTexto(texto, veces);

const palabra = "palindrome";
function invertirPalabra(palabraValor) {
  console.log([...palabraValor].reverse().join(""));
}
invertirPalabra(palabra);

const ejemplo = "Bernardo";
function contarVocales(textoValor) {
  console.log((textoValor.match(/[aeiouáéíóú]/gi) || []).length);
}
contarVocales(ejemplo);

const textoMayMin = "hoLa";
function mayMin(textoValor) {
  const minusculas = textoValor.toLowerCase();
  const mayusculas = textoValor.toUpperCase();
  console.log(minusculas, mayusculas);
}
mayMin(textoMayMin);

const listaNumeros = [10, 15, 20, 25];
function promLista(listaValor) {
  const promedio =
    listaValor.length === 0
      ? 0
      : listaValor.reduce((suma, numero) => suma + numero, 0) /
        listaValor.length;
  console.log(promedio);
}
promLista(listaNumeros);

function maxMin(listaValor) {
  const resultado =
    listaValor.length === 0
      ? [undefined, undefined]
      : [Math.max(...listaValor), Math.min(...listaValor)];
  console.log(resultado[0], resultado[1]);
}
maxMin(listaNumeros);

function filtrarPares(listaValor) {
  console.log(listaValor.filter((numero) => numero % 2 === 0));
}
filtrarPares(listaNumeros);

const listaTextos = ["hola", "mundo", "javascript", "python"];
function sumarElementosTexto(listaValor) {
  console.log(listaValor.join(""));
}
sumarElementosTexto(listaTextos);

function buscarElemento(listaValor, elemento) {
  console.log(listaValor.includes(elemento));
}
buscarElemento(listaNumeros, 21);

const frase = "hola mundo javascript python";
function contarPalabras(fraseValor) {
  const partes = fraseValor.trim();
  const total = partes === "" ? 0 : partes.split(/\s+/).length;
  console.log(total);
}
contarPalabras(frase);

function duplicarElementos(listaValor) {
  console.log(listaValor.map((numero) => numero * 2));
}
duplicarElementos(listaNumeros);

function capitalizarPalabras(listaValor) {
  console.log(
    listaValor.map(
      (palabraValor) =>
        palabraValor.charAt(0).toUpperCase() +
        palabraValor.slice(1).toLowerCase()
    )
  );
}
capitalizarPalabras(listaTextos);

const lista1 = [10, 15, 20, 25];
const lista2 = [30, 35, 40, 45];
function mezclarListas(listaA, listaB) {
  const limite = Math.min(listaA.length, listaB.length);
  console.log(
    listaA.slice(0, limite).flatMap((valor, indice) => [valor, listaB[indice]])
  );
}
mezclarListas(lista1, lista2);

function contarFrecuencia(listaValor) {
  console.log(
    listaValor.reduce((conteo, item) => {
      const clave = String(item);
      conteo[clave] = (conteo[clave] || 0) + 1;
      return conteo;
    }, {})
  );
}
contarFrecuencia(listaTextos);

