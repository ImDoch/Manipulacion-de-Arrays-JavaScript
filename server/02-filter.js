//Metodo filter() -> Filtra un array en base a una condición, es inmutable, por lo que no modifica el array original sino que crea uno nuevo.

const words = ["spray", "limit", "elite", "exuberant"];

//Queremos filtrar el array a las palabras que contengan 6 o mas letras

//filtrando con el ciclo for
const wordsFilter = []
for (i = 0; i < words.length; i++) {
    const element = words[i];
    if (element.length >= 6) {
        wordsFilter.push(element)
    }
}
console.log(wordsFilter);
//Output -> ['exuberant']

//Filtrando con el metodo filter
const filter = words.filter(item => item.length >= 6);
console.log(filter);
//Output -> ['exuberant']

//Obviamente con este metodo se pueden aplicar condiciones mas complejas, miremos:

//Lista de ordenes
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];

//Queremos filtrar las ordenes de compra que fueron entregadas (delivered: true)
const completeOrders = orders.filter(object => object.delivered);
console.log(completeOrders);
/*Output -> 
[
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
*/

//Necesito trabajar solo con las ordenes que han sido entregadas y su costo fue mayor a 100 USD
const hundredOrders = orders.filter(object => object.delivered && object.total >= 100);
console.log(hundredOrders);
/* Output ->
[
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
*/

//Buscador que filtra las ordenes dependiendo de un query (cadena de texto)
const search = (query) => {
  return orders.filter(item => item.customerName.includes(query))
}
console.log(search('Nico'));
// Output -> [{ customerName: 'Nicolas', total: 60, delivered: true }]

console.log(search('a'));
/* Output ->
[
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
*/