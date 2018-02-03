(function () {
  $.fn.inputSuggestion = function () {
    return this.each(function () {
      var $input = $(this);
      var $suggestion = $input.closest('.input-suggestion');
      var $list = $suggestion.find('.input-suggestion-list');
      var $items = $list.find($input.attr('data-item')).parent();
      var $isEmpty = $list.find($input.attr('data-empty')).hide();
      var event = $input.attr('data-event') || 'focus';
      var detachedItems = [];

      function textOf($item) {
        if ($input.is('[data-text]')) {
          $item = $item.find($input.attr('data-text'));
        }

        return $item.text().trim();
      }

      function search() {
        $items.children().removeClass('active');
        $suggestion.addClass('open');

        detachedItems.forEach(function ($item) {
          var $prev = $item.data('prev');

          if ($prev.length) {
            $item.insertAfter($prev);
          } else {
            $items.prepend($item);
          }
        });

        detachedItems = [];

        $items.children().each(function () {
          var $item = $(this);

          if ($item.is($input.attr('data-item')) && !textOf($item).contains($input.val())) {
            detachedItems.push($item);
            $item.data('prev', $item.prev());
          }
        });

        detachedItems.forEach(function ($item) {
          $item.detach();
        });

        if ($items.children($input.attr('data-item')).length) {
          $isEmpty.hide();
        } else {
          $isEmpty.show();
        }
      }

      $input.on('keydown', function (e) {
        var key = e.keyCode || e.which;
        var keyPressed = keyboard(key);

        if (keyPressed.isArrowUp() || keyPressed.isArrowDown()) {
          e.preventDefault();

          if (!$suggestion.is('.open')) {
            search();
            return;
          }

          var $currentItem = $items.find('.active');

          if (!$currentItem.length) {
            $items.children($input.attr('data-item')).eq(0).addClass('active');
            return;
          }

          if (keyPressed.isArrowDown()) {
            var $nextItem = $currentItem.next();

            if ($nextItem.is($input.attr('data-item'))) {
              $currentItem.removeClass('active');
              $nextItem.addClass('active');
            }
          }

          if (keyPressed.isArrowUp()) {
            var $previousItem = $currentItem.prev();

            if ($previousItem.is($input.attr('data-item'))) {
              $currentItem.removeClass('active');
              $previousItem.addClass('active');
            }
          }
        }
      });

      $input.on('keypress', function (e) {
        var key = e.keyCode || e.which;
        var keyPressed = keyboard(key);

        if (keyPressed.isEnter()) {
          if ($items.children('.active').length) {
            $items.find('.active').trigger('click');
          }
        }
      });

      $input.on('keyup', function (e) {
        var key = e.keyCode || e.which;
        var keyPressed = keyboard(key);

        if (keyPressed.isEscape()) {
          $suggestion.removeClass('open');
        }
      });

      $input.on(event, function () {
        search();
      })
      .on('input-suggestion:load', function() {
        $items.children().on('click', function () {
          $input.val(textOf($(this)));
          $input.trigger('input-suggestion:change', this);
          $suggestion.removeClass('open');
        });
      });

      $suggestion.onFocusOut(function () {
        $suggestion.removeClass('open');
      });

      $input.trigger('input-suggestion:load');
    });
  };
})();
