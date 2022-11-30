"use strict";
// Criar um array de string com nomes dos supervisores
// e uma função para bater ponto
const funcionario = {
    supervisores: ['Walber', 'Pedro', 'Miguel'],
    baterPonto(pontoHora) {
        if (pontoHora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do Horário';
    }
};
console.log(funcionario.baterPonto(10));
