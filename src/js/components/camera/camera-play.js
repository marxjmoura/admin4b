(function ($) {

  $.fn.camera.play = function () {
    var $video = $(this);

    if ($video.prop('playing')) {
      return;
    }

    var video = $video.get(0);

    video.addEventListener('canplay', function () {
      $video.prop('playing', true);
      $video.trigger('camera:play');
    }, false);

    var mediaConstraint = { video: true, audio: false };

    var onSuccess = function (stream) {
      $video.prop('stream', stream);
      $.fn.camera.link(video, stream);
      video.play();
    };

    var onFailure = function (error) {
      $video.trigger('camera:error', { error: 'No camera available.' });
    };

    $.fn.camera.getUserMedia(mediaConstraint, onSuccess, onFailure);
  };

})(jQuery);
