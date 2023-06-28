//Metodo join() -> Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const elements = ['Fire', 'Air', 'Water'];

//Queremos convertir los elementos que estan en el array elements en una cadena de texto separado por --

//con el ciclo for
let string = '';
const separator = '--'
for (i = 0; i < elements.length; i++) {
    const element = elements[i];
    if(i === elements.length - 1) {
        string = string + element;
    } else {
        string = string + element + separator;
    }
}
console.log(string);
//Output -> "Fire--Air--Water" 

//con el metodo join
const stringElements = elements.join('--')
console.log(stringElements);
//Outoput -> "Fire--Air--Water"