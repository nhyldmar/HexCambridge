// var app = chrome.runtime.getBackgroundPage();

var oldBody = null;

function race1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/race.js'
  }); 
}


function homo1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/homo.js'
  }); 
}

function censorAll1() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/censorAll.js'
  }); 
}

// uncensor scripts
function race2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/unCensorAll.js'
  }); 
}


function homo2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/unCensorAll.js'
  }); 
}

function censorAll2() {
  chrome.tabs.executeScript({
    file: 'censor_scripts/unCensorAll.js'
  }); 
}

document.getElementById('race1').addEventListener('click', race1);
document.getElementById('race2').addEventListener('click', censorAll2);
document.getElementById('homo1').addEventListener('click', homo1);
document.getElementById('homo2').addEventListener('click', censorAll2);
document.getElementById('censorAll1').addEventListener('click', censorAll1);
document.getElementById('censorAll2').addEventListener('click', censorAll2);
