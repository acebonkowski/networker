chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkedIn CRM Agent installed');
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'storeData') {
    chrome.storage.local.set({ [message.key]: message.data });
  }
});
