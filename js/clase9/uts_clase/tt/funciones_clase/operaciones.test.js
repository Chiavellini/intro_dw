const { sumar, restar, dividir, operar} = require("./operaciones.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

test("Debe realizar la suma usando la funcion operar", () => {
  expect(operar(4,5,"sumar")).toBe(9);
});

test("Debe realizar la resta usando la funcion operar",() =>{
  expect(operar(9,4,"restar")).toBe(5);
});

test("Debe realizar la multiplicación usando la función operar", () => {
  expect(operar(3, 4, "multiplicar")).toBe(12);
});

test("Debe realizar la división usando la función operar", () => {
  expect(operar(10, 2, "dividir")).toBe(5);
});

test("Debe realizar el módulo usando la función operar", () => {
  expect(operar(10, 3, "modulo")).toBe(1);
});

test("Debe lanzar un error si la operación no es válida", () => {
  expect(() => operar(5, 2, "potencia")).toThrow("Operación no válida");
});

// test agregado (usando toThrow)
test("Debe lanzar un error al dividir entre cero usando toThrow", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});