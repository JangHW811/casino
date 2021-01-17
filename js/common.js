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
