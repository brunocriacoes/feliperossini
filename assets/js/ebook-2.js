import Slider from './Slider.js'

function renderItem({ largura, gravatar, author, content }) {
    

	return `
    <div class="slider_card" >
        <div style="width: ${largura}px">
            <div>
                <img src="${gravatar}" alt="${author}" class="slider_gravatar">
            </div>
            <div>
                <strong style="--cor: #000;">${author}</strong>
                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
        </div>
        <p style="--cor: #777;">${content}</p>
    </div>
    `
}

; (async _ => {
	var placeId = 'ChIJx10QDzL2zpQROVoah2YT61I'
	var path = `./assets/json/ebook-2.json`
	var data = await (await fetch(path)).json()    

	const options = {
		btnNext: [document.querySelector('.js-next')],
		btnPrev: [document.querySelector('.js-prev')],
		steps: [document.querySelector('.js-steps')],
		gap: 20,
		data: data['data'],
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
	const $slider = document.querySelector('.js-reviews')

    console.log($slider)

	const sl = new Slider($slider, options)

})()