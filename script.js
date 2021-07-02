// Challenge - create error div's in JS alone 
// exclamation symbol - appendChild() on input el - build + style in JS 
// To do - regular expression to validate email format 


'use strict'

const form = document.querySelector('.form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    let inputsArr = [firstName, lastName, email, password]
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
        nextSibling.classList.remove('hidden')
        errorsArr[i].classList.add('error')
    }
    
    if (errorsArr.length > 0) {
      e.preventDefault()
    }
})