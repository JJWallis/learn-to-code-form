# Frontend Mentor - Intro component with sign-up form solution

This is a solution to the [Intro component with sign-up form challenge](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Receive an error message when the form is submitted if:
   -  Any input field is empty
   -  The email address is not formatted correctly

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```html
<div class="errorMsg hidden"></div>
```

Considering this was my first time building error messages in Javascript and appending them into the DOM, I decided to hardcode a placeholder <div> to print each message for its corresponding input. Although a <div> has no semantic meaning to interrupt assistive technologies, it would have been better to build the whole error component in Javascript and dynamically append it to whatever form input registered invalid data. I also won't be using camel case class names in the future, as that naming convention should be strictly kept within Javascript.

```css
.btn-bg-purp {
   box-shadow: 1px 7px 0px 0px rgba(0, 0, 0, 0.2);
}

.input:not(:first-child) {
   margin-top: 0.9em;
}
```

I was proud of my ability to adjust the opacity of the buttons on hover, and successfully re-create the box-shadow style according to the original design, without having to research how to create both effects.

This project also provided a great means for using more advanced pseudo-classes which, in this particular instance, were used to create spacing between the inputs except the first-child to avoid loosing the top-alignment. I have recently learnt that there is a common utility class titled the 'Lobotomised Owl' that achieves this same spacing effect, but it uses a universal selector to be more dynamic in targeting the desired markup. This will definitely be a class that I re-use in future projects, as this design technique is very commonly used when you focus on searching for it.

```css
.wrapper {
   width: 80%;
   max-width: 460px;
}
```

Progression from accordian - setting max-width later + content change breakpoint later too (974px - too far as tablet view in later projects to account for in-between)

```js
let errorsArr = []
if (inputs[i].value === '' || inputs[i].value === null) {
   inputs[
      i
   ].nextElementSibling.textContent = `${inputs[i].placeholder} cannot be empty`
   errorsArr.push(inputs[i])
   // dynamic placeholder + error arr
}
```

My first project with client-side validation | basic strings + conditionals vs JS Validity API | submit event listener on form only (on btn click - run validation via looping over all inputs) | next time check if falsy vs === '' || === null | toLowerCase() - good converting data practice | next time - refactor massive event listener into 2 sep funcs

```js
const numberFormatted = phoneNumber.value.replace(/[^0-9]/g, '')
e.preventDefault() // 1st use
```

Regex used for phone number (could next time use pre-built one) | use on fly for advanced find + replace - building ID's dynamically (do in later project - RSVP app)

```js
const results = document.querySelector('.results')
new URLSearchParams(window.location.search).forEach((n, v) => {
   results.append(`${v}: ${n}`)
   results.append(document.createElement('br'))
})
```

results.html - JS to take submitted form data + display as if backend | progression from GET requests + learning HTTP + how data sent in request | GET method so sent in url + use JS built in constructor to obtain + display | shows name / value pairs - how stored on backend + links directly with objs in front-end | shows why validation important - else data may not make sense/malicious

### Continued development

later validation methods - libraries + regex (the one used here is copied from Treehouse course - when learning about classes + setter methods)

Design techniques - tablet (in-between mobile max-width + wider row - often too squished if do too soon)

### Useful resources

-  [Javascript Form Validation](https://www.youtube.com/watch?v=In0nB0ABaUk&t=105s&ab_channel=WebDevSimplified) - This video was my introduction to client-side validation, and how all HTML inputs store data as strings which we can perform basic validation on using conditional statements. Kyle vid - arr of inputs that recieve an error + if length > 0 - fails! (good use of data structures vs individual vars) |

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
