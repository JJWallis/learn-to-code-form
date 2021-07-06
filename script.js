// 1. Babel 
// 2. Regular expressions 

'use strict'

const form = document.querySelector('.form')
const fieldset = document.querySelector('.fieldset')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const phoneNumber = document.querySelector('#phone-number')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', e => {
    let errorsArr = []

    for (let i = 0; i < inputs.length; i++) {
        let passwordNextElementSibling = password.nextElementSibling
        if (inputs[i].value === '' || inputs[i].value === null) {
            inputs[i].nextElementSibling.textContent = `${inputs[i].placeholder} cannot be empty`
            errorsArr.push(inputs[i])
        } else if (password.value.toLowerCase() === 'password') {
            passwordNextElementSibling.textContent = 'Password cannot be password'
            errorsArr.push(password)
        } else if (phoneNumber.value !== '') {
            const numberFormatted = phoneNumber.value.replace(/[^0-9]/g,'')
            phoneNumber.value = numberFormatted
        } else {
            let nextSibling = inputs[i].nextElementSibling
            nextSibling.classList.add('hidden')
            inputs[i].classList.remove('error')
        }
    }
        
    for (let i = 0; i < errorsArr.length; i++) {
        let nextSibling = errorsArr[i].nextElementSibling
        if (nextSibling.lastChild.className !== 'error-icon') {
            let errorIcon = document.createElement('img')
            errorIcon.src = '/images/icon-error.svg'
            errorIcon.alt = 'Red error icon'
            errorIcon.className = 'error-icon'
            nextSibling.appendChild(errorIcon)
        }
        if (errorsArr[i].type === 'email') {
            email.placeholder = 'Email@example.com'
        }
        nextSibling.classList.remove('hidden')
        errorsArr[i].classList.add('error')
    }
        if (errorsArr.length > 0) {
            e.preventDefault()
        }
})