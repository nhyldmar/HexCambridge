// example script that censors "shit"

var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  
  var wordreg = RegExp('(\\w*shit*e*r*s*(?!\\w+))', 'gi')
  var match = wordreg.exec(value)
  while (match !== null){
    value = value.replace(match[0], "■".repeat(match[0].length));
    match = wordreg.exec(value)
  }

  //value = value.replace(/shit/gi, 'Ring through my ears and sting my eyes, Your Spanish lullaby');
  node.nodeValue = value;
}

window.onload = findAndReplace();