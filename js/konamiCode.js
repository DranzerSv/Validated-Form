let keyLog = [];

window.addEventListener('keyup', (e) => {
  const gif = document.getElementById('cat__gif');
  const secretCode = 'kami';
  const tecla = e.key.toLowerCase();
  keyLog.push(tecla);
  const keys = keyLog.slice(keyLog.length - secretCode.length);

  if (keys.join('') === secretCode) {
    gif.classList.toggle('showing__gif');
  }
});
