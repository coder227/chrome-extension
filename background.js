chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    chrome.tabs.query({ active: true, currentWindow: true },
         (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "popup-modal" });
});
});
