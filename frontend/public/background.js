const testUrls = ["amazon.com/dp", "url2.com"];

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  if (changeInfo.url) {
    url = tab.url;
    cartIndex = url.indexOf("/gp/");
    if (cartIndex != -1) {
      var q1 = confirm("Are you sure you want this?");
      if (q1 == true) {
        console.log("q1 passed");
        var q2 = confirm("Do you really need this?");
        if (q2 == true) {
          console.log("q2 passed");
          var q3 = confirm("Are you actually going to use this?");
          if (q3 == true) {
            console.log("q3 passed");
          }
        }
      }
    }
  }
});
