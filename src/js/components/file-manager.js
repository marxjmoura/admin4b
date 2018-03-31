(function ($) {

  $.fn.fileManager = function () {
    return this.each(function () {
      var $element = $(this);
      var $input = $('<input/>').attr('type', 'file');

      $input.on('change', function () {
        var file = $input.get(0).files[0];

        if (file) {
          $.fn.fileManager.validate(file, $element);

          $.fn.fileManager.read(file, function () {
            $element.trigger('file:change', file);
          });
        }
      });

      $element.on('click', function () {
        $input.trigger('click');
      });
    });
  };

})(jQuery);
