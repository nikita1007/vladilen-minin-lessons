const slides = document.querySelectorAll('.cards__item')

slides.forEach(elem => {
	elem.onclick = function() {
  	slides.forEach(el => {
    	el.classList.remove('cards__item--active')  
    })
    document.querySelector('.bg_image').setAttribute('style', elem.getAttribute('style'))
  	elem.classList.add('cards__item--active')
  }
})