(function ($) {

  $.fn.fileManager.validate = function (file, $settings) {
    var maxsize = $settings.attr('data-maxsize');
    var type = $settings.attr('data-type');

    file.errors = [];

    if (!$.fn.fileManager.validate.maxsize(file, maxsize)) {
      file.errors.push('maxsize');
    }

    if (!$.fn.fileManager.validate.type(file, type)) {
      file.errors.push('type');
    }
  };

})(jQuery);
