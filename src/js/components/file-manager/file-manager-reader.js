(function ($) {

  $.fn.fileManager.read = function (file, callback) {
    var reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function (e) {
      file.dataURL = e.target.result;
      callback();
    };
  };

})(jQuery);
