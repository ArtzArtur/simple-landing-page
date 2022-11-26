const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');
const card = document.querySelectorAll('.trail__card');
const navItem = document.querySelectorAll('.nav__item');
const btnTop = document.querySelector('.btn__top')
c

// nav toggle
navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
  navIcon.classList.toggle('activited')
}))

// trail card opener
card.forEach(a=>{
  a.addEventListener("click",()=>{
    a.classList.toggle('test')
  })
})

// nav close with link click
navItem.forEach(a=>{
  a.addEventListener("click",()=>{
    nav.classList.remove('active')
  navIcon.classList.remove('activited')

  })
})

// scroll top 

console.log(get)