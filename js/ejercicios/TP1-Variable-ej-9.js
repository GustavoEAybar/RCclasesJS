let frase = prompt('Ingrese una frase');

for (var i=0; i<frase.length; i++) {
    const caracter=frase.charAt(i);
    switch(caracter){
        case 'a':
            document.write(i,i+1)
            break;
        case 'e':
            document.write(i,i+1)
            break;
        case 'i':
            document.write(i,i+1)
            break;
        case 'o':
            document.write(i,i+1)
            break;
        case 'u':
            document.write(i,i+1)
            break;
        default:
            console.log('no tiene vocales');
            break;
    }
}