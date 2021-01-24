// var app = chrome.runtime.getBackgroundPage();

var oldBody = null;

function fuck1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/fuck.js'
  }); 
}


function shit1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/shit.js'
  }); 
}

function censorAll1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/censorAll.js'
  }); 
}

// uncensor scripts
function fuck2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/fuck.js'
  }); 
}


function shit2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/shit.js'
  }); 
}

function censorAll2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/censorAll.js'
  }); 
}

document.getElementById('fuck1').addEventListener('click', fuck1);
document.getElementById('fuck2').addEventListener('click', fuck2);
document.getElementById('shit1').addEventListener('click', shit1);
document.getElementById('shit2').addEventListener('click', shit2);
document.getElementById('censorAll1').addEventListener('click', censorAll1);
document.getElementById('censorAll2').addEventListener('click', censorAll2);
