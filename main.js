function efeitoDigital(elemento) {
    let numero = 0;
    let intervalo = setInterval(() => {
        numero++;
        elemento.textContent = numero;
        if (numero === 99) {
            numero = 0;
            clearInterval(intervalo);
        }
    }, 100);
}



function efeitoDigitacao(elemento, texto, velocidade) {
    // Define as variáveis
    elemento.innerHTML = ''
    let i = 0;
    let intervalo = setInterval(() => {
      // Adiciona uma letra ao texto
      elemento.textContent += texto[i];
  
      // Incrementa o índice da letra
      i++;
  
      // Verifica se o texto foi digitado todo
      if (i === texto.length) {
        // Cancela o intervalo
        clearInterval(intervalo);
      }
    }, velocidade);
  }

  efeitoDigitacao(document.querySelector('.js-digital'), 'Felipe Rossini', 200)