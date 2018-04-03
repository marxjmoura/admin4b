(function ($) {

  $.fn.camera.stop = function () {
    var $video = $(this);

    if (!$video.prop('playing')) {
      return;
    }

    var stream = $video.prop('stream');

    if (stream.getVideoTracks && typeof stream.getVideoTracks === 'function') {
      var tracks = stream.getVideoTracks();

      if (tracks && tracks[0] && tracks[0].stop) {
        tracks[0].stop();
      }
    } else if (stream.stop) {
      // Deprecated, may be removed in the near future
      stream.stop();
    }

    $video.prop('playing', false);
    $video.prop('stream', null);

    $video.trigger('camera:stop');
  };

})(jQuery);
