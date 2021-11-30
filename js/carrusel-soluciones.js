let flechaIzquierdaSoluciones = document.querySelector(".section-4 .flecha-izquierda")
let flechaDerechaSoluciones = document.querySelector(".section-4 .flecha-derecha")
let solucionesContainer = document.querySelector(".section-4 .container")
let solucionCard = document.querySelector('.section-4 .container .card')

flechaDerechaSoluciones.addEventListener("click", () => {
  let longitudContainer = solucionCard.clientWidth + (solucionCard.clientWidth/10)
  solucionesContainer.scrollBy(
    {
      top: 0,
      left: longitudContainer,
      behavior: "smooth"
    })
})
flechaIzquierdaSoluciones.addEventListener("click", () => {
  let longitudContainer = -solucionCard.clientWidth - (solucionCard.clientWidth/10)
  solucionesContainer.scrollBy(
    {
      top: 0,
      left: longitudContainer,
      behavior: "smooth"
    })
})


