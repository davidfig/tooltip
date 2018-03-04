# fork-me-github
Programatically add fork me on github ribbon from javascript without making changes to CSS, HTML, or adding image files

## Rationale
Wanted an easy way to add a "fork me on github" ribbon using plain javascript without changing CSS, HTML, or adding an image file.

## Simple Example

    const ForkMe = require('fork-me-github')
    ForkMe('https://github.com/davidfig/fork-me-github/)

## Live Example
https://davidfig.github.io/fork-me-github/

## Installation

    npm i fork-me-github

## API Reference
```
/**
 * Programmatically add "Fork me Github" Ribbon using inline CSS
 * Based on CSS from https,//github.com/simonwhitaker/github-fork-ribbon-css
 * @param {string} url - html link
 * @param {object} [options]
 * @param {HTMLElement} [options.parent=document.body]
 * @param {boolean} [options.fixed]
 * @param {string} [options.corner=topright] some combination of top/bottom, and left/right
 * @param {string} [options.text=fork me on github] text to show
 * @param {string} [options.background=#a00] color for ribbon
 */
module.exports = function forkMe(url, options)
```
## Inspiration

Ribbon uses [Simon Whitaker's github-fork-ribbon-css](https://github.com/simonwhitaker/github-fork-ribbon-css), which is based on [Github's ribbon examples](https://github.com/blog/273-github-ribbons)

# Similar plugins

Merrier's [github-fork-ribbon-normal](https://github.com/merrier/github-fork-ribbon-normal) plugin is very similar, and something I probably would have used if I had found it before writing this one. 

## license  
MIT License  
(c) 2017 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
