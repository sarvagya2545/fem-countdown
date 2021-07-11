# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Launch countdown timer solution](#frontend-mentor---launch-countdown-timer-solution)
  - [Table of contents](#table-of-contents)
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

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot



### Links

- Solution URL: [On frontendmentor](https://www.frontendmentor.io/solutions/flip-animation-implemented-d-Mn0XhC9mq)
- Live Site URL: [https://sarvagya2545.github.io/fem-countdown/](https://sarvagya2545.github.io/fem-countdown/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- CSS transitions
- SCSS - CSS preprocessor
- Javascript for clock functionality

### What I learned

I learnt how to create a timer in javascript & learnt how to integrate it with flip animation using transitions.
The hardest part was to create the flip animation. But the thing which I ended up doing was to toggle the class using setTimeout and use transitions to create the flip effect.

Also, the transitions which were applied were applied when hovering and not on the actual card so that the flip is visible only going upward and not downward.

I learnt about `backface-visibility` which was a pretty neat property.

### Continued development

Still, some bugs are there. E.g. we see 60 popup in the seconds card after 1 minute ends instead of 00. 
The kind of code I wrote was not the cleanest which I could write but I am able to somehow do it. I have yet to refactor the code.

Next thing I want to do once the flip animation issues are fixed is to have a nice animated background. I don't really like the current one and would like to change it up.

### Useful resources

- [Kevin Powell's video](https://www.youtube.com/watch?v=FeJEEE3zc4U) - This video was the one which helped me understand the basics behind the flip animation. Kevin Powell is an amazing instructor and is a css wizard!

## Author

Hello there! I am Sarvagya Sharma!

- Frontend Mentor - [@sarvagya2545](https://www.frontendmentor.io/profile/sarvagya2545)

## Acknowledgments

I saw [@tediko](https://www.frontendmentor.io/profile/tediko)'s solution to this timer project when I got stuck and gained a lot of insight from that project. Thanks for the insight!
