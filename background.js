chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.local.get('enabled', function (data) {
        chrome.storage.local.set({ enabled: !data.enabled });
    });
});
