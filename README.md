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
     * @param {HTMLElement} element
     * @param {string} html
     * @param {object} [options]
     * @param {object} [options.styles] styles to apply to this tooltip (e.g., backgroundColor: 'red')
     * @param {number} [options.parent] parent to attach this tooltip div
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
     * gets/sets html of tooltip
     */
    get html()

    /**
     * @type {number}
     * get/set fade in/out duration in milliseconds for all tooltips
     */
    static get animationDuration()

    /**
     * @type {(string|function)}
     * get/set ease function (or function name) to use for all tooltip fades
     * defaults to 'easeInOutSine'
     */
    static get animationEase()

/**
 * @type {object}
 * default styles to apply to all tooltip divs
 */
Tooltip.styles = {

/**
 * @type {number}
 * @static
 * milliseconds to wait before showing all tooltip
 */
Tooltip.wait = 500

/**
 * @type {HTMLElement}
 * element to attach all divs
 */
Tooltip.parent = document.body

```
## License  
MIT License  
(c) 2018 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
