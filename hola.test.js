const holaMundo = require('./hola');

test('debe retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});