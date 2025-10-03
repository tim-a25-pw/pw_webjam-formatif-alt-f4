export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      threshold: 0.1,
      alwaysShow: false,
    };

    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.init();
    this.initNavMobile();
  }
  init() {
    this.setOptions();

    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  setOptions() {
    if ('threshold' in this.element.dataset) {
      this.options.threshold = this.element.dataset.threshold;
    }
    if ('alwaysShow' in this.html.dataset) {
      this.options.alwaysShow = true;
      console.log(this.options.alwaysShow);
    }
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirections();
  }
  setHeaderState() {
    if (
      this.scrollPosition >
      document.scrollingElement.scrollHeight * this.options.threshold
    ) {
      if (!this.options.alwaysShow) {
        this.html.classList.add('header-is-hidden');
      }
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }
  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.add('is-scrolling-up');
      this.html.classList.remove('is-scrolling-down');
    }
  }
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }
  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
