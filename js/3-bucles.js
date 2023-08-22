/* 
document.write('Elemento 1 <br>');
document.write('Elemento 2 <br>');
document.write('Elemento 3 <br>');
document.write('Elemento 4 <br>');
document.write('Elemento 5 <br>');
document.write('Elemento 6 <br>');
*/
/*
let  contador = 1;

while(contador <= 20){
    document.write('Elemento' + contador + '<br>');
    contador++;
    //contador = contador + 2;
}
*/
/*
let cont=50;

do{
    document.write('Elemento' + cont + '<br>');
    contador--;
}while(cont >= 20);
*/

for(let i=1;i<=20;i++){
    document.write('Estructura for vuelta' + i + '<br>');
}

let verdura = "lechugas y tomates";

console.log(vertduras.length);

for (let c=0;c<vertduras.length;c++) {
    document.write(verduras.charAt(c)+'<br>');
}