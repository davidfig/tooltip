# yy-tooltip
Simple vanilla-javascript tooltip replacement. 

## rationale

I wanted a simple replacement for the standard HTML tooltips that doesn't rely on stylesheets. It looks like the standard tooltip but accepts html and its style is more configurable. It attaches to the mouse position instead of the underlying div.

This was not designed to be as robust as other tooltip libraries (e.g., [tooltip.js](https://www.npmjs.com/search?q=tooltip.js), [tippy.js](https://www.npmjs.com/package/tippy.js)). 

## installation

    npm i yy-tooltip

## programmatic example

```js
const Tooltip = require('yy-tooltip')

const element = document.getElementById('test')
new Tooltip(element, { title: '<div>First line</div><div>Second line</div>', styles: { background: 'black', color: 'white' }})
```

## live example
https://davidfig.github.io/tooltip/

## API
```js
    /**
     * Add tooltip to an element
     * @param {(HTMLElement|string)} element or querySelector() input
     * @param {string} html
     * @param {object} [options]
     * @param {object} [options.styles] additional styles to apply to tooltip (e.g., backgroundColor: 'red')
     * @param {number} [options.parent] parent to attach tooltip div
     */
    constructor(element, html, options)

    /** removes tooltip */
    remove()
    {
        this.parent.removeChild(this.div)
        this.div = null
    }

    /**
     * @type {string}
     * gets/sets change html of tooltip
     */
    get html()

    /**
     * @type {number}
     * get/set fade in/out duration in milliseconds
     */
    static get animationDuration()

    /**
     * @type {(string|function)}
     * get/set ease function (or function name) to use for tooltip fade
     * defaults to 'easeInOutSine'
     */
    static get animationEase()

/**
 * @type {object}
 * default styles to apply to tooltip div
 */
Tooltip.styles = {

/**
 * @type {number}
 * @static
 * milliseconds to wait before showing tooltip
 */
Tooltip.wait = 500

/**
 * @type {HTMLElement}
 * element to attach div
 */
Tooltip.parent = document.body

```
## License  
MIT License  
(c) 2018 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
