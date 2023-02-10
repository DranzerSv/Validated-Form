let keyLog = [];
/*function patternSearch(arr, pattern) {
  for (let i = 0; i < arr.length - pattern.length; i++) {
    if (
      arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4] ===
      pattern
    ) {
      return 'chetoos';
    }
  }
  w s o l o 1 x

  w
  ws
  wso
  wsol
  wsolo
  s
  so
  sol
  solo
  solo1
}*/
window.addEventListener('keyup', (e) => {
  const gif = document.getElementById('rick__roll-gif');
  const secretCode = 'kami';
  let tecla = e.key.toLowerCase();
  keyLog.push(tecla);
  /*
  if (keyLog.length >= secretCode.length) {
    for (let i = 0; i < keyLog.length - secretCode.length; i++) {
      let temporal = '';
      for (let j = i; j < i + secretCode.length; j++) {
        temporal += keyLog[j];
        if (temporal === secretCode) {
          console.log('activated');
          keyLog = [];
        }
      }
    }
  }*/
  if (keyLog.length >= secretCode.length) {
    let cadena = keyLog.join('');
    if (cadena.includes(secretCode)) {
      gif.classList.toggle('showing__gif');
      console.log('activated');
      keyLog = [];
    }
  }
});
