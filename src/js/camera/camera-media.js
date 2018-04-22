(function ($) {

  navigator.getSupportedUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  $.fn.camera.isSupported = function () {
    return !!navigator.getSupportedUserMedia;
  };

  $.fn.camera.getUserMedia = function (mediaConstraint, onSuccess, onFailure) {
    return navigator.getSupportedUserMedia(mediaConstraint, onSuccess, onFailure);
  };

})(jQuery);
