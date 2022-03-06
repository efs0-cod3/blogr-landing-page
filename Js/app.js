const ham_menu = document.querySelector('.nav__main-ham')
const close_modal = document.querySelector('.nav__close--modal')
const ham_modal = document.querySelector('.nav__show--modal')
const nav_menu = document.querySelector('.nav__menu')
const check = document.querySelectorAll('[checkbox]')



ham_menu.addEventListener('click', () => {
    ham_modal.classList.toggle('nav__show-modal--active')
    if (ham_modal.classList.contains('nav__show-modal--active')) {
        close_modal.classList.remove('nav__close-modal--deactive')
        nav_menu.classList.add('nav__menu--active')
    }



})
close_modal.addEventListener('click', () => {
    close_modal.classList.toggle('nav__close-modal--deactive')
    nav_menu.classList.toggle('nav__menu--active')
        
})

