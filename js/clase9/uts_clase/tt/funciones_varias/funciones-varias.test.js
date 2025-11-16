const {
  crearObjeto,
  esMayor,
  restarIguales,
  retornarNull,
  retornarUndefined,
  lanzarError,
  crearArray
} = require("./funciones-varias.js");

// 1. Test con .toEqual()
test("Debe comparar objetos con toEqual", () => {
  expect(crearObjeto(1, 2)).toEqual({ a: 1, b: 2 });
});

// 2. Test con .toBeTruthy()
test("Debe verificar valor truthy con toBeTruthy", () => {
  expect(esMayor(5, 3)).toBeTruthy();
});

// 3. Test con .toBeFalsy()
test("Debe verificar valor falsy con toBeFalsy", () => {
  expect(restarIguales(10)).toBeFalsy();
});

// 4. Test con .toBeNull()
test("Debe verificar null con toBeNull", () => {
  expect(retornarNull()).toBeNull();
});

// 5. Test con .toBeUndefined()
test("Debe verificar undefined con toBeUndefined", () => {
  expect(retornarUndefined()).toBeUndefined();
});

// 6. Test con .toThrow()
test("Debe lanzar error con toThrow", () => {
  expect(() => lanzarError()).toThrow("Error lanzado");
});

// 7. Test con .toStrictEqual()
test("Debe comparar arrays con toStrictEqual", () => {
  expect(crearArray(1, 2)).toStrictEqual([1, 2]);
});
