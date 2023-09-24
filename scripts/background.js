let visitCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'pageLoaded') {
    if (sender.tab.url.includes('apple.com')) {
      visitCount++;
      chrome.storage.local.set({ visitCount });
    }
  } else if (message.action === 'getCount') {
    chrome.storage.local.get('visitCount', (data) => {
      const count = data.visitCount || 0;
      sendResponse({ count });
    });
    return true;
  }
});
