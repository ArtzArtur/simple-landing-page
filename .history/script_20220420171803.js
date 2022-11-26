const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');
const card = document.querySelectorAll(".trail__card")
const navItem = document.querySelectorAll(".")

navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
}))


card.forEach(a=>{
  a.addEventListener("click",()=>{
    a.classList.toggle('test')
  })
})