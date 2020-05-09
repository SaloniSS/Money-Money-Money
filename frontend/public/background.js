const testUrls = ["amazon.com/gp/product", "url2.com"];

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  if (changeInfo.url) {
    alert(tab.url);
  }
});
