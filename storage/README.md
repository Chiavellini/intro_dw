-API de almacenamiento web incluida en HTML5.
-Guarda datos de forma temporal en el navegador mientras la pestaña o ventana esté abierta.
-Funciona también como una alternativa moderna a las cookies para almacenar información del lado del cliente.
-Se basa en un sistema clave–valor (key–value).
-Solo admite strings. Para guardar objetos o arreglos, se utiliza JSON.stringify() y JSON.parse() al recuperar los datos.
-Los datos se eliminan automáticamente al cerrar la pestaña o ventana del navegador.
  -Esta información no se envía automáticamente al servidor.
  -Se guarda como texto plano dentro del navegador.
-No es seguro para almacenar información sensible como contraseñas, tokens o datos bancarios.

Métodos principales:

-sessionStorage.getItem("clave") → Devuelve el valor guardado en esa clave.

-sessionStorage.setItem("clave", "valor") → Guarda un valor bajo una clave.

-sessionStorage.removeItem("clave") → Elimina la clave indicada del almacenamiento de sesión.

-sessionStorage.clear() → Elimina toda la información guardada en esa sesión.
