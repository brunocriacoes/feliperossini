import Slider from './assets/js/Slider.js'

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


function renderItem({ reviewer_name, reviewer_picture_url, text, url }) {
	return `
			<div class="slider_card" >
				<div>
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
			</div>`
}

; (async _ => {
	var placeId = 'ChIJx10QDzL2zpQROVoah2YT61I'
	var path = `https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=${placeId}&with_text_only=1&min_rating=5&page_length=100&order=date`
	var data = await (await fetch(path)).json()
	var textLimit = data.result.data.filter(e => e.text.length > 100 && e.text.length < 200)

	const options = {
		btnNext: [document.querySelector('.js-next')],
		btnPrev: [document.querySelector('.js-prev')],
		steps: [document.querySelector('.js-steps')],
		gap: 20,
		data: textLimit,
		item: renderItem,
		breakPoints: {
			0: 1,
			420: 2,
			768: 3,
		}
		,
		autoPlay: true,
		delay: 3000
	}
	const $slider = document.querySelector('.js-slider-loop')

	const sl = new Slider($slider, options)

})()