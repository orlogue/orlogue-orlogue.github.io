const greetingImageDiv = document.querySelector(".greeting__image")
const imageMe = document.querySelector('.image-me')

function loaded() {
  greetingImageDiv.classList.add('loaded')
}

if (imageMe.complete) {
  loaded()
} else {
  imageMe.addEventListener('load', () => {
    loaded()
    setTimeout(() => {
      imageMe.classList.add('grayscale-transition')
    }, 500)
  })
}
