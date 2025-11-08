nombre= "Bernardo";
function saludar (nombre){
  console.log("hola, " + nombre + " bienvenido al curso de programacion en js")
}
saludar(nombre)


texto="hola";
veces=3;
function repetirTexto(texto, veces){
  for( let i=0 ;i<veces; i++){
    console.log(texto)
  }
}
repetirTexto(texto, veces)


palabra= "palindrome";
invertida="";
function invertirPalabra(palabra){
  for(let i=palabra.length -1 ; i>=0 ; i--){
    invertida += palabra[i]
  }
  console.log(invertida)
}
invertirPalabra(palabra, invertida)


ejemplo = "Bernardo";
function contarVocales(ejemplo) {
  let cont = 0;
  for (let i = 0; i < ejemplo.length; i++) {
    let letra = ejemplo[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      cont++;
    }
  }
  console.log(cont);
}
contarVocales(ejemplo);

texto="hoLa"
function mayMin(texto){
  console.log(texto.toLowerCase(), texto.toUpperCase())
}
mayMin(texto);


lista= [10, 15, 20, 25];
function promLista(lista){
  cont = 0
  j=lista.length
  for (let i=0 ; i<j ; i++){
    cont += lista[i];
  }
  console.log (cont / j);
}
promLista(lista);

lista= [10, 15, 20, 25];
function maxMin(lista){
  let max = lista[0];
  let min = lista[0]
  for (let i=0 ; i<lista.length ; i++){
    if (lista[i] > max){
      max = lista[i];
    }
    if (lista[i] < min){
      min = lista[i];
    }
  }
  console.log(max, min);
}
maxMin(lista);

lista= [10, 15, 20, 25];
function filtrarPares(lista){
  let pares = [];
  for (let i=0 ; i<lista.length ; i++){
    if (lista[i] % 2 === 0){
      pares.push(lista[i]);
    }
  }
  console.log(pares);
}
filtrarPares(lista);


lista= ["hola", "mundo", "javascript", "python"];
function sumarElementosTexto(lista){
  let suma = "";
  for (let i=0 ; i<lista.length ; i++){
    suma += lista[i];
  }
  console.log(suma);
}
sumarElementosTexto(lista);


lista= [10, 15, 20, 25];
function buscarElemento(lista, elemento){
  let encontrado = false;
  for (let i=0 ; i<lista.length ; i++){
    if (lista[i] === elemento){
     encontrado = true;
     break;
    }
  }
  console.log(encontrado);
}
buscarElemento(lista, 21);


frase= "hola mundo javascript python";
function contarPalabras(frase){
  let palabras = frase.split(" ");
  console.log(palabras.length);
}
contarPalabras(frase);


lista= [10, 15, 20, 25];
function duplicarElementos(lista){
  let duplicados = [];
  for (let i=0 ; i<lista.length ; i++){
    duplicados.push(lista[i] * 2);
  }
  console.log(duplicados);
}
duplicarElementos(lista); 


lista= ["hola", "mundo", "javascript", "python"];
function capitalizarPalabras(lista){
  let capitalizadas = [];
  for (let i=0 ; i<lista.length ; i++){
    let palabra = "";
    for (let j=0 ; j<lista[i].length ; j++){
      if (j === 0){
        palabra += lista[i][j].toUpperCase();
      } else {
        palabra += lista[i][j];
      }
    } 
    capitalizadas.push(palabra);
  }
  console.log(capitalizadas);
}
capitalizarPalabras(lista);


lista1= [10, 15, 20, 25];
lista2= [30, 35, 40, 45];
function mezclarListas(lista1, lista2){
  let mezcladas = [];
  for (let i=0 ; i<lista1.length ; i++){
    mezcladas.push(lista1[i]);
    mezcladas.push(lista2[i]);
  }
  console.log(mezcladas);
}
mezclarListas(lista1, lista2);


lista= ["hola", "mundo", "javascript", "python"];
function contarFrecuencia(lista){
  let frecuencia = {};
  for (let i=0 ; i<lista.length ; i++){
    if (frecuencia[lista[i]]){
      frecuencia[lista[i]]++;
    } else {
      frecuencia[lista[i]] = 1;
    }
  }
  console.log(frecuencia);
}
contarFrecuencia(lista);

