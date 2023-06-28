//map realoaded -> Detalles a tener en cuenta cuando estamos trabajando el el metodo map()

//Array de objectos, cada objecto tiene la información de un pedido
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

//DETALLE 1 -> map() permite seleccionar el valor de una propiedad especifica de los objectos dentro de un array, nos puede servir para pulir información, limpiarla, etc. En pocas palabras, nos permite seleccionar el valor de una propiedad con la que necesito trabajar.

const prices = orders.map(item => item.total)
console.log(prices);
//Output -> [60, 120, 180, 240]
//Luego podemos hacer lo necesario con estos valores segun sea la necesidad, sacar un total, cual fue el precio mayor, etc.

//DETALLE 2 -> map() nos permite añadir nuevas propiedades al objecto, esto debe ser combinado con el spreed operator (...), ya que si no se usa este, se mutaría el objecto del array original.

const ordersWithTax = orders.map(item => {
    return {
        ...item,
        tax: .19,
    }
})
console.log({ordersWithTax, orders})
/*Output ->
{
    ordersWithTax: [
      { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
      { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
      {customerName: 'Santiago', total: 180, delivered: true, tax: 0},
      {customerName: 'Valentina',total: 240,delivered: true,tax: 0.19}
    ],
    orders: [
      { customerName: 'Nicolas', total: 60, delivered: true },
      { customerName: 'Zulema', total: 120, delivered: false },
      { customerName: 'Santiago', total: 180, delivered: true },
      { customerName: 'Valentina', total: 240, delivered: true }
    ]
  }
*/
//Notemos que no hubo modificación al array original, esto es porque trabajamos con el spread operator, si no, estariamos copiando la referencia en memoria de cada uno de los objectos dentro del array, haciendo que este mute, y nos afecte tanto a la copia como al original.

//Crear estas copias con mas propiedades nos puede servir para hacer algunos calculos, sin modificar la información inicial del arreglo.