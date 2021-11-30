let header = document.querySelector("header")
var scrollPos = 0;
var scrollTimes = 0
window.addEventListener('scroll', (e) => {
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    console.log('subir')
    scrollTimes++
    if (scrollTimes > 15) {
      setTimeout(() => {header.classList.remove('header-hidden')}, 0)
      header.classList.add("header-active")
    }
  }
	else {
    console.log('bajar')
    setTimeout(() => {header.classList.add('header-hidden')}, 1100)
    header.classList.remove("header-active")
    scrollPos = (document.body.getBoundingClientRect()).top;
    scrollTimes = 0
  }
});
