/*const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/



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