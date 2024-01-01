const cursorHighlighter = document.createElement('div');
cursorHighlighter.id = 'chrome-cursor-highlighter';
cursorHighlighter.style.zIndex = '2147483647';
cursorHighlighter.style.position = 'absolute';
cursorHighlighter.style.backgroundColor = 'grey';
cursorHighlighter.style.width = '50px';
cursorHighlighter.style.height = '50px';
cursorHighlighter.style.border = '5px solid black';
cursorHighlighter.style.borderRadius = '50%';
cursorHighlighter.style.opacity = 0.25;
cursorHighlighter.style.pointerEvents = 'none';

document.onmousemove = (event) => {
    newX = event.pageX - 25;
    newY = event.pageY - 25;
    cursorHighlighter.style.left = newX + 'px';
    cursorHighlighter.style.top = newY + 'px';
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
