// Challenge - create error div's in JS alone 

'use strict'

const fieldset = document.querySelector('.fieldset')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

fieldset.addEventListener('submit', (e) => {
    e.preventDefault();
})

