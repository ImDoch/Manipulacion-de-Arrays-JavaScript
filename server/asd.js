const months = ["March", "Jan", "Feb", "Dec"];

const arrayOrderedMonths = [ 
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

const order= months.reduce((object, month) =>{
    const saveIndex = arrayOrderedMonths.findIndex(element => element.includes(month));
    object[month] = saveIndex;
    return object
}, {})
console.log(order);

const orderMonths = Object.entries(order)
    .sort((a,b) => a[1] - b[1])
    .map(month => month[0])
console.log(orderMonths);

// const obj = {};
// for (i = 0; i < months.length; i++) {
//     const desorderedMonth = months[i];
//     const indexOfMonth = arrayOrderedMonths.findIndex(element => element.includes(desorderedMonth));
//     obj[desorderedMonth] = indexOfMonth
// }

// const arrayOfObject = Object.entries(obj);
// const orderMonths = arrayOfObject.sort((a,b) => a[1] - b[1]).map(element => element[0])
// console.log({mesesAOrdernar: months, mesesOrdenados: orderMonths})