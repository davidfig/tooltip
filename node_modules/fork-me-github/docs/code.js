import forkMe from '../dist/'
import Highlight from './highlight'
window.onload = function()
{
    forkMe()
    forkMe(null, { background: 'green', side: 'topleft' })
    forkMe('https://github.com/davidfig/fork-me-github',
        {
            background: 'black',
            color: 'yellow',
            side: 'bottomleft',
            text: 'view on github'
        }
    )
    Highlight()
}