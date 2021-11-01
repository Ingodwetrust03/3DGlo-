'use strict'


const validator = () => {
    const calcInputs = document.querySelectorAll('.calc-block input[type=text]')
    const formInputs = document.querySelectorAll('form input[type=text], input[placeholder="Ваше сообщение"]')
    const emailInputs = document.querySelectorAll('form input[type=email]')
    const telInputs = document.querySelectorAll('input[type=tel]')

    calcInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/g, '')
        })
    })

    formInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            if (/[^а-я -]/gi.test(e.target.value) && e.target.value !== '') {
                e.target.value = ''
                e.target.setAttribute('placeholder', 'Используйте кириллицу, дефис и пробелы')
                e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = ''
            }
            return e.target.value
        })
    })


    emailInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            if (/^(?!а\-я$)(?!А\-Я$)((.{0,1})?( [-]{0,1})?( @.+)?([.]{0,1})?(.{0,11})?)$/.test(e.target.value) && e.target.value !== '') {
                e.target.value = ''
                e.target.setAttribute('placeholder', 'Используйте латинницу и символы @ - _ . ! ~ *')
                e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = ''
            }
            return e.target.value
        })
    })


    telInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            if (!/^[\d\-()]+$/.test(e.target.value) && e.target.value !== '') {
                e.target.value = ''
                e.target.setAttribute('placeholder', 'Используйте цифры, круглые скобки и дефис')
                e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = ''
            }
            return e.target.value
        })
    })
}

export default validator