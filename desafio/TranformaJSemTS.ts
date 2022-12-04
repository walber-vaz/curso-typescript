// Desafio
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void,
}

type Correntista = {
  nome: string,
  ContaBancaria: ContaBancaria,
  contato: string[],
}

let contaBancaria: ContaBancaria = {
  saldo: 657,
  depositar(valor: number) {
    return this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: '2k',
  ContaBancaria: contaBancaria,
  contato: ['123456', '12345']
}

correntista.ContaBancaria.depositar(3000)
console.log(correntista)
