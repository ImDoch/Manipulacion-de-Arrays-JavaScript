//Metodo flat() -> Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Necesitamos sintetizar la matriz en un arreglo de un solo nivel

//con el ciclo for
const newArray = [];
for (i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for(j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}
console.log(newArray);
//Output -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//Esta forma tiene un problema, es que solo se puede usar para cuando solo hay 1 nivel de anidamiento, si hay mas de 1 no funcionaría

//Matriz con 3 niveles de anidamiento
const matriz2 = [
    [1,[2,3]],
    [4,5,6],
    [[7,[8]],9]
];

//Usando reduce con recursividad
function isArray(element) {
    return Array.isArray(element)
}

function deepth(matriz) {
    return matriz.reduce((array, element) => {
        return isArray(element) 
            ? array.concat(deepth(element)) 
            : array.concat(element)
        
    }, [])
}
console.log(deepth(matriz2));
//Output -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Usando el metodo flat()
const flatMatriz = matriz.flat();
console.log(flatMatriz);
//Output [1, 2, 3, 4, 5, 6, 7, 8, 9]

//podemos indicarle el nivel de profundidad a aplanar.
const deepthFlatMatriz = matriz2.flat(3);
console.log(deepthFlatMatriz);
//Output [1, 2, 3, 4, 5, 6, 7, 8, 9]

