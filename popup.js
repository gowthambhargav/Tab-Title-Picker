document.getElementById('titleButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      document.getElementById('title').textContent = tabs[0].title;
    });
  });