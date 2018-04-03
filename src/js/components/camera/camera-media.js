(function ($) {

  $.fn.camera.getUserMedia = function (mediaConstraint, onSuccess, onFailure) {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(mediaConstraint, onSuccess, onFailure);
    } else if (navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia(mediaConstraint, onSuccess, onFailure);
    } else if (navigator.mozGetUserMedia) {
      navigator.mozGetUserMedia(mediaConstraint, onSuccess, onFailure);
    } else if (navigator.msGetUserMedia) {
      navigator.msGetUserMedia(mediaConstraint, onSuccess, onFailure);
    }
  };

})(jQuery);
