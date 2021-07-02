// Challenge - create error div's in JS alone 
// Empty num var - each time error occurs + 1 to it | check at end - if greater than 0 = prevent reload (+ reset to 0 - at beginning of code)
// Empty array - after validation error input el itself pushed to it + use that to check length for if errors present | loop through array + append repetitive styling via toggle class in CSS (border colour, exclamation symbol - appendChild() on input el - build + style in JS, show next element sibling, custom placeholder txt)| remove error styling for refresh next time? 


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
            errorsArr.push(inputsArr[i])
        }
    } 

    if (errorsArr.includes(email)) {
        email.placeholder = 'Email@example.com'
    } else {
        email.placeholder = 'Email address'
    }
        
    for (let i = 0; i < errorsArr.length; i++) {
        let nextSibling = errorsArr[i].nextElementSibling
        nextSibling.classList.toggle('hidden')
        errorsArr[i].classList.toggle('error')
    }
    
    if (errorsArr.length > 0) {
      e.preventDefault()
    }
})