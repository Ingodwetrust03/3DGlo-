'use strict'

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validator from './modules/validator';
import slider from './modules/slider';
import tabs from './modules/tabs';
import calculator from './modules/calculator';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';


timer('24 november 2021')
menu()
modal()
validator()
slider()
tabs()
calculator()
smoothScroll()
sendForm({
    formId: ['form1','form3', 'form2'], 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
