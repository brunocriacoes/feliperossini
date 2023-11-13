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

// efeitoDigitacao(document.querySelector('.js-digital'), 'Felipe Rossini', 200)


async function getReviews() {
	var placeId = 'ChIJx10QDzL2zpQROVoah2YT61I'
	var path = `https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=${placeId}&with_text_only=1&min_rating=5&page_length=100&order=date`
	var data = await (await fetch(path)).json()
	var palco = document.querySelector('.js-reviews')
	var largura = palco.clientWidth / 2 - 52
	if (palco) {
		for (let i = 0; i < 13; i++) {
			let { reviewer_name, reviewer_picture_url, text, url } = data.result.data[i]
			let html = `
			<div class="slider_card" >
				<div style="width: ${largura}px">
					<div>
						<img src="${reviewer_picture_url}" alt="${reviewer_name}">
					</div>
					<div>
						<strong>${reviewer_name}</strong>
						<span>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</span>
					</div>
					<div>
						<a href="${url}" target="_blank" rel="noopener noreferrer">
							<img src="./assets/images/logo-google.png" alt="logo-google">
						</a>
					</div>
				</div>
				<p>${text}</p>
			</div>
			`
			palco.innerHTML += html
		}
	}

}

getReviews()

var _ml = document.querySelector('.slider_loop').clientWidth + 24

function next() {
	var palco = document.querySelector('.slider_loop')
	var largura = _ml * -1
	var position_now = +palco.style.getPropertyValue('--ml').replace('px', '')
	palco.style.setProperty('--ml', (largura + position_now) + "px");

}

function prev() {
	var palco = document.querySelector('.slider_loop')
	var largura = _ml
	var position_now = +palco.style.getPropertyValue('--ml').replace('px', '')
	palco.style.setProperty('--ml', (largura + position_now) + "px");
}
