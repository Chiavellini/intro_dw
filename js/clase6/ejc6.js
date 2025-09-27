function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const colorFavorito = document.getElementById("colorFavorito").value;

  if (nombre && edad && colorFavorito) {
    const datos = {
      nombre: nombre,
      edad: edad,
      colorFavorito: colorFavorito,
    };

    localStorage.setItem("perfil", JSON.stringify(datos));
    document.getElementById("resultado").textContent =
      "Datos guardados en localStorage";
  } else {
    document.getElementById("resultado").textContent =
      "Por favor, llena todos los campos";
  }
}

function mostrarDatos() {
  const datos = localStorage.getItem("perfil");

  if (datos) {
    const obj = JSON.parse(datos);
    document.getElementById("resultado").textContent =
      `Mi nombre es: ${obj.nombre}, tengo : ${obj.edad} años, mi color favorito es: ${obj.colorFavorito}`;
  } else {
    document.getElementById("resultado").textContent =
      "No hay datos guardados";
  }
}

window.onload = mostrarDatos;





