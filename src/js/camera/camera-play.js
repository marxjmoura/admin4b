(function ($) {

  $.fn.camera.play = function () {
    var $video = $(this);

    if ($video.prop('playing')) {
      return;
    }

    var video = $video.get(0);

    var mediaConstraint = { video: true, audio: false };

    var onSuccess = function (stream) {
      $.fn.camera.link(video, stream);

      video.play();

      $video.prop('stream', stream);
      $video.prop('playing', true);

      $video.trigger('camera:play');
    };

    var onFailure = function (error) {
      $video.trigger('camera:error', error);
    };

    if ($.fn.camera.isSupported()) {
      $.fn.camera.getUserMedia(mediaConstraint, onSuccess, onFailure);
    } else {
      $video.trigger('camera:notSupported');
    }
  };

})(jQuery);
