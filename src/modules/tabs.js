'use strict'


const tabs = () => {
    const tabPanel = document.querySelector('.service-header')
    const tabBtns = document.querySelectorAll('.service-header-tab')
    const tabContent = document.querySelectorAll('.service-tab')

    tabPanel.addEventListener('click', (e) => {
        if ( e.target.closest('.service-header-tab')){
            const tabBtnClick = e.target.closest('.service-header-tab')
            tabBtns.forEach((btn, index) => {
            if(btn === tabBtnClick){
                btn.classList.add('active')
                tabContent[index].classList.remove('d-none')
            } else {
                btn.classList.remove('active')
                tabContent[index].classList.add('d-none')
                }
            })
        }
    })

    
}

export default tabs