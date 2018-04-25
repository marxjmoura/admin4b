(function ($) {

  $.fn.fileManager.type = function (file, type) {
    if (!type) return true;

    var pattern = '^' + type.replaceAll(',', '|') + '$';
    return new RegExp(pattern).test(file.type);
  };

})(jQuery);
