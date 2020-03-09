chrome.storage.sync.get(['titleFirstLine'], function(items) {
      console.log('Settings retrieved', items);
	//  if(Object.keys(items).length ===0 ){
		  chrome.storage.sync.set({ titleFirstLine: false });
  //  });
	//  }
    });





chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (var key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });
      
console.log('background page');

chrome.runtime.onInstalled.addListener(function () {
  
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostContains: 'google' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});