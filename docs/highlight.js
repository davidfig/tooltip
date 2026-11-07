const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

// shows the code in the demo
module.exports = function highlight()
{
    var client = new XMLHttpRequest();
    client.open('GET', 'code.js');
    client.onreadystatechange = function()
    {
        if (client.readyState !== 4) return;
        var code = document.getElementById('code');
        code.textContent = client.responseText;
        hljs.highlightElement(code);
    };
    client.send();
};

// for eslint
/* globals window, XMLHttpRequest, document */