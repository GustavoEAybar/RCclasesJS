let estacion = prompt(`Ingrese su estación del año favorita, por ejemplo: 1-verano, 2-otoño, 3-invierno, 4-primavera`
);

switch (estacion){
    case `1`:
    case `verano`:
        document.write(`Su estación favorita es verano`)
        break;
    case `2`:
    case `otoño`:
        document.write(`Su estación favorita es otoño`)
        break;
    case `3`:
    case `invierno`:
        document.write(`Su estación favorita es invierno`)
        break;
    case `4`:
    case `primavera`:
        document.write(`Su estación favorita es primavera`)
        break;
    default:
        alert(`Ingrese una opción valida`)
        break;
}