const Ease = require('dom-ease')

class Tooltip
{
    /**
     * Add tooltip to an element
     * @param {HTMLElement} element
     * @param {string} html
     * @param {object} [options]
     * @param {object} [options.styles] additional styles to apply to tooltip (e.g., backgroundColor: 'red')
     * @param {number} [options.parent] parent to attach tooltip div
     */
    constructor(element, html, options)
    {
        options = options || {}

        const styles = {}
        for (let style in Tooltip.styles)
        {
            styles[style] = Tooltip.styles[style]
        }
        if (options.styles)
        {
            for (let style in options.styles)
            {
                styles[style] = options.styles[style]
            }
        }
        this.display = styles['display'] || 'block'
        this.showing = false

        this.parent = options.parent || Tooltip.parent || document.body
        this.div = document.createElement('div')
        for (let style in styles)
        {
            this.div.style[style] = styles[style]
        }
        this.div.innerHTML = html

        element.addEventListener('mouseenter', (e) => this.mouseenter(e))
        element.addEventListener('mousemove', (e) => this.mousemove(e))
        element.addEventListener('mousedown', (e) => this.mouseleave(e))
        element.addEventListener('mouseleave', (e) => this.mouseleave(e))
    }

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
    {
        return this.div.innerHTML
    }
    set html(value)
    {
        this.div.innerHTML = value
    }

    /**
     * @type {number}
     * get/set fade in/out duration in milliseconds
     */
    static get animationDuration()
    {
        return Tooltip.ease.options.duration
    }
    static set animationDuration(value)
    {
        Tooltip.ease.options.duration = value
    }

    /**
     * @type {(string|function)}
     * get/set ease function (or function name) to use for tooltip fade
     * defaults to 'easeInOutSine'
     */
    static get animationEase()
    {
        return Tooltip.ease.options.ease
    }
    static set animationEase(value)
    {
        Tooltip.ease.options.ease = value
    }

    position(e)
    {
        this.div.style.left = e.pageX - (e.pageX > window.innerWidth / 2 ? this.div.offsetWidth : 0) + 'px'
        this.div.style.top = e.pageY - (e.pageY > window.innerHeight / 2 ? this.div.offsetHeight : 0) + 'px'
    }

    mouseenter(e)
    {
        if (!this.div)
        {
            return
        }
        if (e.buttons === 0)
        {
            if (!this.showing)
            {
                this.div.style.opacity = 0
                this.div.style.display = this.display
                this.parent.appendChild(this.div)
                Tooltip.ease.remove(this.easing)
                this.easing = Tooltip.ease.add(this.div, { opacity: 1 }, { wait: Tooltip.wait })
                this.position(e)
                this.showing = true
            }
        }
    }

    mousemove(e)
    {
        if (this.div && this.showing)
        {
            this.position(e)
        }
    }

    mouseleave()
    {
        if (this.div && this.showing)
        {
            this.showing = false
            Tooltip.ease.remove(this.easing)
            this.easing = Tooltip.ease.add(this.div, { opacity: 0 })
            this.easing.on('complete', () =>
            {
                this.div.remove()
            })
        }
    }
}

/**
 * @type {object}
 * default styles to apply to tooltip div
 */
Tooltip.styles = {
    'position': 'absolute',
    'zIndex': 99999,
    'background': 'white',
    'border': 'solid black 1px',
    'padding': '0.75em',
    'pointerEvents': 'none'
}

Tooltip.ease = new Ease({ duration: 250, ease: 'easeInOutSine' })

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

module.exports = Tooltip