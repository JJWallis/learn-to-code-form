// 1. Re-factor 
// 2. Exclamation symbol - position in relation to <fieldset> 
// 3. Build on string validation - search 
// 4. Regular expressions 

'use strict'

const form = document.querySelector('.form')
const fieldset = document.querySelector('.fieldset')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    let inputsArr = document.querySelectorAll('input')
    let errorsArr = []

    for (let i = 0; i < inputsArr.length; i++) {
        if (inputsArr[i].value === '' || inputsArr[i].value === null) {
            if (inputsArr[i].type === 'email') {
                email.placeholder = 'Email@example.com'
            }
            errorsArr.push(inputsArr[i])
        } else {
            let nextSibling = inputsArr[i].nextElementSibling
            nextSibling.classList.add('hidden')
            inputsArr[i].classList.remove('error')
        }
    } 
        
    for (let i = 0; i < errorsArr.length; i++) {
        let nextSibling = errorsArr[i].nextElementSibling
        if (!errorsArr[i].previousElementSibling) {
            let errorIcon = document.createElement('img');
            errorIcon.src = '/images/icon-error.svg'
            errorIcon.alt = 'Red error icon'
            errorIcon.className = 'error-icon'
            fieldset.insertBefore(errorIcon,errorsArr[i])
        }
        nextSibling.classList.remove('hidden')
        errorsArr[i].classList.add('error')
    }
    
    if (errorsArr.length > 0) {
      e.preventDefault()
    }
})