//backgroundScript.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "ebay.js"});
 });
