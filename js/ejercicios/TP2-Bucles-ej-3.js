/*
3 - realizar un script que pida cadenas de texto hasta que se pulse "cancelar" al asir con "cancelar" deben mostrase todas las cadenas concatenadas con un guión-
nota: usar confirm()
*/
let resultado = '';

do{
    let palabra = prompt('ingrese una palabra');
    if(resultado===''){
        //si se ingresa una unica palabra la devuelvo sin concatenar el guion
        resultado = palabra;
        console.log(resulatado);
    }else{
        resultado = resultado + '-' + palabra;
        console.log(resultado);
    }
    
}while(confirm('Desea seguir ingresando palabras?'));

console.log(palabra);