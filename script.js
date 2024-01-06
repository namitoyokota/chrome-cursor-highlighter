const cursorHighlighter = document.createElement('div');
cursorHighlighter.id = 'chrome-cursor-highlighter';
cursorHighlighter.style.zIndex = '2147483647';
cursorHighlighter.style.position = 'absolute';
cursorHighlighter.style.backgroundColor = 'grey';
cursorHighlighter.style.width = '70px';
cursorHighlighter.style.height = '70px';
cursorHighlighter.style.borderRadius = '50%';
cursorHighlighter.style.opacity = 0.25;
cursorHighlighter.style.pointerEvents = 'none';

document.onmousemove = (event) => {
    cursorHighlighter.style.left = event.pageX - 35 + 'px';
    cursorHighlighter.style.top = event.pageY - 35 + 'px';
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
