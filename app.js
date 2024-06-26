alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 a 10');
  // se o chute for igual ao número secreto
  if (chute == numeroSecreto){
    alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas, parabéns!`);   // exemplo de concatenação texto + variável
  } else {
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++; // tentativas + 1;
  }
}
// o console é uma ferramenta do desenvolvedor e não para o usuário, portanto no if o idel é deixar o 'alert' e não 'console.log'
// != Não é igual, == Igual, > Maior