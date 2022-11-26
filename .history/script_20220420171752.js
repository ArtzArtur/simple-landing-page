const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');
const card = document.querySelectorAll(".trail__card")
const 

navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
}))


card.forEach(a=>{
  a.addEventListener("click",()=>{
    a.classList.toggle('test')
  })
})