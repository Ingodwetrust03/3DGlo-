'use strict'

const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = document.querySelector('.close-btn')
    const menuLinks = menu.querySelectorAll('li > a')


    const menuHandler = () => {
        menu.classList.toggle('active-menu')
    }
    menuBtn.addEventListener('click', menuHandler)
    closeBtn.addEventListener('click', menuHandler)
    menuLinks.forEach((link) => {
        link.addEventListener('click', menuHandler)
    })

}

export default menu