const options = {
  type: 'loop',
  speed: 1000,
  easing: 'ease',
  arrows: false,
  autoplay: true,
  interval: 4000,
  pauseOnHover: false,
  height: 'calc(100vh - 120px)',
  cover: true,
  focus: 'center',
};

new Splide('.splide', options).mount();
