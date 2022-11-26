const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');

navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
}))

const trails = document.querySelectorAll(".")

trails.forEach(a=>{
  a.addEventListener("click",()=>{
    console.log(a)
  })
})