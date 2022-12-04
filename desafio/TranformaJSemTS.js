"use strict";
let contaBancaria = {
    saldo: 657,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista = {
    nome: '2k',
    ContaBancaria: contaBancaria,
    contato: ['123456', '12345']
};
correntista.ContaBancaria.depositar(3000);
console.log(correntista);
