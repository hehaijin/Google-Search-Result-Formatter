chrome.storage.sync.get(['titleFirstLine'], function (items) {
  let st = items.titleFirstLine;
  document.getElementById('titleFirstLine').checked = st;
});



// document.getElementById('titleFirstLine').checked= true;

document.getElementById('titleFirstLine').addEventListener('click',
  () => {
    console.log('click received');
    let st = document.getElementById('titleFirstLine').checked;
    chrome.storage.sync.set({ 'titleFirstLine': st }, function () {
      console.log('Settings saved', st);
      // refresh current tab
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          { code: 'location.reload()' });
      });

    });
  }
)

