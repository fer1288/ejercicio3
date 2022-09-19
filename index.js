
const pizzas =  [ 
  {
  id: 1,
  nombre: 'Napolitana',
  ingredientes:[ 'tomate','ajo','aceitunas', 'muzzarella'],
  precio: 2200,
  imagen: './img/napo.jpeg' ,
},
{ id: 2,
nombre: 'Jamon y morrones',
ingredientes: ['tomate', 'morrones','jamon','muzzarella'],
precio:2100,
imagen: './img/jamon y morrones.jpeg' ,
},
{ id:'3',
nombre: 'Fugazza',
ingredientes: ['cebolla','muzzarella'],
precio: 1800,
imagen: './img/fugazza.jpeg' ,
},
{ id: 4,
nombre: 'Muzzarella',
ingredientes:[ 'tomate','muzzarella','oregano',],
precio: 1200,
imagen: './img/muzza.jpeg' ,
},
{ id: 5,
nombre: 'Especial',
ingredientes: ['tomate','longaniza', 'cebolla'],
precio: 2300,
imagen: './img/cala.jpeg' ,
},

{ id: 6,
  nombre: 'Caribe',
  ingredientes: ['tomate','muzzarella','Anana'],
  precio: 1560,
  imagen: './img/pizza hawaiana.jpeg.jpeg' ,
  },

]

/*Traemos los elementos del dom necesarios para realizar el ejercicio*/

const resultContainer = document.getElementById("result-container");
const form = document.getElementById("form");
const input = document.querySelector(".form__input");


/* Funcion para buscar en el array de pizza */
const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

/* Función para mostrar un error  */
const showEmptyError = () => {
  resultContainer.innerHTML = `
    <div class="pizza-container">
    <i class="fa-solid fa-triangle-exclamation error"></i>
    <h2 class="error-title"> Por favor, ingrese un número para que podamos buscar su pizza en el menú. </h2>
    </div>`;
};

/* Función para renderizar */

const renderResult = (pizza) => {
  if (!pizza) {
    resultContainer.innerHTML = `
    <div class="pizza-container">
    <i class="fa-solid fa-triangle-exclamation error"></i>
    <h2 class="error-title"> No existe una pizza con el id ingresado. </h2>
    <p>Realice una nueva busqueda.</p>
    </div>`;
  } else {
    resultContainer.innerHTML = `
    <div class="pizza-container">
     <h2 class="result-title">${pizza.nombre.toUpperCase()}</h2>
     <h3 class="result-price"> Precio: $${pizza.precio} 🍕</h3>
     <h3 class="result-price"> ${pizza.ingredientes} 🍕</h3>
     <p>Si queres otra pone un numero nuevo.</p>
     </div>
    `;
  }
};




const submitSearch = (e) => {
  e.preventDefault();
  const searchedValue = input.value;
  if (!searchedValue) {
    showEmptyError(searchedValue);
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue));
  renderResult(searchedPizza);
};

// Funcion para guardar en el Local //
let items = JSON.parse(localStorage.getItem ('items'))  ||  [];  

const saveLocal = items => {
    localStorage.setItem ('items',JSON.stringify (items));
}



/* Función inicializadora */
const init = () => {
  form.addEventListener("submit", submitSearch);
};

init();
