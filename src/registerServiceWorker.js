function emitUpdate() {
  const event = document.createEvent('Event');
  event.initEvent('sw.update', true, true);
  window.dispatchEvent(event);
}

window.addEventListener('load', function () {
  if ('serviceWorker' in navigator) {
    navigator
      .serviceWorker
      .register(`${process.env.BASE_URL}/service-worker.js`)
      .then(function (reg) {
        // eslint-disable-next-line no-debugger
        debugger;
        if (reg.waiting) {
          emitUpdate();
          return;
        }
        reg.onupdatefound = function () {
          const installingWorker = reg.installing;
          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                emitUpdate();
              }
              break;
            }
          };
        };
      })
      .catch(function (e) {
        console.error('Error during service worker registration:', e);
      });
  }
});
