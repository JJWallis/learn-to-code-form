// 2. Exclamation symbol - position in relation to <fieldset> 
// 3. Build on string validation - search 
// 4. Regular expressions 
// 5. Babel

'use strict'

const form = document.querySelector('.form')
const fieldset = document.querySelector('.fieldset')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    let inputs = document.querySelectorAll('input')
    let errorsArr = []

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '' || inputs[i].value === null) {
            errorsArr.push(inputs[i])
        } else {
            let nextSibling = inputs[i].nextElementSibling
            nextSibling.classList.add('hidden')
            inputs[i].classList.remove('error')
        }
    } 
        
    for (let i = 0; i < errorsArr.length; i++) {
        let nextSibling = errorsArr[i].nextElementSibling
        console.log(nextSibling.lastChild);

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