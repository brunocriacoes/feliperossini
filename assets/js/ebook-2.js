import Slider from './Slider.js'





/* 
async function getReviews() {
    var placeId = 'ChIJx10QDzL2zpQROVoah2YT61I'
    var path = `./assets/json/ebook-2.json`
    var data = await (await fetch(path)).json()
    var palco = document.querySelector('.js-reviews')
    var largura = palco.clientWidth / 2 - 52
    if (palco) {
        for (let i = 0; i < 13; i++) {
            let { author, gravatar, content } = data.data[i]
            let html = `
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
            palco.innerHTML += html
        }
    }

}
*/




/*
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
*/



console.log('estoy aqui')



function renderItem({ reviewer_name, reviewer_picture_url, text, url }) {
    

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