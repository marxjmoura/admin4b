(function ($) {

  var regex = /^(\d+)x(\d+)$/gi;

  function getSize(size) {
    if (!size || !size.match(regex)) {
      return { width: 320, height: 240 };
    }

    var matches = regex.exec(size);

    return { width: matches[1], height: matches[2] };
  }

  $.fn.camera.snapshot = function () {
    var $video = $(this);

    if (!$video.prop('playing')) {
      return;
    }

    var video = $video.get(0);

    var size = getSize($video.attr('data-size'));

    var canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;

    var context = canvas.getContext('2d');
    context.translate(size.width, 0); // 'translate' and 'scale' to flip horizontally
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, size.width, size.height);

    var dataURL = canvas.toDataURL();
    var blob = $.fn.camera.toBlob(dataURL);

    blob.dataURL = dataURL;

    $video.trigger('camera:snapshot', blob);
  };

})(jQuery);
