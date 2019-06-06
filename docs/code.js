const Tooltip = require('..')

function test()
{
    for (let i = 1; i < 6; i++)
    {
        const button = document.getElementById('button' + i)
        switch (i)
        {
            case 2:
                new Tooltip('#button2', '<div>Tooltip using querySelector()</div>')
                break

            case 3:
                new Tooltip(button, '<div>This one is formatted differently and uses location: center.</div><div>Nice, right?</div>',
                    {
                        styles: {
                            backgroundColor: 'black',
                            color: 'white',
                            boxShadow: '2px 3px 3px rgba(0,0,0,0.25)',
                            borderRadius: '0.25em'
                        },
                        location: 'center'
                    })
                break

            case 5:
                new Tooltip(button, '<p>This is a tooltip that is very long and has multiple lines.</p><p>This is testing whether it properly wraps the text so it does not fall off the screen. I have to keep typing but I am running out of things to say.</p><p>I guess I will leave it like this.</p>')
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