//Metodo find() -> El método find() devuelve el "valor" del primer elemento del array que cumple la función de prueba proporcionada. Es muy util para buscar elementos que no se repiten, como por ejemplo, cuando trabajamos con objectos que tienen id.

const numbers = [1, 30, 49, 29, 10, 13];

//Busque el numero 30 dentro de numbers

//con el ciclo for
let answer = undefined;
for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number === 30) {
        answer = number;
        break;
    }
}
console.log(answer);
//Output -> 30

//con el metodo find()
const answer2 = numbers.find(number => number === 30);
console.log(answer2);
//Output -> 30

//Ahora que busque un elemento que sea mayor a 40
const answer3 = numbers.find(number => number > 40);
console.log(answer3);
//Output -> 49

//Miremos otro ejemplo

//Array de productos de un restaurante
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

//Buscar el elemento que tiene como id un 🌭
const answer4 = products.find(product => product.id === '🌭')
console.log(answer4);
//Output -> { name: 'Hot dog', price: 34, id: '🌭' }

//Encuentra el indice (posición) del elemento que tiene como id un 🍔
const answer5 = products.findIndex(product => product.id === '🍔');
console.log(answer5);
//Output -> 1