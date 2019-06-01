## dom-ease
a simple and super fast DOM animation library

## rationale
This is a simple library to animate DOM objects. It does not have all the bells and whistles of a library like [Velocity.js](http://velocityjs.org/), but it gets the job done with a nice event system.

## features
Here's a list of supported animations:

* top / left in px
* scale
* scaleX / scaleY
* color - one or more colors to cycle through, including the current color
* backgroundColor - one or more background colors to cycle through, including the current color
* width / height in px
* opacity
* marginLeft, marginRight, marginTop, marginBottom in px
* open a github issue if you want other parameters animated

## Installation

    npm i dom-ease

## Live Demo
[https://davidfig.github.io/dom-ease/](https://davidfig.github.io/dom-ease/)

## API Documentation
[https://davidfig.github.io/dom-ease/jsdoc/](https://davidfig.github.io/dom-ease/jsdoc)

## Simple Usage
```js
    const Ease = require('dom-ease')

    // set up ease
    const ease = new Ease({ duration: 1500 })

    const div = document.getElementById('test')
    ease.add(div, { left: 100, top: 200, scale: 2 }, { reverse: true, repeat: true, duration: 2500, ease: 'easeInOutQuad' })
```

## License 
MIT License  
(c) 2018 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
