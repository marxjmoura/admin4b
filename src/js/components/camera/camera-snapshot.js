(function ($) {

  $.fn.camera.snapshot = function (options) {
    var $video = $(this);

    if (!$video.prop('playing')) {
      return;
    }

    var video = $video.get(0);

    options = options || {};
    options.width = isNaN(options.width) ? 0 : Number(options.width);
    options.height = isNaN(options.height) ? 0 : Number(options.height);

    var canvas = document.createElement('canvas');
    canvas.width = options.width;
    canvas.height = options.height;

    var context = canvas.getContext('2d');
    context.translate(options.width, 0); // 'translate' and 'scale' to flip horizontally
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, options.width, options.height);

    var dataURL = canvas.toDataURL();
    var blob = $.fn.camera.toBlob(dataURL);

    blob.dataURL = dataURL;

    $video.trigger('camera:snapshot', blob);
  };

})(jQuery);
