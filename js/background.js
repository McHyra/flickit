/* Click function for ext icon */
function click(e) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        console.log("Click");
    });
}

chrome.browserAction.onClicked.addListener(click);