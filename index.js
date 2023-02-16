const ratingCard = document.querySelector('.rating-card')
const thanksCard = document.querySelector('.thanks-card')

const scale = document.querySelectorAll('.btn')
const submitButton = document.querySelector('.submit');

const rating = document.querySelector('.rating')

scale.forEach((value) => {
  value.addEventListener('click', () => {
    rating.innerHTML = value.innerHTML
  })
})

submitButton.addEventListener('click', () => {
  thanksCard.classList.remove('hidden')
  ratingCard.style.display = 'none'
})

