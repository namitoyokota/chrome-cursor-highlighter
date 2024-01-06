const cursorHighlighter = document.createElement('div');
cursorHighlighter.id = 'chrome-cursor-highlighter';

document.onmousemove = (event) => {
    if (cursorHighlighter) {
        cursorHighlighter.style.left = event.pageX - 35 + 'px';
        cursorHighlighter.style.top = event.pageY - 35 + 'px';
    }
};

chrome.storage.local.get('enabled', function (data) {
    if (data.enabled) {
        document.getElementsByTagName('body')[0].appendChild(cursorHighlighter);
    }
});

chrome.storage.onChanged.addListener((changes) => {
    const isEnabled = changes.enabled.newValue;
    if (isEnabled) {
        document.getElementsByTagName('body')[0].appendChild(cursorHighlighter);
    } else {
        document.getElementById('chrome-cursor-highlighter').remove();
    }
});
