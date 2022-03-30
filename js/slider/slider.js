export var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
