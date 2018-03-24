(function ($) {

  $.fn.fileManager = function () {
    return this.each(function () {
      var $element = $(this);
      var $input = $('<input/>').attr('type', 'file');

      $input.on('change', function () {
        var file = $input.get(0).files[0];

        file.$errors = $.fn.fileManager.validate($element, file);

        $.fn.fileManager.read(file, function () {
          $element.trigger('change:file', file);
        });
      });

      $element.on('click', function () {
        $input.trigger('click');
      });
    });
  };

})(jQuery);
