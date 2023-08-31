let pizzas = [
    {
      id: 1,
      name: 'Moderna',
      ingredients: [
        'salsa',
        'muzza',
        'rúcula',
        'jamón crudo',
        'tomates deshidratados',
        'parmesano',
      ],
      prices: { piece: 120, medium: 840, big: 1180 },
      isVegetarian: false,
    },
    {
      id: 2,
      name: 'Vegeta',
      ingredients: [
        'salsa',
        'muzza',
        'zucchini',
        'asado',
        'berenjena',
        'tomates cherrys',
        'aceitunas negras',
        'albahaca',
      ],
      prices: { piece: 110, medium: 800, big: 1150 },
      isVegetarian: true,
    },
    {
      id: 3,
      name: 'Alemana',
      ingredients: ['salsa', 'muzza', 'cebolla', 'salchicha', 'mostaza'],
      prices: { piece: 135, medium: 900, big: 1300 },
      isVegetarian: false,
    },
    {
      id: 4,
      name: 'Fugazzetta de jamón',
      ingredients: [
        'salsa',
        'muzzarella',
        'cebolla',
        'aceitunas negras',
        'jamón',
      ],
      prices: { piece: 120, medium: 850, big: 1200 },
      isVegetarian: false,
    },
    {
      id: 5,
      name: 'Especial de jamón',
      ingredients: ['salsa', 'muzza', 'aceitunas verdes', 'jamón'],
      prices: { piece: 125, medium: 870, big: 1270 },
      isVegetarian: false,
    },
  ];
  
  /* 
  Debemos realizar una app para una pizzería. Para ello vamos a obtener los datos desde su API de backend.
  Los datos obtenidos son los que se muestran arriba.
  
  Nos piden: 
//--------------------------------------------------------------------------------

/*
0- Obtener una copia del menu original y trabajar con él
*/

let pizzasMenuCopy= [...pizzas];
console.log(pizzasMenuCopy);

console.log(pizzas.map((pizza) => pizza));

/*
1- Obtener las pizzas tamaño mediano cuyo precio sea mayor o igual a $850
*/

const pizzasMedium = () => {
    return pizzasMenuCopy.filter((pizza) => pizza.prices.medium >= 850)
}

console.log (pizzasMedium());

/*
2- Obtener las pizzas según un nombre dado. Este puede estar incompleto.
*/

const searchByName = (name)=>{
    //return pizzasMenuCopy.filter((pizza)=>pizza.name.includes(name))
    return pizzasMenuCopy.filter((pizza)=>pizza.name.indexOf(name)!=-1)
}

console.log(searchByName('jam'));

/*
3- Ordene las pizzas por su tamaño grande. 
*/

const orderByPrice = ()=>{
    pizzasMenuCopy.sort((pizzaA, pizzaB)=>{
        if(pizzaA.prices.big < pizzaB.prices.big) return -1;
        if(pizzaA.prices.big > pizzaB.prices.big) return 1;
        return 0;
    });
};
orderByPrice()
console.log(pizzasMenuCopy);

/*
4- A partir de un conjunto de IDs devuelva una lista de pizzas con dichos IDs 
*/

const getPizzasByID = (array) => {
    return pizzasMenuCopy.filter((pizza)=>{
        array.include(pizza.id)?true:false;
    })
}

/*
5- Crear un nuevo menú de pizzas agrupandolas por si son o no vegetarianas.
  ejemplo: {
          meat : [{id: 1, name:...}, {id: 2, name:...}],
          noMeat:[{id: 1, name:...}, {id: 2, name:...}]
           }
*/
const meetAndNoMeet = () => {
    return pizzasMenuCopy.reduce((newMenu, pizza)=>{
        !pizza.isVegetarian
         ? newMenu.meat.push(pizza)
         : newMenu.noMeat.push(pizza)
        return newMenu;
    },{meat: [], noMeat:[]})
}

console.log(meetAndNoMeet());
/*
6- Obtenga una lista de ingredientes totales de todas las pizzas.
  Muestre la lista sin ingredientes repetidos y ordenada alfabeticamente.
*/
const totalIngredientesOrder=()=>{
    let ingredientes = pizzas.map(pizza => pizza.ingredients);

    let totalIngredientes = ingredientes.reduce((acc, curr)=>{
        return acc.concat(curr)
    })
    console.log(totalIngredientes);
    
    let uniqueIngredients = totalIngredientes.filter((item, index)=>totalIngredientes.indexOf(item) === index);
    console.log(uniqueIngredients);
    
    let ingredientesOrder = uniqueIngredients.sort((pizzaA, pizzaB)=>{
        if(pizzaA < pizzaB) return -1
        if(pizzaA > pizzaB) return 1
        return 0
    })
    console.log(ingredientesOrder);
}