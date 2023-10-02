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


async function fetchGoogleReviews() {
  const placeId = 'ChIJ-6ewNGBXzpQRDV38bzvaB84';  // Você precisa obter o Place ID para o local desejado
  const apiKey = 'Coloque aqui a sua chave de API do Google Places';

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result && data.result.reviews) {
      const reviews = data.result.reviews;

      console.log('Avaliações do Google Reviews:');
      reviews.forEach(review => {
        console.log(`- Avaliação por ${review.author_name}: ${review.text}`);
      });
    } else {
      console.error('Erro ao obter avaliações do Google Reviews:', data.status);
    }
  } catch (error) {
    console.error('Erro ao obter avaliações do Google Reviews:', error);
  }
  
}

fetchGoogleReviews();