//Metodo sort() -> El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.

//Ordene el siguiente array de meses
const months = ["March", "Jan", "Feb", "Dec", "Apr", "Nov"];

//Usando sort()
// months.sort();
// console.log(months);
//Output -> [ 'Dec', 'Feb', 'Jan', 'March' ]
//Notemos que el resultado no es el esperado esto es debido a que los organiza al valor unicode de los caracteres de cada string, en este caso por el orden que se encuntran en el abecedario

//Mi forma de solucionarlo

//Creo un array de todos los meses ordenados
const ArrayOrderedMonths = [ 
    "January",
    "February",
    "March",
    "April", 
    "May",
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
]

const obj = {};
for (i = 0; i < months.length; i++) {
    const desorderedMonth = months[i];
    const indexOfMonth = ArrayOrderedMonths.findIndex(element => element.includes(desorderedMonth));
    obj[desorderedMonth] = indexOfMonth
}

const arrayOfObject = Object.entries(obj);
const orderMonths = arrayOfObject
    .sort((a,b) => a[1] - b[1])
    .map(element => element[0])
console.log(orderMonths);

//Forma Pro
// const order= months.reduce((object, month) =>{
//     const saveIndex = arrayOrderedMonths.findIndex(element => element.includes(month));
//     object[month] = saveIndex;
//     return object
// }, {})

// const orderMonths = Object.entries(order)
//     .sort((a,b) => a[1] - b[1])
//     .map(month => month[0])
// console.log(orderMonths);


/* ********************************************************************************************************************* */

//Ordenar los numeros de menor a mayor
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b)
console.log(numbers);
//Output -> [ 1, 4, 21, 30, 100000 ]

/* ********************************************************************************************************************* */

//Ordenar el siguiente array
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort((a,b) => a.localeCompare(b))
console.log(words);
//Output -> ['adieu','banana','café','communiqué','éclair','premier','réservé']

/* ********************************************************************************************************************* */

//Ordenar el siguiente array mediante la propiedad total, de menor a mayor
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => a.total - b.total)
console.log(orders);
/* Output  ->
[
  { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Valentina', total: 240, delivered: true },
  { customerName: 'Nicolas', total: 600, delivered: true },
  { customerName: 'Santiago', total: 1840, delivered: true }
]
*/

