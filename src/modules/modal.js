'use strict'


const modal = () => {
    const popUp = document.querySelector('.popup')
    const popUpBtn = document.querySelectorAll('.popup-btn')
    const popUpCloseBtn = document.querySelector('.popup-close')
    const popUpContent = popUp.querySelector('.popup-content')
    const screenWidth = document.documentElement.clientWidth
    const btnNextSection = document.querySelector('main a:last-child')


    let startAnimationShow
    let startAnimationClose

    const popUpStylesOnLargeScreens = () => {
        popUp.style.display = 'block'
        popUp.style.zIndex = '-1'
        popUp.style.backgroundColor = 'rgba(0,0,0,0)'
        popUp.style.transition = 'all ease-in .3s'
        popUpContent.style.top = '-50%'
        popUpContent.style.transition = 'all ease-in .7s'
    }

    popUpStylesOnLargeScreens()


   const popUpStylesOnSmallScreens = () => {
        popUp.style.display = ''
        popUp.style.zIndex = ''
        popUp.style.backgroundColor = ''
        popUp.style.transition = ''
        popUpContent.style.top = ''
        popUpContent.style.transition = ''
   }

    const showPopUp = () => {
        startAnimationShow = requestAnimationFrame(showPopUp)
       
        if(screenWidth <= 768){
            cancelAnimationFrame(startAnimationShow)
            popUpStylesOnSmallScreens()
            popUp.style.display = 'block'    
        } else {
            popUp.style.backgroundColor = 'rgba(0,0,0,.5)'
            popUpContent.style.top = '10%'
            popUp.style.zIndex = '9' 
        }
    }

    const closePopUp = () => {
        startAnimationClose = requestAnimationFrame(closePopUp)
        
        if(screenWidth <= 768){
            cancelAnimationFrame(startAnimationClose)
            popUpStylesOnSmallScreens()
            popUp.style.display = 'none'
        } else {
            popUpStylesOnLargeScreens()
        }
    }


    popUpBtn.forEach((btn) => {
        btn.addEventListener('click', showPopUp)
    })

    popUpCloseBtn.addEventListener('click', closePopUp)

}

export default modal