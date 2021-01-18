var isMob = false;

function resize() {
  $(window).resize(function (event) {
    var width = $(window).width();
    isMob = width < 640;
  });
}
$(document).ready(function () {
  var width = $(window).width();
  isMob = width < 640;
  resize();
});

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  var items = location.search.substr(1).split('&');
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split('=');
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}
