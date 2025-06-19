document.getElementById("toggle").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.body.classList.toggle("dark-site-mode");
      }
    });
  });
});
