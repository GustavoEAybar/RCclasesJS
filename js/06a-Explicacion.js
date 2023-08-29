/*
keyword this: hace referencia al objeto actual. Sirve para obtener todo lo que tiene dicho objeto.
*/

const cuentaBancaria =  {
    nroCuenta: '3125468251430000213564',
    saldo: 100,
    deposito(cantidad){
        this.saldo = this.saldo + cantidad
    },
    retiro(cantidad){
        this.saldo = this.saldo - cantidad
    }
}
cuentaBancaria.deposito(300);
console.log(cuentaBancaria.saldo);
cuentaBancaria.retiro(10);
console.log(cuentaBancaria.saldo);