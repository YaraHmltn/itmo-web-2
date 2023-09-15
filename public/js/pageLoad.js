(function () {
  let startTime = new Date().getTime();

  function timer() {
    topbar.show();
    let element = document.getElementById('load-time');
    element.innerHTML +=
      'page loaded in ' +
      (new Date().getTime() - startTime) / 1000 +
      ' seconds';
  }

  document.addEventListener('DOMContentLoaded', function () {
    timer();
    topbar.hide();
  });
})();
