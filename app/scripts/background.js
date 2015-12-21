'use strict';

var hey = function hey() {
  var audio = document.querySelector('#hey');
  audio.play();
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    hey();
  }
});

chrome.tabs.onActivated.addListener(function (tabId, windowId) {
  hey();
});
//# sourceMappingURL=background.js.map
