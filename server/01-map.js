//Metodo map() -> Transforma el array con el que estamos trabajando mediante la funcion callback que se le pasa, creando un nuevo arreglo con la tranformación (no modifica el original)

const letters = ['a', 'b', 'c'];

//Tranformando mediante un for
const newLetters = [];
for(i = 0; i < letters.length; i++) {
    const element = letters[i];
    newLetters.push(element + '++')
}
console.log(newLetters); 
// Output -> ['a++', 'b++', 'c++']

//Tranformando con el metodo map()
const mapLetters = letters.map(item => item + '++')
console.log(mapLetters);
//Output -> ['a++', 'b++', 'c++']