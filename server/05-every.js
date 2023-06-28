//Metodo every() -> Determina si todos los elementos en el array satisfacen una condición.

const numbers = [1, 30, 49, 29, 10, 13];

//Necesito evaluar si todos los numeros de numbers son menores a 40

//con ciclo for
let answer = true;
for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number >= 40) {
        answer = false
    }
}
console.log(answer);
//Output -> false

const answer2 = numbers.every(number => number <= 40);
console.log(answer2);
//Output -> false

//Reto -> Con base al array team, evaluar que todos los miembros del equipo sean menores de 15 años, debido a que las personas que pueden participar en el evento deben ser menores de 15 años

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const challengeAnswer = team.every(object => object.age <= 15);
console.log(challengeAnswer);