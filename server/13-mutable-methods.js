//Metodos mutables -> Hay algunos metodos que son mutables, es decir, que modifican el array original, algunos de estos son el push(), pop(), slice(), sort(), etc. Estos metodos nos ayudan a trabajar con metodos inmutables, en el sentido de que los podemos compenetrar, miremos los siguientes ejercicios

//Tenemos un array 'products' que contiene ciertos productos, y un array 'myProducts' que está vacío, el ejercicio consiste en que debes agregar un producto de products a myProducts, y ese producto eliminarlo de products. Como si lo estuvieses comprando y es la unica existencia. El producto es el que tiene un id = 🍔

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

//Mostrando en consola el estado inicial de nuestros arreglos
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Usemos el metodo findIndex() para obtener el indice del producto, con el metodo push(), agregarlo a myProducts y con el metodo splice() eliminarlo de products

//Busca el producto que tenga como id 🍔
const productIndex = products.findIndex(product => product.id === '🍔');
//Acordemonos, que findIndex() devuelve -1 si no encuentra el elemento con la condición, por tanto, la siguiente condicional
if(productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1)
}

//Mostrando en consola los arrays despues de los cambios
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Reto 1 -> Eliminar un elemento del array products sin mutar el array original, es decir, crear un nuevo array sin ese elemento
const newProducts = products.filter(product => product.id !== '🥞')
console.log({newProducts, products});


//Actualizando arrays -> Tenemos el siguiente array productsV2, y queremos actualizar la información de los 'Hot cakes'

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}
//Buscamos el elemento que tenga el mismo id del objecto update
const productIndexV2 = productsV2.findIndex(product => product.id === update.id);
//Accedemos al elemento en productsV2 y le agregamos los cambios que guardamos en el objecto update.
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}

console.log(productsV2);

//Reto 2 -> Aplicar los cambios del producto 'Hot cakes' pero en otro array, sin modificar el array original
const newProductsV2 = productsV2.map(product => {
    if(product.id === update.id) {
        return {
            ...product,
            ...update.changes,
        }
    }
    return {
        ...product,
    }
})
console.log(newProductsV2);




