//Funcion de la liberia DateFns que usaremos para un ejemplo
import { areIntervalsOverlapping } from 'date-fns'

//Metodo some() -> Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición

const numbers = [1, 2, 3, 4];

//Queremos saber si almenos uno de los elementos del array numbers es un numero par

//con un ciclo for
let answer = false;
for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number % 2 === 0) {
        answer = true;
        break;
    }
}
console.log(answer);
//Output -> true

//con el metodo some()
const answer2 = numbers.some(number => number % 2 === 0);
console.log(answer2);
//Output -> true

//Miremos como se usa cuando tenemos un array que contiene objectos
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

//Queremos saber si hay almenos una orden que fue entregada, es decir, 'delivered = true'
const isDeliveredOrders = orders.some(object => object.delivered)
console.log(isDeliveredOrders);
//Output -> true | almenos una orde fue entregada

//Un ejemplo mucho mas complejo

//Arreglo de la agenda de citas de una persona (new Date(año, mes, dia, hora))
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

//Nueva cita que se piensa agregar al arreglo
const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

//Necesitamos saber si podemos agendar dicha cita, es decir, que no hay ninguna otra cita que interfiera con la nueva cita (newAppointment)

//Usaremos el metodo some, para verificar si almenos una de las citas interfiere con la cita que quiero agregar, esto lo evaluaremos mediante la funcion que nos trajimos de la libreria que nos permite saber si dos fechas interfieren
const isOverlap = (newDate) => {
    return dates.some(object => {
        //La funcion recibe como parametro dos objectos, con las propiedades start y end, que nos indican la fecha en que se realiza cada cita, los dos objectos se compararán para ver si se sobreponen las fechas
        return areIntervalsOverlapping(
            {start: object.startDate, end: object.endDate},
            {start:newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log(isOverlap(newAppointment))