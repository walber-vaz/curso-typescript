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
minhaIdade = '32';
console.log(typeof minhaIdade);
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
