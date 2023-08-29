//clases son como moldes de objetos. Podemos crear o instanciar objetos a partir de su clase
//si queremos abstraernos a la hora de crear usuarios y clientes por ej, uno podria decir que tienen en comun que son personas en ese caso podemos crear la clase persona

// function person(){
//     this.name = 'John',
//     this.lastName = 'Doe',
//     this.age = 54
// }

//cuando definimos una clase es importante que el nombre de la clase se escriba con la primera letra en mayúscula

class Persona{
    //la funcion constructor es el primer metodo que se invoca cuando creo un obj por medio de una clase
    //los parametros que nosotros pasemos al constructor son las propiedades que tendra el objeto a crear
    constructor(nom, ape, edad, dni, email, tel){
        this.name = nom,
        this.lastname = ape,
        this.age = edad,
        this.dni = dni,
        this.email = email,
        this.tel = tel
    }
    //los metodos en una clase se definene fuera del constructor. pero al invocarlos y no encontrarlos en su objeto lo busca en su clase
    greet(){
        return `Hello, i'm ${this.name} ${ this.lasame}`;
    }

    showData(){
        document.write(`<h5>Person: ${this.name}</h5>
        <br>Name: ${this.name}
        <br>Lastname: ${this.lastname}
        <br>Age: ${this.age}
        <br>Dni: ${this.dni}
        <br>Email: ${this.email}
        <br>Phone: ${this.tel}
        `);	
    }

    //propiedades conmutadas getters y setters
    //get sirve para mostrar las propiedades del objeto
    get showName(){
        return this.name;
    }
    get showLastname(){
        return this.lastname;
    }
    get showAge(){
        return this.age;
    }
    get showDni(){
        return this.dni;
    }
    get showEmail(){
        return this.email;
    }
    get showTel(){
        return this.tel;
    }

    //a continuacion de los getters se definen los setters
    //set sirve para modificar propiedades del objeto

    set updateName(newName){
        this.name = newName;
    }
    set updateLastname(newLastname){
        this.lastname = newLastname;
    }
    set updateAge(newAge){
        this.age = newAge;
    }
    set updateDni(newDni){
        this.dni = newDni;
    }
    set updateEmail(newEmail){
        this.email = newEmail;
    }
    set updateTel(newTel){
        this.Tel = newTel;
    }
};

//instanciar o crear un objeto: se usa la palabra reservada new seguido del nombre de la clase
//es importante respetar el orden de los parametros
const Pepe = new Persona('Pepe', 'Argento', 54, 10586324, 'pepeargento@gmail.com', 116879485);
console.log(Pepe);

//invocamos el metodo que se encuentra en su clase
console.log(Pepe.greet());
Pepe.showData()

document.write('<br><br>' + Pepe.showName + '' + Pepe.showLastname);

//