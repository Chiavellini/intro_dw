window.onload = function () {
  const form = document.getElementById("perfilForm");
  const saludo = document.getElementById("saludo");

  // Cargar datos guardados
  const datos = localStorage.getItem("perfil");
  if (datos) {
    const obj = JSON.parse(datos);
    saludo.textContent = `Hola ${obj.nombre}, tienes ${obj.edad} años, tu color favorito es ${obj.diaFavorito}`;
  }

  // Guardar al enviar
  form.onsubmit = function (e) {
    e.preventDefault();

    const obj = {
      nombre: document.getElementById("nombre").value,
      edad: document.getElementById("edad").value,
      diaFavorito: document.getElementById("colorFavorito").value
    };

    localStorage.setItem("perfil", JSON.stringify(obj));
    saludo.textContent = `Hola ${obj.nombre}, tienes ${obj.edad} años, color favorito es ${obj.diaFavorito}`;
  };
};


