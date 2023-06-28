//Metodo flatMap() -> Este metodo es la fucion de un map() seguido de un flat() de profundidad 1, hace el mapeo del arreglo, y lo aplana. Mucho mas util.

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},  
]

//Necesito un arreglo plano de todos los atributos de los usuarios

//Usando map() y flat() por separado
const answer = users
    .map(user => user.attributes)
    .flat();
console.log(answer);
//Output -> [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

//Usando flatMap();
const answer2 = users.flatMap(user => user.attributes);
console.log(answer2);
//Output -> [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

//Reto -> Del siguiente objecto, extraer solamente el valor de la propiedad startDate en un array
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

//Mi solución
const arrayStartDate = Object.entries(calendars)
    .flatMap(array => array[1])
    .map(date => date.startDate)
console.log(arrayStartDate);
//Output -> [2021-02-01T20:00:00.000Z, 2021-02-01T22:00:00.000Z, 2021-02-01T17:00:00.000Z, 2021-02-01T14:00:00.000Z]

//Otra forma
const arrayStartDate2 = Object.values(calendars)
    .flat()
    .flatMap(item => item.startDate)
console.log(arrayStartDate2);
//Output -> [2021-02-01T20:00:00.000Z, 2021-02-01T22:00:00.000Z, 2021-02-01T17:00:00.000Z, 2021-02-01T14:00:00.000Z]
