const Tooltip = require('..')

function test()
{
    for (let i = 1; i < 5; i++)
    {
        const button = document.getElementById('button' + i)
        switch (i)
        {
            case 3:
                new Tooltip(button, '<div>This one is formatted differently.</div><div>Nice, right?</div>',
                    {
                        styles:
                            {
                                backgroundColor: 'black',
                                color: 'white',
                                boxShadow: '2px 3px 3px rgba(0,0,0,0.25)',
                                borderRadius: '0.25em'
                            }
                    })
                break

            default:
                new Tooltip(button, '<div>Nice looking tooltip</div><div>Don\'t you think?</div>')
        }
    }
}

window.onload = function ()
{
    test()
    require('fork-me-github')('https://github.com/davidfig/shape-points')
    require('./highlight')()
}