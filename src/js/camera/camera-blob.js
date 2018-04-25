(function ($) {

  $.fn.camera.toBlob = function (dataURL) {
    var byteString;

    if (dataURL.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURL.split(',')[1]);
    } else {
      byteString = unescape(dataURL.split(',')[1]);
    }

    var mimeType = dataURL.split(',')[0].split(':')[1].split(';')[0];
    var uintArray = new Uint8Array(byteString.length);

    for (var i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([uintArray], { type: mimeType });
  };

})(jQuery);
