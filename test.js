//Importar la función sum del archivo app. js
const{sum, fromYenToPound} = require("./app.js");

//comienza la primera prueba
test("Suma 14 + 9 es igual a 23",()=>{
    //Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9);
    
    //Esperamos que la suma de  2 números sea 23
    expect(total).toBe(23);
});

//Test USD
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
//Test Yenes
test("One Yen should be 142.26 dollars", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(10);

    // Si 1 euro son 1.07 dólares y  un yen son 156.5 euros (10 dolares ) debe ser 1462.6168224 yenes (10 / 1.07*156.5)
    const expected = 10 / 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1462.6168224299065); // 1 euro son 1.07 dólares y  un yen son 156.5 euros (10 dolares ) debe ser 1462.6168224 yenes (10 / 1.07*156.5)
})
//Test Libras
test("One pounds should be 0.0055591054313099035 yens ", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromYenToPound(100);

    // Si 1 euro son 156.5 yens y  una libra  son 0.87 euros (100 yenes ) debe ser 0.0.5559105431309904 libras (10 / 156.5*.87)
    const expected = 100/156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100)).toBe(0.5559105431309904); // Si 1 euro son 156.5 yens y  una libra  son 0.87 euros (100 yenes ) debe ser 0.5559105 libras (10 / 156.5*.87)
});