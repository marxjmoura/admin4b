(function ($) {

  $.fn.asInput = function () {
    return this.each(function () {
      var $wrapper = $(this);
      var $input = $wrapper.find('input');

      var updateState = function () {
        $wrapper.toggleClass('disabled', $input.is('[disabled]'));
        $wrapper.toggleClass('readonly', $input.is('[readonly]'));
      };

      $wrapper.on('click', function () {
        $input.focus();
      });

      $input
        .on('focus', function () {
          $wrapper.addClass('focus');
        })
        .on('blur', function () {
          $wrapper.removeClass('focus');
        })
        .observe(updateState);

      updateState();
    });
  };

})(jQuery);
