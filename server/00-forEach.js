//Metodo forEach() -> Este metodo ejecuta la función indicada una vez por cada elemento del array.

const letters = ['a', 'b', 'c', 'd'];

//Ejecutando una función (console.log()) con el ciclo for tradicional
for(i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log('for tradicional',element);
}
// Output -> a b c d

//Ejecutando una función (console.log()) con el metodo forEach()
letters.forEach(element => console.log('for each', element));
//Output -> a b c d

// => Notemos que tienen la mima funcion, solo que en una nos gastamos 4 lineas de codigo, y en otra solo 1

