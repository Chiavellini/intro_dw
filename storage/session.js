const sessionM = {
  insertar(key, value) {
    const dato = typeof value === "string" ? value : JSON.stringify(value);
    sessionStorage.setItem(key, dato);
    console.log("Dato insertado",key, value);
  },

  existe(key) {
    return sessionStorage.getItem(key) !== null;
  },

  obtener(key) {
    const value = sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch { //intentar convertir el valor guardado a objeto solo si es json valido
      return value; 
    }
  },

  eliminar(key) {
    sessionStorage.removeItem(key);
    console.log("Dato eliminado", key);
  }
};

export default sessionM;
