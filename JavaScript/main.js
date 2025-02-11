
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + section + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + section + ']').classList.remove('active-link')
    }
  }) 
}
window.addEventListener('scroll', scrollActive)













document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg", "img/popular4.jpg"]; // Substitua pelos caminhos corretos das imagens
  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnails");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");

  function updateSlider() {
      mainImage.src = images[currentIndex];
      document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
          thumb.classList.toggle("active", index === currentIndex);
      });
  }

  function changeSlide(direction) {
      currentIndex = (currentIndex + direction + images.length) % images.length;
      updateSlider();
  }

  // Criar miniaturas
  images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("thumbnail");
      img.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
      });
      thumbnailsContainer.appendChild(img);
  });

  updateSlider();

  // Adiciona eventos aos botões de navegação
  prevButton.addEventListener("click", () => changeSlide(-1));
  nextButton.addEventListener("click", () => changeSlide(1));

  // Navegação por toque (móvel)
  let touchStartX = 0;
  let touchEndX = 0;

  document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
  });

  document.querySelector(".slider-container").addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleGesture();
  });

  function handleGesture() {
      if (touchEndX < touchStartX) {
          changeSlide(1); // Deslizando para a esquerda (próxima imagem)
      } else if (touchEndX > touchStartX) {
          changeSlide(-1); // Deslizando para a direita (imagem anterior)
      }
  }
});
