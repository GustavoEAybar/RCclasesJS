//Arrays

//declaracion y definicion de un array e forma literal
let array =[];

//crear o definir un aray con datos de forma literal
let series = ['Naruto', 'Juego de tronos', 4, 5, true];
console.log(series);

//crear o definir un aray con datos usando un constructor
let array1 = new Array();
console.log(array1);

//crear o definir un aray con datos usando un constructor
let array2 = new Array(1,5,3,2);
console.log(array2);

//cantidad de elementos del arreglo
console.log(array2.length);

//obtener o mostrar un elemento del array
console.log(array1[2]);

//obtener el ultimo elemento del array
console.log(array2[array2.length - 1]);

//reasignar el valor a un determinado elemento del array
array2[0]=4;
console.log(array2);

array2[5]='hola';
console.log(array2);
console.log(array2.length);

//agregar uno  o varios elementos al final o en la ultima posciion del array
array2.push('chau');
console.log(array2);

//eliminar o sacar del arreglo el ultimo elemento 
array2.pop();
console.log(array2);

//agregar elementos en la primer 
array2.unshift('martes');
console.log(array2);

//eliminar o sacar el elemneto de la primera posicion
array2.shift();
console.log(array2);

//agregar elementos en una determinada posicion
array2.splice(3,0,5);
console.log(array2);

//eliminar elementos en una determinada posicion
array2.splice(4,2);
console.log(array2);

//eliminar todos loe elementos desde una determinada posicion
array2.splice(1);
console.log(array2);

//agregar elementos en una determinada posicion sin borrar ninguno
array2.splice(1,0,3,2,1);
console.log(array2);

//agragar elementos en una determinada posicion sin modificar el array origen

// let array3 = array2.toSpliced(0,0,6,5);
// console.log(array3);

//seleccionar elementos de un array
let nombres=["Rita", "Pedro", "Miguel", "Ana"];
let nombresSeleccionados=nombres.slice(1,4);
console.log(nombres.slice(1,4));

//recorrer y/o mostrar los elementos del array
for(let i=0;i < nombres.length ;i++){
    console.log(nombres[i]);
}

//recorrer y/o mostrar los elementos del array usando for...of
for(let elemento of nombres){
    console.log(elemento);
}

//recorrer y/o mostrar los caracteres de un string usando for...of
let oracion="MarioLuis";
for(let letra of oracion){
    console.log(letra);
}

//operador spread o spread operator
console.log(...nombres);

//dado un arreglo de edades encontrar el mayor
let edades=[45,10,25,95];

console.log(Math.max(...edades));

//encontrando el menor
console.log(Math.min(...edades));

//clonar un array
console.log([...edades]);

//concatenar o unir 2 o mas arrays
let vocales = ['a','e','i','o','u'];

console.log(...nombres, ...vocales);

//concatenar o unir array
console.log(array2.concat(vocales));

//convertir array a string
let word='palabra';
console.log(word.split());

console.log(vocales.join());

console.log(vocales.join(''));

console.log(String(word));

//convertir string a array
let palabra='mitocondria'
console.log(Array.from(palabra));

console.log(word.split(''));

//indexOf
//conocer el indice de un elemento del array. Devuelve la posicion del 1er elemento que cumple con la condicion dada o si no lo encuentra o no cumple devuelve -1;
console.log(vocales.indexOf('a'));

//includes
//saber si esta incluido como elemento de un array usando includes includes retorna un booleano, true si esta incluido y false si no lo esta

console.log(vocales.includes('e'));



//call backs