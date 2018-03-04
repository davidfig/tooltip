const forkMe = require('..')

window.onload = function()
{
    forkMe('https://github.com/davidfig/fork-me-github/')
    forkMe('https://github.com/davidfig/fork-me-github', { background: 'green', side: 'topleft' })
    forkMe('https://github.com/davidfig/fork-me-github',
        {
            background: 'black',
            color: 'yellow',
            side: 'bottomleft',
            text: 'view on github'
        }
    )

    require('./highlight')()
}