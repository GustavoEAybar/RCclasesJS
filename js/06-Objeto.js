let nombre = "Abel";
let apellido = "Córdoba";
let email = "abela@gmail.com";
let dni = 32651894;

//definir o declarar un objeto en forma literal

let usuario = {
  //clave: valor | key: value... las claves se les llama propiedades. Describen al objeto
  nombre: "Abel",
  apellido: "Córdoba",
  email: "abela@gmail.com",
  dni: 32651894,
//   roles: ['admin', 'superuser', 'moderador'],
//   curso: {
//     nombre: 'Fullstack',
//     esPresencial: false,
//   }
  saludar(){
    return `Hola ${this.nombre}${this.apellido}`;
  },
  isLogged(){
    return  true;
  }
};

//objeto es una forma de modelar algo de la realidad y puede ser intangible o tangible
//definir un objeto vacio de forma literal
let objVacio = {};

//mostrar el objeto en el documento

document.write(usuario);

//mostrar en consola
console.log(usuario);

//mostrar una propiedad del objeto. forma1. nombreObjeto.propiedad
document.write(`El nombre de usuario es: ${usuario.nombre}`);

//mostrar una propiedad del objeto. forma2 nombreObjeto['propiedad']
document.write(`el apellido del usuario es: ${usuario["apellido"]}`);

//si queremos aplicar for...of a un objeto nos dira que el mismo no es iterable
// for(let elemento of usuario){
//     console.log(elemento)
// }

//podemos usar en cambio for ... in
document.write(`<h5>User:</h5>`);
for (let elemento in usuario) {
  document.write(`<br>${elemento}: ${usuario[elemento]}</br>`);
}

//mostrar un objeto usando un bucle tradicional
const mostrarObjeto = () => {
  //usando el método keys del objeto para obtener un array con sus claves
  let claves = Object.keys(usuario);
  console.log(claves.length);

  document.write("<h5>User: </h5>");

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    let valor = usuario[clave];
    // obtengo el nombre de cada una de las claves y con ellas puedo obtener cada uno de los valores
    document.write(`<br>${clave}: ${valor} `);
  }
};

mostrarObjeto();

//mostrar el objeto usando su array de keys con un for...of
let keys = Object.keys(usuario);
for(const key of keys){
    const value= usuario[key]
    console.log(key, value);
}

//mostrar solo los valores del objeto usando el método value --> devuelve un array de valores
//formado con los pares key value

console.log(Object.values(usuario));

Object.entries(usuario).map(entry=>{
    const [key, value] =entry
    console.log(key, value); 
})

//modificar una propiedad
usuario.nombre='pepe';
mostrarObjeto()

//agregar una propiedad
usuario.roles= ['admin', 'superuser', 'moderador']
mostrarObjeto

console.log(usuario.roles);

//eliminar una propiedad
delete usuario.dni
mostrarObjeto()

//métodos son las cosas que puede hacer un objeto, sus acciones y la forma en que se relaciona con otros objetos
//se definen como si fueran  propiedades cuyo valor son funciones anonimas

//llamar o invocar un metodo: nombre del objeto.metodo()
console.log(usuario.saludar());
console.log(usuario.isLogged());