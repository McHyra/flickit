

/* Click function for ext icon */
function click(e) {
    chrome.tabs.chery({ currentWindow: true, active: true }, function(tabs) {
        alert("Click");
    });
}

chrome.browserAction.onClicked.addListener(click);