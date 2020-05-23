const Boton = document.getElementById('buttonResponsive')
const nav = document.getElementById('nav')

Boton.addEventListener('click' , () => {
 nav.classList.toggle('open')
})