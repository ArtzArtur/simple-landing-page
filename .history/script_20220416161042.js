const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');

navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
}))

const trails = document.querySelectorAll(".trail__card__header")

trails.forEach(a=>{
  a.addEventListener("click",()={
    a.classList.toggle()
  })
})