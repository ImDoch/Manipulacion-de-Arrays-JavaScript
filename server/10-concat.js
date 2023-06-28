//Metodo concat() -> El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

//Necesitamos unir los dos array (concatenar)

//con el ciclo for

//copiamos el primer array
const newArray = [...elements];
//iteramos el segundo array, y vamos añadiendole cada elemento de este, al newArray, que es el que me está guardando la concatenacion
for (i = 0; i < otherElements.length; i++) {
    const number = otherElements[i];
    newArray.push(number)
}
console.log(newArray);
//Output -> [1, 2, 3, 4, 5, 6, 7, 8];

//con el metodo concat()
const mergeArrays = elements.concat(otherElements);
console.log(mergeArrays);
//Output -> [1, 2, 3, 4, 5, 6, 7, 8];

//Otra forma tambien es usando el spread operator
const mergeArrays2 = [...elements, ...otherElements]
console.log(mergeArrays2);
//Output -> [1, 2, 3, 4, 5, 6, 7, 8];

//debemos tener cuidado con esta ultima forma de trabajar, ya que si usamos cadenas de texto con spread operator nos hará un split de cada caracter en esta
const testSpreadOperator = [...elements, ..."reduce"];
console.log(testSpreadOperator);
//Output -> [1,   2,   3,   4,   'r', 'e', 'd', 'u', 'c', 'e']

//La forma correcta es asi:
const testSpreadOperator2 = [...elements, "reduce"];
console.log(testSpreadOperator2);
//Output -> [ 1, 2, 3, 4, 'reduce' ]


//Si queremos mutar el array añadiendole otro, usamos el metodo push usando el spread operator, si no, nos trae el array completo, no cada elemento
elements.push(...otherElements);
console.log(elements);
//Output -> [1, 2, 3, 4, 5, 6, 7, 8] se muto el array original


