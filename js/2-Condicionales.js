//Estructuras condicionales

let numero = 8;
let number = "8";

//comparacion estricta => da false
if(numero === number){
    console.log(`El tipo de dato de ${numero} y ${number}son iguales`);
}

//comparacion estricta => da true
if(numero == number){
    console.log(`El tipo de dato de ${numero} y ${number}son iguales`);
}

let saludo = "Hola";
let despedida = "Chau";

if (saludo !== despedida){
    console.log(`${saludo} y ${despedida} son distintos`);
}else{
    console.log (`${saludo} y ${despedida} son mensajes iguales`);
}

let edadPablo=45;
let edadMarcos=20;
let edadMaria=10;

if(edadPablo > edadMarcos && edadPablo > edadMaria){
    document.write('Pablo es el mayor');
}else if (edadMarcos > edadPablo && edadMarcos > edadMaria) {
    document.write('Marcos es el mayor');
}else{
    document.write('Maria es la mayor');
}

//OR ||: Con que solo 1 de las dos condiciones sea true devuelve true
//AND &&: Ambas condiciones 