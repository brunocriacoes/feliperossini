async function getReviews() {
    var placeId = 'ChIJx10QDzL2zpQROVoah2YT61I'
    var path = `./assets/json/keto.json`
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
