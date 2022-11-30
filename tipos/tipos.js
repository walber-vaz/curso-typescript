"use strict";
// Tipo em typescript são inferidos
let nome = '2k';
console.log(nome);
// Gera um erro no compilador typescript
// Por que esta tentando colocar um numero
// numa variável tipo string
// nome = 2
// Number
let idade = 27;
console.log(idade);
// Boolean
let isHuman = true;
console.log(isHuman);
// Tipos explícitos
// Se inicializa uma variável
// sem tipo ou valor log sera atribuído tipo any
let minhaIdade;
minhaIdade = 32;
console.log(typeof minhaIdade);
// minhaIdade = '32'
// console.log(typeof minhaIdade)
// Tipos arrays
// dizendo que variável e do tipo arrays de string, number, boolean ou any
let hobbies = ['Codar', 'Jogar', 'Ajudar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// Tipo tupla
// E uma quantidade pre definida de tipos no array
let endereco = ['Av. Fulano de tal', 234];
console.log(endereco);
// Tipo enums
// São valores pre definida
// Podemos definir valores padrão
var Cor;
(function (Cor) {
    Cor[Cor["Red"] = 255] = "Red";
    Cor[Cor["Green"] = 255] = "Green";
    Cor[Cor["Blue"] = 255] = "Blue"; // 255
})(Cor || (Cor = {}));
let minhasCores = Cor.Green;
console.log(minhasCores); // 255, 255, 255
// tipo any
let carro = 'BMW';
console.log(carro);
carro = { nome: 'BMW', ano: '2022' };
console.log(carro.ano);
// Tipos em funções
// Fazer uma função retorna um tipo explicito
function retornaNome() {
    return nome;
}
console.log(retornaNome);
// Tipo void
// se uma função não retorna nada pode usar tipo 'void'
function digaOla() {
    console.log('ola');
    // se colocar um retorno vai gerar um erro no compilador
    // return minhaIdade
}
digaOla();
// Tipo para parâmetro da função
function mult(num1, num2) {
    return num1 * num2;
}
console.log(mult(10, 20));
// Tipo função
// A ordem os parâmetro importante
let calculo;
calculo = mult;
console.log(calculo(10, 20));
// Tipos Object
let user = {
    name: '2k',
    age: 32
};
user = {
    name: 'walber',
    age: 21
};
console.log(user);
