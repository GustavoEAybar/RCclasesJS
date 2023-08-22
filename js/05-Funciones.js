//Declarar una funcion
function holaMundo(){
   console.log(`hola mundo! como estas?`);
}

//invocar, ejecutar, llamar a una fucnion
holaMundo();

//fucniones con parametros
function saludar(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}, como estas?`);
}

saludar('Gustavo', 'Aybar');

//funciones que nos rtetornen un valor
function convertirDolaresPeso(dolares){
    let pesos = dolares * 600;
    return pesos;
}

let precioCelular=convertirDolaresPeso(100);

console.log(`precio: ${precioCelular}`);

console.log(`el precio de la play 5 es ${convertirDolaresPeso(800)}`);

//ejemplo de funcipin cin parametros y return
function sumarValores(valor1, valor2){
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        console.error("los valores ingresados deben que ser valores numericos!");
    }else{
        return `${valor1} + ${valor2} = ${valor1+valor2}`;
    }
}

console.log(sumarValores(2,8));
console.log(sumarValores(2,'a'));

//Funciones flechas o arrows functions: son funciones anonimas, se las puede definir asignandolas a variables de tipo let o const, pero lo más común será definirlas con const. let se usaría si quiero reasignarle su valor por gral se usa const

const sumar = (num1, num2) => {
    return num1+num2;
}

console.log(sumar(8,5));

//Te permiten obviar las llaves y el return
const sumarR = (num1, num2) => num1+num2

console.log(sumarR(8,5));

//una idferencia con las tradicionales es que no se pueden invocar antes de su inicializacion
//scope (alcance)
//las variables dentro de un bloque de código {} nacen y mueren alli

let heroe = 'batman';
function mostrarHeroe(){
    let heroe = 'superman';
    console.log(heroe);

    return `Bienvenido ${heroe}`;
}

console.log(mostrarHeroe());
console.log(heroe);

//TAREA: realizar un funcion que nos permita realizar las fnciones de suma, resta, multiplicacion y division

const calculadora = (valor1, valor2, operador='+') =>{
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        console.error('ingresar numeros');
    }
    switch (operador) {
        case '+':
            return `${valor1} + ${valor2} = ${valor1 + valor2}`;
        case '-':
            return `${valor1} - ${valor2} = ${valor1 - valor2}`;
        case '*':
            return `${valor1} * ${valor2} = ${valor1 * valor2}`;
        case '/':
            return valor2!==0 ? `${valor1} / ${valor2} = ${valor1 / valor2}` : 'ingrese un valor distinto de 0 en el segundo valor';
        case '%':
            return `${valor1} % ${valor2} = ${valor1 % valor2}`;
        default:
            return 'Ingrese un operador valido';

    }

}

console.log(calculadora(2,0, '/'));

