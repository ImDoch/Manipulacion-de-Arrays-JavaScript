//Metodo includes() -> El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda

const pets = ['cat', 'dog', 'bat'];

//Verificar si pets contiene al elemento 'cat'

//con el ciclo for
let includeInArray = false;
for (i = 0; i < pets.length; i++) {
    const pet = pets[i];
    if(pet === 'cat') {
        includeInArray = true;
        break;
    }
}
console.log(includeInArray);
//Output -> true

//con el metodo includes
const includesMethod = pets.includes('cat');
console.log(includesMethod);
//Output -> true