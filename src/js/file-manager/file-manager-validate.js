(function ($) {

  $.fn.fileManager.validate = function (file, $settings) {
    var maxsize = $settings.attr('data-maxsize');
    var type = $settings.attr('data-type');

    file.errors = [];

    if (!$.fn.fileManager.maxsize(file, maxsize)) {
      file.errors.push('maxsize');
    }

    if (!$.fn.fileManager.type(file, type)) {
      file.errors.push('type');
    }
  };

})(jQuery);
