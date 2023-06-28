//reduce reloaded -> el metodo reduce() a mas detalle

const numbers = [1, 3, 2, 3, 3, 4, 2];

//Realizar un histograma del array numbers, que me cuente cuantas veces aparece cada numero. Esto nos lo debe devolver en un objecto.
// Output expeted -> {1: 1, 3: 2, 2: 1}

//Para esto creamos un reduce de numbers, y vamos a guardar los elementos de este en un objecto, y cada vez que uno de los elementos se repita, sumará 1 al elemento (propiedad).
const histogram = numbers.reduce((object, element) => {
    //Va al object (acumulador) y pregunta si tiene una propiedad llamada como el elemento, en este caso será un numero, si no la hay la crea y le asigna un valor de 1, si ya la tiene le suma 1 al valor de la propiedad del objecto.
    if(!object[element]) {
        object[element] = 1;
    } else {
        object[element]++
    }
    
    //devuelve el objecto que se obtuvo
    return object
}, {})
console.log(histogram);
//Output -> { '1': 1, '2': 2, '3': 3, '4': 1 }

/* Ejemplo 2 */

//Arreglo de niveles de un videojuego por persona, contiene que nivel tiene cada persona en el juego.
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
];

//Queremos saber cuantas personas hay por cada nivel
const infoLevel = data
  .map(object => object.level)
  .reduce((object, element) => {
      if (!object[element]) {
          object[element] = 1;
      } else {
          object[element]++
      }
      return object
  }, {})
console.log(infoLevel);
//Output -> { low: 2, medium: 2, hight: 2 }

//Reto -> Realizar un histograma por rangos, es decir, mostrar cuantos numeros hay entre el 1-5, 6-8 y 9-10 de un array
const list = [0,1,2,3,4,5,6,7,8,9,10];

// for (i = 0; i < 20; i++) {
//     list.push(Math.floor(Math.random() * 11))
// }

const answer = list.reduce((object, number) => {
    if(number >= 1 && number <= 5) {
        object["1-5"] += 1
    } else if (number >= 6 && number <= 8) {
        object["6-8"] += 1
    } else if (number >= 9 && number <= 10) {
        object["9-10"] += 1
    }

    return object
}, {"1-5": 0, "6-8": 0,"9-10": 0})
console.log(answer);