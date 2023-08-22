let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

console.log(abc.sort());

let voc = ["o", "i", "e", "a", "u"];

console.log(voc.sort());

let abcMay = ["A","C", "K", "V", "Z", "T"];

console.log(abcMay.sort());

let abcMayMin = ["o", "i", "e", "a", "u", "A","C", "K", "V", "Z", "T"];

console.log(abcMayMin.sort());

let num = [-5, 399, 1, 50, 10, 100, -200];

console.log(num.sort());

//

console.log(num.sort(function (a, b) {
    return b-a;
}));

let alumnos = ["Aybar","Dimaria","Messi","Martinez", "Armani"];

const ordenAlumnos = (array) =>{
    let alumnosOrdenados = array.sort((a,b) => {
        if(a<b){
            return -1;
        }else if(a>b){
            return 1;
        }else{
            return 0;
        }
    });
    return alumnosOrdenados;
};

console.log(ordenAlumnos(alumnos));
console.log(alumnos.reverse());

let palabra = "murcielago";
console.log(palabra.split("").reverse().join(""));

//

let pares = num.filter((num) =>{
    return num % 2 === 0 && num  > 0;
})

console.log(pares);

//

let mayor10 = num.filter((numero) => numero>10)

console.log(mayor10);

//

let personas = [
    "Joaquin",
    "gustavo",
    "milton",
    "mariano",
    "Maria",
    "Juan"
];

const nombresFiltrados = (letra, array)=>{
    let nombres = array.filter((nombre)=>{
        return nombre.toUpperCase().trim().includes(letra.toUpperCase().trim())
    })
    return nombres
}

console.log(nombresFiltrados('sta', personas));

let alumnos2 = ["Juan", "Pedro", "Pablo", "Juan"];

let resultadoBusqueda = alumnos2.find(alumno => alumno === "Juan")
console.log(resultadoBusqueda);

let numeros = [-50, -1, 100, 25, -200, 500]

let numerosDobles = numeros.map((num) => num * 2);
numeros
numerosDobles
numeros

let copyStudents = alumnos.map((alumno)=>alumno);
copyStudents
alumnos

alumnos.forEach((alumno) => {
    let nameToUpperCase = alumno.toUpperCase();
    console.log(nameToUpperCase);
})

let arrayJoin = [...alumnos, ...alumnos2]

arrayJoin

let fruits = ['🍈', '🍒', '🥝', '🍍', '🍎', '🍊', '🥑', '🥥', '🥦']

console.log(fruits.some((fruit) => fruit === '🍈'))

let apples = ['🍍', '🍍', '🍍', '🍍']
apples.fill('🍎')
apples

console.log(apples.every((apple) => apple === '🌮'))

let numbers = [1,2,6,0,4,9,5,625,3,54,691]
let sum = numbers.reduce((acc, curr)=>{
    return acc = acc+curr;
},0)

console.log(sum); 

let numbers2 = [1, 2, 5, 6, 10];
let suma = numbers2.reduce((acc, curr)=>{
    return acc + curr;
},0);

console.log(suma);