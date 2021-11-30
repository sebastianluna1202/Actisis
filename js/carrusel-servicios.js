let flechaIzquierdaServicios = document.querySelector(".section-3 .flecha-izquierda")
let flechaDerechaServicios = document.querySelector(".section-3 .flecha-derecha")
let serviciosContainer = document.querySelector(".section-3 .container")
let servicioCard = document.querySelector('.section-3 .container .card')

flechaDerechaServicios.addEventListener("click", () => {
  let longitudContainer = servicioCard.clientWidth + (servicioCard.clientWidth/10)
  serviciosContainer.scrollBy(
    {
      top: 0,
      left: longitudContainer,
      behavior: "smooth"
    })
})
flechaIzquierdaServicios.addEventListener("click", () => {
  let longitudContainer = -servicioCard.clientWidth - (servicioCard.clientWidth/10)
  serviciosContainer.scrollBy(
    {
      top: 0,
      left: longitudContainer,
      behavior: "smooth"
    })
})


