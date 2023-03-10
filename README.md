# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![screenshot](design/screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/interactive-rating-component-cN5pSkXK_T)
- Live Site URL: [https://jppoullet.github.io/interactive-rating-component-main/](https://jppoullet.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

- Using a form with radio inputs - Submit input with onclick funtion
- Setting a style to the input & label using CSS
- Accessing the value of the selected rating input

```css
.ratinginput: checked + .ratingLabel;
```

```js
document.querySelector('input[name="rating"]:checked').value;
```

### Useful resources

- [Youtube vid 1](https://www.youtube.com/watch?v=fNcJuPIZ2WE&t=387s) - Help with understanding HTML Forms
- [Youtube vid 2](https://www.youtube.com/watch?v=GDh9uToZkYg&t=308s) - Help with understanding radio inputs and specifically styling them
- [Youtube vid 3](https://www.youtube.com/watch?v=r3Oc4IUP0XI) - Help with submit button and onclick function
