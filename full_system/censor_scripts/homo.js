var elementsInsideBody = [...document.body.getElementsByTagName('*')];
var badWords = [
  "dyke",
  "Bumhole engineer",
  "Brownie queen",
  "fag",
  "fagging",
  "faggot",
  "gay",
  "gaymuthafuckinwhore",
  "trannie",
  "tranny",
]

//var badWords = badWords.json;

function findAndReplace() {
  elementsInsideBody.forEach(element => {
    element.childNodes.forEach(child => {
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
}

function replaceText(node) {
  let value = node.nodeValue;

  for (var i = 0; i < badWords.length; i++) {
    var word = badWords[i];
    var wordreg = RegExp('(\\w*'+word+'e*r*s*(?!\\w+))', 'gi')
    var oldval = value;
    match = wordreg.exec(value)
    while (match !== null){
        value = value.replace(match[0], "■".repeat(match[0].length));
        match = wordreg.exec(value)
    }
  }
  if (value !== oldval) {
    // do something with knowledge of old values 
  }

  //  value = value.replace(/Cryptocurrency/gi, 'cRyPtOcUrReNcY');
  node.nodeValue = value;
}

window.onload = findAndReplace();