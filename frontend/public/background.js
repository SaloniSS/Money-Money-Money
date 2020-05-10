const testUrls = ["amazon.com/dp", "url2.com"];

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  if (changeInfo.url) {
    url = tab.url;
    index = url.indexOf("/dp/");
    alert(tab.url);
    if (index == -1) {
      alert("Not a product page");
    } else {
      alert(url.substring(index + 4, index + 13));
    }
  }
});
