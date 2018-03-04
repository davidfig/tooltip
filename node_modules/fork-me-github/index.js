// Programatically add fork me on github ribbon from javascript without making changes to CSS, HTML, or adding image files
// by David Figatner
// copyright 2017 YOPEY YOPEY LLC
// MIT license
// based on https://github.com/simonwhitaker/github-fork-ribbon-css (MIT license)

const RIBBON = {
    width: '12.1em',
    height: '12.1em',
    overflow: 'hidden',
    top: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: 'none',
    fontSize: '13px',
    textDecoration: 'none',
    textIndent: '-999999px'
}

const BEFORE_AFTER = [
    ['position', 'absolute'],
    ['display', 'block'],
    ['width', '15.38em'],
    ['height', '1.54em'],
    ['top', '3.23em'],
    ['right', '-3.23em'],
    ['-webkit-box-sizing', 'content-box'],
    ['-moz-box-sizing', 'content-box'],
    ['box-sizing', 'content-box'],
    ['-webkit-transform', 'rotate(45deg)'],
    ['-moz-transform', 'rotate(45deg)'],
    ['-ms-Transform', 'rotate(45deg)'],
    ['-o-transform', 'rotate(45deg)'],
    ['transform', 'rotate(45deg)']
]

const BEFORE = [
    ['content', '""'],
    ['padding', '.38em 0'],
    ['background-color', '#a00'],
    ['background-image', '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)))'],
    ['background-image', '-webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'],
    ['background-image', '-moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'],
    ['background-image', '-ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'],
    ['background-image', '-o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'],
    ['background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'],
    ['box-shadow', '0 .15em .23em 0 rgba(0, 0, 0, 0.5)'],
    ['pointer-events', 'auto']
]

const AFTER = [
    ['content', 'attr(data-ribbon)'],
    ['color', '#fff'],
    ['font', '700 1em "Helvetica Neue", Helvetica, Arial, sans-serif'],
    ['line-height', '1.54em'],
    ['text-decoration', 'none'],
    ['text-shadow', '0 -.08em rgba(0, 0, 0, 0.5)'],
    ['text-align', 'center'],
    ['text-indent', '0'],
    ['padding', '.15em 0'],
    ['margin', '.15em 0'],
    ['border-width', '.08em 0'],
    ['border-style', 'dotted'],
    ['border-color', '#fff'],
    ['border-color', 'rgba(255, 255, 255, 0.7)']
]

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
{
    options = options || {}
    const a = document.createElement('a')
    a.href = url
    a.title = a.innerText = options.text || 'fork me on github'
    a.setAttribute('data-ribbon', options.text || 'fork me on github')
    a.className = 'github-fork-ribbon-' + Math.round(Math.random() * 100000)
    if (options.parent)
    {
        options.parent.appendChild(a)
    }
    else
    {
        document.body.appendChild(a)
    }
    a.style.position = options.fixed ? 'fixed' : 'absolute'
    if (options.background)
    {
        BEFORE[2][1] = options.background
    }
    if (options.color)
    {
        AFTER[1][1] = options.color
    }
    for (let style in RIBBON)
    {
        a.style[style] = RIBBON[style]
    }
    let beforeAfter = '{'
    for (let style of BEFORE_AFTER)
    {
        beforeAfter += style[0] + ':' + style[1] + ';'
    }
    let before = beforeAfter
    for (let style of BEFORE)
    {
        before += style[0] + ':' + style[1] + ';'
    }
    let after = beforeAfter
    for (let style of AFTER)
    {
        after += style[0] + ':' + style[1] + ';'
    }
    let bottom, left
    if (options.side)
    {
        bottom = options.side.toLowerCase().indexOf('bottom') !== -1
        left = options.side.toLowerCase().indexOf('left') !== -1
    }
    if (bottom)
    {
        a.style.top = 'auto'
        a.style.bottom = 0
        before += 'top:auto;bottom:3.23em;'
        after += 'top:auto;bottom:3.23em;'
    }
    if (left)
    {
        a.style.right = 'auto'
        a.style.left = 0
        before += 'right:auto;left:-3.23em;'
        after += 'right:auto;left:-3.23em;'
    }
    if ((left && !bottom) || (!left && bottom))
    {
        before += 'transform:rotate(-45deg);'
        after += 'transform:rotate(-45deg);'
    }
    const style = document.createElement('style')
    document.head.appendChild(style)
    const sheet = style.sheet
    sheet.insertRule('.' + a.className + '::before' + before + '}')
    sheet.insertRule('.' + a.className + '::after' + after + '}')
}