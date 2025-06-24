//RESUELVE LOS EJERCICIOS AQUI

//ejercicio 1

let numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
  let numbersAlCuadrado = n => n ** n;

  let resultado = numbers.map(numbersAlCuadrado);
  return resultado;
}
elevados();

console.log(elevados());

//let numbersAlCuadrado = n => n ** n;
//let resultado = numbers.map(numbersAlCuadrado);
//console.log(resultado); 

//ejercicio 2 corregido

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let result = foodList.map(food => {
  if (food === 'Pizza') {
    return `Como soy de Italia, amo comer ${food}`
  } else if (food === 'Ramen') {
    return `Como soy de Japón, amo comer ${food}`
  } else if (food === 'Paella') {
    return `Como soy de Valencia, amo comer ${food}`
  } else if (food === 'Entrecot') {
    return `Aunque no como carne, el ${food} es sabroso`
  }
})
console.log(result);

//let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
const locations = ['Italia', 'Japón', 'Valencia', '--'];

let result2 = foodList.map((food, i) => {
  if (i < 3) {
    return `Como soy de ${locations[i]}, amo comer ${food}`
  } else {
    return `Aunque no como carne, el ${food} es sabroso`
  }
})

console.log(result2);

//ejercicio 3

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result3 = staff.map(persona => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`
});

console.log(result3);


//ejercicio 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(number => number % 2 !== 0);
console.log(result4);

// Ejercicio 5

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];


let datosFiltrados = foodList2.filter((food) => food.isVeggie);
console.log(datosFiltrados);

let resultado = datosFiltrados.map(
  (food) => `Que rico ${food.name} me voy a comer!`
);
console.log(resultado);

let result5 = datosFiltrados.map((food) => {
  if (food.name == "Tempeh") {
    return `Que rico ${food.name} me voy a comer!`
  } else {
  
    return `Que rica ${food.name} me voy a comer!`
  }
});

//ejercicio 6

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/

 const articulos = inventory.filter ((electrodomestico) => {
  if (electrodomestico.price > 300) {
    return electrodomestico.price
  }
})
const result6 = articulos.map (
  (articulo) => {
    return articulo.name
  } 
)
console.log(result6);


//ejercicio 6 bis

const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acumulador,numeroActual)=> {
  return acumulador*numeroActual
} ,1);

console.log(result7);

//ejercicio 7

const sentenceElements = [
  'Me',
  'llamo',
  'Laura',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((acumulador,palabraActual)=>{
  return acumulador +` ${palabraActual}` 
})
console.log(result8)

//ejercicio 8 corregido en clase

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const result9 = books
  .filter(book => book.category == "code") //se crea nuevo array
  .reduce((acumulador, actual) => acumulador + actual.price, 0);

console.log(result9);

