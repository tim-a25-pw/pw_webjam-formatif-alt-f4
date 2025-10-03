import Swiper from 'swiper/bundle';

export default class Caroussel {
  constructor(element) {
    this.element = element;

    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }
  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }
    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }
    if ('loop' in this.element.dataset) {
      this.options.loop = {
        loop: true,
      };
    }
    if ('slides' in this.element.dataset) {
      this.options.slidesPerView = parseFloat(this.element.dataset.slides, 10) || this.options.slidesPerView;
    }
  }
  init() {
    this.setOptions();
    const swiper = new Swiper(this.element, this.options);
  }
}
