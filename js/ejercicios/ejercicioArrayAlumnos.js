/*
Pedir por pantalla el nombre de 5 alumnos usando bucle while 
Guardarlos en un arreglo llamado alumnos
Usando el array de alumnos mostrar por consola un mensaje de bienvenida para c/u


let arrayAlumnos = [];
while(arrayAlumnos.length <= 4){
    arrayAlumnos.push(prompt(`ingrese el nombre completo del ${arrayAlumnos.length}alumno: `));
    console.log(`Bienvenid@: ${alumno}`);
}
*/
/*
Métodos básicos de arreglos
Declara un array que vamos a llamar “clasificaciones” 
con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio 
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual
El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente


let clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
console.log(clasificaciones);

clasificaciones.splice(2,2,'Celia', 'Raúl');
console.log(clasificaciones);

clasificaciones.pop()
console.log(clasificaciones)

clasificaciones.splice(1, 0,'Roberto', 'Amaya');
console.log(clasificaciones)

clasificaciones.unshift('Marta')
console.log(clasificaciones)

const eliminarConcursantes = (arr, personaBuscada) => {
    return (arr.findIndex((concursante) => concursante === personaBuscada)) > -1 ? arr.splice(posicion, 1) : console.log('No se encontro a ningun concursante');
}

console.log(eliminarConcursantes(clasificaciones, 'Ana'));
*/

/*
//usando reduce generar un array con elementos unicos
let array = [18, 8, 9, 18, 18, 3, '4'];
console.log('hola',...array,'chau');

console.log(array.includes());

// let uniqueArray = array.reduce((unique, item)=>unique.includes(item) ? unique : [...unique, item],[]);
// console.log(uniqueArray);

let uniqueArray = array.reduce((unique, item)=>!(unique.includes(item)) ? [...unique, item] : unique,[]);
console.log(uniqueArray);

// let uniqueArray = array.reduce((unique, item)=>{
//     if(!unique.includes(item)){
//        return [...unique, item];
//     }else{
//         return unique;
//     }
// },[]);
// console.log(uniqueArray);

//ejemplo 3 generar una funcion que iterando una sola vez un array elmine todos los elementos undefined, false, 0, null, '', y devuleva sin ellos;
const clean = (arra) => {
    return arra.reduce((acc,val)=>{
        if(val){
            acc.push(val);
        }
        return acc;
    },[])
}

const cleaned=clean([1,undefined,null,0,2,'150','','hola',false,55])
cleaned;

//generar un array de elementos unicos usando filter e indexOf
let arreglo = [5,8,8,556,'77','hello','word','hello','🍕', '🍔']
console.log (arreglo.indexOf('8'));

let elementosUnicos = arreglo.filter((item,index)=>arreglo.indexOf (item)=== index);

console.log(elementosUnicos);
*/
//realiza un script que pida numero de filas y columnas y escriba una tabla
//dentro de cada una de las celdas debera escribirse un numero consecutivo en orden descendente.
//por ejemplo la tabla 7x5, los numeros iran del 35 a 1.

let fila = parseInt(prompt('Ingrese el numero de filas:'));
let columna = parseInt(prompt('Ingrese el numero de columnas:'));
let totalCeldas = fila * columna;
document.write('<table border>');
for(let indf=0; indf<fila; indf++){
    document.write('<tr>');
    for (let indc=0; indc<columna; indc++){
        document.write('<td>');
        document.write(totalCeldas);
        totalCeldas--;
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
