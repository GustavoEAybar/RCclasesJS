//clases son como moldes de objetos. Podemos crear o instanciar objetos a partir de su clase
//si queremos abstraernos a la hora de crear usuarios y clientes por ej, uno podria decir que tienen en comun que son personas en ese caso podemos crear la clase persona

// function Person(){
//     this.name = 'John',
//     this.lastName = 'Doe',
//     this.age = 54
// }

//cuando definimos una clase es importante que el nombre de la clase se escriba con la primera letra en mayúscula
class Persona {
  //la funcion constructor es el primer metodo que se invoca cuando creo un obj por medio de una clase
  //los parametros que nosotros pasemos al constructor son las propiedades que tendra el objeto a crear
  constructor(nombre, apellido, edad, dni, email, telefono) {
    (this.name = nombre),
      (this.lastName = apellido),
      (this.age = edad),
      (this.dni = dni),
      (this.email = email),
      (this.tel = telefono);
  }

  //los metodos en una clase se definene fuera del constructor. pero al invocarlos y no encontrarlos en su objeto lo busca en su clase
  greet() {
    return `Hello, i'm ${this.name} ${this.lastName}`;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
        <br>Name: ${this.name}
        <br>Lastname: ${this.lastName}
        <br>Age: ${this.age}
        <br>Dni: ${this.dni}
        <br>Email: ${this.email}
        <br>Phone: ${this.tel}
        `);
  }

  //propiedades conmutadas getters y setters
  //get sirve para mostrar las propiedades del objeto
  get showName() {
    return this.name;
  }
  get showLastName() {
    return this.lastName;
  }
  get showAge() {
    return this.age;
  }
  get showDni() {
    return this.dni;
  }
  get showEmail() {
    return this.email;
  }
  get showTel() {
    return this.tel;
  }

  //a continuacion de los getters se definen los setters
  //set sirve para modificar propiedades del objeto

  set updateName(newName) {
    this.name = newName;
  }
  set updateLastname(newLastName) {
    this.lastName = newLastName;
  }
  set updateAge(newAge) {
    this.age = newAge;
  }
  set updateDni(newDni) {
    this.dni = newDni;
  }
  set updateEmail(newEmail) {
    this.email = newEmail;
  }
  set updateTel(newTel) {
    this.Tel = newTel;
  }
}

//instanciar o crear un objeto: se usa la palabra reservada new seguido del nombre de la clase
//es importante respetar el orden de los parametros
const Pepe = new Persona(
  "Pepe",
  "Argento",
  54,
  10586324,
  "pepeargento@gmail.com",
  116879485
);
console.log(Pepe);

//invocamos el metodo que se encuentra en su clase
console.log(Pepe.greet());
Pepe.showData();
Pepe.name = "Jose"; //mala practica
console.log(Pepe);

//utilizando las propiedades conmutadoreas. Figuran como propiedades pero se comportan como métodos
//usando getter

document.write("<br><br>" + Pepe.showName + "" + Pepe.showLastname);

//usando setter
Pepe.updateName = "Pedro";
Pepe.updateLasName = "Picapiedra";
Pepe.showData();

//Herencia: se heredan propiedades y metodos
class Alumno extends Persona {
  //contructor toma todos los parámetros de su constructor padre agregando su propios parámetros
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    curso,
    comision,
    cuotaDia
  ) {
    //invoca al constructor de la clase padre con super()
    super(nombre, apellido, edad, dni, email, tel);
    this.curso = curso;
    this.comision = comision;
    this.cuotaDia = cuotaDia;
  }

  //si invocamos showdata sin definirlo lo busca en la clase padre y grafica hasta las prop del padre
  //si quiero que muestre comision, curso, debo SOBRE.ESCRIBIR (over write) el método en la clase hija
  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
        <br>Name: ${this.name}
        <br>Lastname: ${this.lastName}
        <br>Age: ${this.age}
        <br>Dni: ${this.dni}
        <br>Email: ${this.email}
        <br>Phone: ${this.tel}
        <br>Curso: ${this.curso}
        <br>Comision: ${this.comision}
        <br>CuotaDia: ${this.cuotaDia}
        `);
  }

  //definimos los getter y setters de las nuevas propiedades o las del objeto hijo
  get mostrarCurso() {
    return this.curso;
  }
  get mostrarComision() {
    return this.comision;
  }
  get mostrarCuotaDia() {
    return this.cuotaDia;
  }

  set modificarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
  }
  set modificarComision(nuevoComision) {
    this.comision = nuevoComision;
  }
  set modificarCuotaDia(nuevoCuotaDia) {
    this.cuotaDia = nuevoCuotaDia;
  }
}

//crear o instanciar un alumno
let Eduardo = new Alumno(
  "Eduardo",
  "Arias",
  36,
  32458558,
  "edua@gmail.com",
  3815467982,
  "Fullstack",
  "66i",
  true
);

console.log(Eduardo);

//crear la clase mentor
class Mentor extends Persona {
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    comision,
    legajo,
    antiguedad
  ) {
    super(nombre, apellido, edad, dni, email, tel);
    this.comision = comision;
    this.legajo = legajo;
    this.antiguedad = antiguedad;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
        <br>Name: ${this.name}
        <br>Lastname: ${this.lastname}
        <br>Age: ${this.age}
        <br>Dni: ${this.dni}
        <br>Email: ${this.email}
        <br>Phone: ${this.tel}
        <br>comision: ${this.comision}
        <br>legajo: ${this.legajo}
        <br>antiguedad: ${this.antiguedad}
        `);
  }
  //getter y setters
}

let Abel = new Mentor(
  "Abel",
  "Cordoba",
  36,
  31254658,
  "Abel@gmial.com",
  38154697136,
  "66i",
  321645,
  8
);
console.log(Abel);
Abel.showData();

//Polimorfismo: el mismo nombre del metodo con respuestas diferentes dependiendo del objeto por el cual se invoca