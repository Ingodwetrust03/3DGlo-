'use strict'

import { animate } from './helpers'


const modal = () => {
    const popUp = document.querySelector('.popup')
    const popUpBtn = document.querySelectorAll('.popup-btn')
    const popUpContent = popUp.querySelector('.popup-content')
    const screenWidth = document.documentElement.clientWidth


    const popUpStylesOnLargeScreens = () => {
        popUp.style.display = 'block'
        popUp.style.zIndex = '-1'
        popUp.style.opacity = '0'
        popUpContent.style.top = '-30%'
    }

    popUpStylesOnLargeScreens()

    const popUpStylesOnSmallScreens = () => {
        popUpContent.style.animate = ''
        popUp.style.display = ''
        popUp.style.zIndex = ''
        popUp.style.opacity = ''
        popUpContent.style.top = ''
    }


    const showPopUp = () => {

        function makeEaseOut(timing) {
            return function(timeFraction) {
                return 1 - timing(1 - timeFraction);
            }
        }

        function bounce(timeFraction) {
            for (let a = 0, b = 1; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        }

        let bounceEaseOut = makeEaseOut(bounce)

        if (screenWidth <= 768) {
            popUpStylesOnSmallScreens()
            popUp.style.display = 'block'
        } else {
            animate({
                duration: 900,
                timing: bounceEaseOut,
                draw(progress) {
                    popUpContent.style.top = (10 * progress) + '%'
                }
            })

            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    if (screenWidth <= 768) {
                        popUpStylesOnSmallScreens()
                        popUp.style.display = 'block'
                    }
                    popUp.style.opacity = progress
                    popUp.style.zIndex = '9'
                }
            })

        }

    }

    const closePopUp = () => {
        if (screenWidth <= 768) {
            popUpStylesOnSmallScreens()
        } else {
            animate({
                duration: 600,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popUp.style.opacity = '0'
                    popUpContent.style.top = (-40 * progress) + '%'
                    popUp.style.zIndex = '-1'
                }
            })
        }
    }


    popUp.addEventListener('click', (e) => {
        if (!e.target.closest('form')) {
            closePopUp()
        }
    })


    popUpBtn.forEach((btn) => {
        btn.addEventListener('click', showPopUp)
    })

}

export default modal