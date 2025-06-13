// This placeholder extracts contact name from the LinkedIn message page
function extractChatInfo() {
  const nameEl = document.querySelector('h2.msg-thread__msg-title');
  if (nameEl) {
    const name = nameEl.textContent.trim();
    chrome.runtime.sendMessage({
      type: 'storeData',
      key: 'lastContact',
      data: { name, timestamp: Date.now() }
    });
  }
}

// Run when the page loads
window.addEventListener('load', () => {
  extractChatInfo();
});
