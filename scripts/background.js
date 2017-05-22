// this is the background code...
// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  const elId = 'xz-inject'

  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.id, {
    code: `\
      if (document.getElementById('${elId}') === null) {\
        let el = document.createElement("script");\
        el.id = '${elId}';\
        el.async = true;\
        el.src = '${chrome.extension.getURL("inject.js")}';\
        document.body.appendChild(el);\
        console.log('inject.js loaded.');\
      } else {\
        console.log('inject.js already loaded.');\
      }\
      `
  });

  console.log('inject.js loaded.')
});
