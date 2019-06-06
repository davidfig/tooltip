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
     * @param {TooltipLocation} [options.location] unset: corner at cursor; otherwise a combination of "top/center/bottom + left/center/right", e.g., 'top-center', 'center+right', 'rightbottom', center'
     * @param {object} [options.styles] additional styles to apply to tooltip (e.g., backgroundColor: 'red')
     * @param {boolean} [options.className] use class name instead of styles for tooltip box (ignores options.styles)
     * @param {HTMLElement} [options.parent=document.body] parent to attach tooltip div
     * @param {number} [options.duration=250] fade-in/out in milliseconds
     * @param {number} [options.wait=500] milliseconds to wait before showing tooltip
     * @param {(string|Function)} [options.ease=easeInOutSine] name of ease (@see https://github.com/bcherny/penner#readme for names)
     */
    constructor(element, html, options = {})

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
     * get/set default fade in/out duration in milliseconds
     * defaults to 250
     */
    static get animationDuration()

    /**
     * @type {(string|function)}
     * get/set default ease function (or function name) to use for tooltip fade
     * defaults to 'easeInOutSine'
     */
    static get animationEase()

    /**
     * @type {number}
     * get/set default wait time for fade in/out duration in milliseconds
     * defaults to 500
     */
    static get animationEase()

/**
 * @type {object}
 * default styles to apply to tooltip div
 */
Tooltip.styles = {

/**
 * @type {HTMLElement}
 * element to attach div
 */
Tooltip.parent = document.body

```
## License  
MIT License  
(c) 2018 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)
