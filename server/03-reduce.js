//Metodo reduce() -> Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const totals = [1,2,3,4];

//Necesitamos sumar los elementos del array totals

//Sumando los elementos con el ciclo for
let sum = 0;
for (i = 0; i < totals.length; i++) {
    const element = totals[i];
    sum = sum + element
}
console.log(sum);
//Output -> 10

//Sumando los elemetos con el metodo reduce()
const sumElements = totals.reduce((sum,element) => sum + element, 0);
console.log(sumElements);
//Output -> 10