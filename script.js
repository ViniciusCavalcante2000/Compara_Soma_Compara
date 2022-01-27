function compare(a, b) {
    if (a === b) {
      console.log('Os números ', a, 'e ', b, 'são iguais.')
    } else {
       console.log('Os números ', a, 'e ', b, 'não iguais.')
    }
    let soma = (+a + +b);
    if (soma < 10) {
      console.log('Sua soma é',soma, 'que é menor do que 10 e menor do que 20.')
    } else if (soma === 10 & soma < 20) {
      console.log('Sua soma é', soma, ', que é igual a 10 e menor do que 20.')
   }  else if (soma > 10 & soma < 20) {
       console.log('Sua soma é', soma, ', que é maior do que 10 e menor do que 20.')
   }  else if (soma > 10 & soma === 20) {
         console.log('Sua soma é', soma, ', que é maior do que 10 e é igual a 20.')
    } else {
       console.log('Sua soma é', soma, ', que é maior do que 10 e maior do que 20.')
    }
  }
  
  compare(prompt('Digite o primeiro número'), prompt('Digite o segundo número'))