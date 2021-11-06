'use strict'

const smoothScroll = () => {
    const menuLinks = document.querySelectorAll('menu li > a, main > a:last-child')

    const animateScroll = (el) => {
        let linkHref = el.getAttribute('href')
        let section = document.querySelector(linkHref)

        section.scrollIntoView({
            behavior: 'smooth'
        })
    }

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            animateScroll(e.currentTarget)
        })
    })
}

export default smoothScroll