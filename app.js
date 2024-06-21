alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se o chute for igual ao número secreto
if (chute == numeroSecreto){
    alert('Você acertou o número secreto, parabéns! (5)');
} else {
    alert('Você errou! :(');
}

// o console é uma ferramenta do desenvolvedor e não para o usuário, portanto no if o idel é deixar o 'alert' e não 'console.log'