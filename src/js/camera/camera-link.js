(function ($) {

  $.fn.camera.link = function (video, stream) {
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else if (navigator.mozGetUserMedia) {
      video.mozSrcObject = stream;
    } else {
      var windowURL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      video.src = windowURL.createObjectURL(stream);
    }
  };

})(jQuery);
