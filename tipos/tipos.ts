// Tipo em typescript são inferidos
let nome: string = '2k'
console.log(nome)
// Gera um erro no compilador typescript
// Por que esta tentando colocar um numero
// numa variável tipo string
// nome = 2

// Number
let idade: number = 27
console.log(idade)

// Boolean
let isHuman: boolean = true
console.log(isHuman)

// Tipos explícitos
// Se inicializa uma variável
// sem tipo ou valor log sera atribuído tipo any

let minhaIdade: number
minhaIdade = 32
console.log(typeof minhaIdade)
// minhaIdade = '32'
// console.log(typeof minhaIdade)

// Tipos arrays
// dizendo que variável e do tipo arrays de string, number, boolean ou any
let hobbies: string[] = ['Codar', 'Jogar', 'Ajudar']
console.log(hobbies[0])
console.log(typeof hobbies)

// Tipo tupla
// E uma quantidade pre definida de tipos no array
let endereco: [string, number] = ['Av. Fulano de tal', 234]
console.log(endereco)

// Tipo enums
// São valores pre definida
// Podemos definir valores padrão
enum Cor {
  Red = 255, // 255
  Green = 255, // 255
  Blue = 255 // 255
}
let minhasCores: Cor = Cor.Green
console.log(minhasCores) // 255, 255, 255

// tipo any
let carro: any = 'BMW'
console.log(carro)
carro = { nome: 'BMW', ano: '2022' }
console.log(carro.ano)

// Tipos em funções
// Fazer uma função retorna um tipo explicito
function retornaNome(): string {
  return nome
}
console.log(retornaNome)

// Tipo void
// se uma função não retorna nada pode usar tipo 'void'
function digaOla(): void {
  console.log('ola')
  // se colocar um retorno vai gerar um erro no compilador
  // return minhaIdade
}

digaOla()

// Tipo para parâmetro da função
function mult(num1: number, num2: number): number {
  return num1 * num2
}

console.log(mult(10, 20))

// Tipo função
// A ordem os parâmetro importante
let calculo: (numA: number, numa: number) => number
calculo = mult
console.log(calculo(10, 20))

// Tipos Object
let user: { name: string, age: number } = {
  name: '2k',
  age: 32
}

user = {
  name: 'walber',
  age: 21
}

console.log(user)

// Alias
// Criando tipo no typescript
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string,
}

const funcionario2: Funcionario = {
  supervisores: ['Walber', 'Pedro', 'Miguel'],
  baterPonto(pontoHora: number): string {
    if (pontoHora <= 8) {
      return 'Ponto normal'
    }
    return 'Fora do Horário'
  }
}

console.log(funcionario2.baterPonto(10))
