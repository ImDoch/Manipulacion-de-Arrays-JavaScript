//Metodo split() -> El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

const title = "Curso de manipulación De arrays"

//Necesitamos una frase solo con las primeras tres palabras del title

//Podemos usar el metodo split() para crear un arreglo con cada palabra, y luego con el metodo join() unirlas de nuevo con el separador que necesitemos en el momento
const firstThreeWordsOfTitle = title.split(" ", 3).join(" ")
console.log(firstThreeWordsOfTitle);
//Output -> Curso de manipulación

//Necesitamos generar una url
const finalUrl = title.split(' ').join('/').toLowerCase()
console.log(finalUrl);
//Output -> curso/de/manipulación/de/arrays

const frase = "Ana lava la tina";
const term = "ana";

const text = frase.toLowerCase()
console.log(text);

// function checkIsString(text, term) {
//     newText= text.toLowerCase
//     return newText.includes(term.toLowerCase)
// }
// console.log(checkIsString(frase, term));