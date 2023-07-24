const greetingImageDiv = document.querySelector(".greeting__image");
const imageMe = document.querySelector('.image-me');

function loaded() {
  greetingImageDiv.classList.add('loaded');
}

if (imageMe.complete) {
  loaded();
} else {
  imageMe.addEventListener('load', () => {
    loaded();
    setTimeout(() => {
      greetingImageDiv.querySelector('.grayscale').remove();
      greetingImageDiv.classList.add('bg-none');
    }, 350);
  });
}
