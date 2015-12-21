'use strict';

var hey = function() {
  var audio = document.querySelector('#hey');
  audio.play();
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    hey();
  }
});

chrome.tabs.onActivated.addListener((tabId, windowId) => {
  hey();
});
