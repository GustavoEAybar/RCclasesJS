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
*/

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