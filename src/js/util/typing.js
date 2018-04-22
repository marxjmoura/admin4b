(function ($) {

  var delay = 700;

  $.fn.typing = function () {
    return this.each(function () {
      var $element = $(this);
      var timeout = null;

      $element.on('input', function () {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          $element.trigger('input:delay');
        }, delay);
      });
    });
  };

})(jQuery);
