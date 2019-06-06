const Ease = require('dom-ease')

class Tooltip
{
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
    {
        if (typeof element === 'string')
        {
            const change = document.querySelector(element)
            if (!change)
            {
                console.warn(`No element found for Tooltip using querySelector("${element}")`)
                return
            }
            element = change
        }

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
        if (options.className)
        {
            this.div.className = options.className

        }
        else
        {
            for (let style in styles)
            {
                this.div.style[style] = styles[style]
            }
        }
        this.div.innerHTML = html
        this.options = options
        this.element = element
        this.setupLocation()

        element.addEventListener('mouseenter', (e) => this.mouseenter(e))
        element.addEventListener('mousemove', (e) => this.mousemove(e))
        element.addEventListener('mousedown', (e) => this.mouseleave(e))
        element.addEventListener('mouseleave', (e) => this.mouseleave(e))
    }

    setupLocation()
    {
        const location = this.options.location
        if (location)
        {
            this.horizontal = this.vertical = 'center'
            if (location.indexOf('left') !== -1)
            {
                this.horizontal = 'left'
            }
            else if (location.indexOf('right') !== -1)
            {
                this.horizontal = 'right'
            }
            if (location.indexOf('top') !== -1)
            {
                this.vertical = 'top'
            }
            else if(location.indexOf('bottom') !== -1)
            {
                this.vertical = 'bottom'
            }
        }
        else
        {
            this.location = 'cursor'
        }
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
     * get/set default fade in/out duration in milliseconds
     * defaults to 250
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
     * get/set default ease function (or function name) to use for tooltip fade
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

    /**
     * @type {number}
     * get/set default wait time for fade in/out duration in milliseconds
     * defaults to 500
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
        let x, y
        if (this.location === 'cursor')
        {
            x = e.pageX
            y = e.pageY
        }
        else
        {
            x = this.horizontal === 'left' ? this.element.offsetLeft :
                this.horizontal === 'right' ? this.element.offsetLeft + this.element.offsetWidth :
                    this.element.offsetLeft + this.element.offsetWidth / 2
            y = this.vertical === 'top' ? this.element.offsetTop :
                this.vertical === 'bottom' ? this.element.offsetTop + this.element.offsetHeight :
                    this.element.offsetTop + this.element.offsetHeight / 2
        }
        this.div.maxWidth = 'none'
        this.div.style.left = x - (x > window.innerWidth / 2 ? this.div.offsetWidth : 0) + 'px'
        this.div.style.top = y - (y > window.innerHeight / 2 ? this.div.offsetHeight : 0) + 'px'
        if (this.div.offsetLeft < 0)
        {
            const width = this.div.offsetWidth
            const left = this.div.offsetLeft
            this.div.style.maxWidth = width + left + 'px'
            this.div.style.left = 0
        }
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
                this.easing = Tooltip.ease.add(this.div, { opacity: 1 }, { ease: this.options.ease, wait: this.options.wait, duration: this.options.duration })
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

Tooltip.ease = new Ease({ duration: 250, ease: 'easeInOutSine', wait: 500 })

/**
 * @type {HTMLElement}
 * element to attach div
 */
Tooltip.parent = document.body

module.exports = Tooltip