//? Slider
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

const contactUs = document.getElementById('contact-us');
new simpleParallax(contactUs, {
  delay: 1,
  // scale: 1.2,
  transition: 'cubic-bezier(0,0,0,2)',
});
