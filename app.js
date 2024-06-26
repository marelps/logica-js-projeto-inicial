alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  // se o chute for igual ao número secreto
  if (chute == numeroSecreto){
    break;
  } else {
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'   // Operador ternário
alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}, parabéns!`);   // exemplo de concatenação texto + variável



// o console é uma ferramenta do desenvolvedor e não para o usuário, portanto no if o idel é deixar o 'alert' e não 'console.log'
// != Não é igual, == Igual, > Maior