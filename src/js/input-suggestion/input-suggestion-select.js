(function ($) {

  $.fn.suggestion.select = function () {
    var $input = $(this);
    var $suggestion = $input.closest('.input-suggestion');
    var $list = $suggestion.find('.input-suggestion-list');
    var $items = $list.find('.list-group.items');

    var show = function () {
      if ($suggestion.is('.open')) return;

      $items.children().removeClass('active');
      $suggestion.addClass('open');
      $input.trigger('suggestion:show');
    };

    var hide = function () {
      if (!$suggestion.is('.open')) return;

      $suggestion.removeClass('open');
      $input.trigger('suggestion:hide');
    };

    $suggestion.onFocusOut(hide);

    $input
      .on('input', show)
      .on('keyup', function (e) {
        var key = e.keyCode || e.which;
        var keyPressed = keyboard(key);

        if (keyPressed.isEscape) {
          hide();
        }
      })
      .on('keydown', function (e) {
        var key = e.keyCode || e.which;
        var keyPressed = keyboard(key);

        if (keyPressed.isArrowUp || keyPressed.isArrowDown) {
          e.preventDefault();

          if (!$suggestion.is('.open')) {
            show();
            return;
          }

          var $currentItem = $items.children('.active');

          if (keyPressed.isArrowDown) {
            if ($currentItem.is(':last-child')) {
              return;
            }

            if ($currentItem.length) {
              $currentItem.removeClass('active');
              $currentItem.next().addClass('active');
            } else {
              $items.children().eq(0).addClass('active');
            }
          }

          if (keyPressed.isArrowUp) {
            if ($currentItem.is(':first-child')) {
              return;
            }

            $currentItem.removeClass('active');
            $currentItem.prev().addClass('active');
          }
        }
      })
      .on('suggestion:change', hide);
  };

})(jQuery);
