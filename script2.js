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
  value = value.replace(/artificial intelligence/gi, 'aRtIfIcIaL InTeLlIgEnCe');
  value = value.replace(/Artificial intelligence/gi, 'aRtIfIcIaL InTeLlIgEnCe');
  value = value.replace(/artificial Intelligence/gi, 'aRtIfIcIaL InTeLlIgEnCe');
  value = value.replace(/Artificial Intelligence/gi, 'aRtIfIcIaL InTeLlIgEnCe');
  value = value.replace(/machine learning/gi, 'mAcHiNe lEaRnInG');
  value = value.replace(/Machine learning/gi, 'mAcHiNe lEaRnInG');
  value = value.replace(/machine Learning/gi, 'mAcHiNe lEaRnInG');
  value = value.replace(/Machine Learning/gi, 'mAcHiNe lEaRnInG');
  value = value.replace(/deep learning/gi, 'dEeP LeArNiNg');
  value = value.replace(/Deep learning/gi, 'dEeP LeArNiNg');
  value = value.replace(/deep Learning/gi, 'dEeP LeArNiNg');
  value = value.replace(/Deep Learning/gi, 'dEeP LeArNiNg');
  value = value.replace(/reinforcement learning/gi, 'rEiNfOrCeMeNt lEaRnInG');
  value = value.replace(/Reinforcement learning/gi, 'rEiNfOrCeMeNt lEaRnInG');
  value = value.replace(/reinforcement Learning/gi, 'rEiNfOrCeMeNt lEaRnInG');
  value = value.replace(/Reinforcement Learning/gi, 'rEiNfOrCeMeNt lEaRnInG');
  value = value.replace(/blockchain/gi, 'bLoCkChAiN');
  value = value.replace(/Blockchain/gi, 'bLoCkChAiN');
  value = value.replace(/data science/gi, 'dAtA ScIeNcE');
  value = value.replace(/Data science/gi, 'dAtA ScIeNcE');
  value = value.replace(/data Science/gi, 'dAtA ScIeNcE');
  value = value.replace(/Data Science/gi, 'dAtA ScIeNcE');
  value = value.replace(/big data/gi, 'bIg dAtA');
  value = value.replace(/Big data/gi, 'bIg dAtA');
  value = value.replace(/big Data/gi, 'bIg dAtA');
  value = value.replace(/Big Data/gi, 'bIg dAtA');
  value = value.replace(/internet of things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/Internet of things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/internet Of things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/Internet Of things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/internet of Things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/Internet of Things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/internet Of Things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/Internet Of Things/gi, 'iNtErNeT Of tHiNgS');
  value = value.replace(/the cloud/gi, 'tHe cLoUd');
  value = value.replace(/The cloud/gi, 'tHe cLoUd');
  value = value.replace(/the Cloud/gi, 'tHe cLoUd');
  value = value.replace(/The Cloud/gi, 'tHe cLoUd');
  value = value.replace(/cloud computing/gi, 'cLoUd cOmPuTiNg');
  value = value.replace(/Cloud computing/gi, 'cLoUd cOmPuTiNg');
  value = value.replace(/cloud Computing/gi, 'cLoUd cOmPuTiNg');
  value = value.replace(/Cloud Computing/gi, 'cLoUd cOmPuTiNg');
  value = value.replace(/cryptocurrency/gi, 'cRyPtOcUrReNcY');
  value = value.replace(/Cryptocurrency/gi, 'cRyPtOcUrReNcY');
  node.nodeValue = value;
}

window.onload = findAndReplace();