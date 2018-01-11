(function () {
  $.fn.inputSuggestion = function () {
    return this.each(function () {
      var $input = $(this);
      var $suggestion = $input.closest('.input-suggestion');
      var $suggestionList = $suggestion.find('.input-suggestion-list');
      var $itemsParent = $suggestionList.find($suggestionList.attr('data-item')).parent();
      var $isEmpty = $suggestionList.find($suggestionList.attr('data-empty')).hide();
      var event = $input.attr('data-event') || 'focus';
      var detachedItems = [];

      function textOf($item) {
        if ($suggestionList.is('[data-text]')) {
          $item = $item.find($suggestionList.attr('data-text'));
        }

        return $item.text().trim();
      }

      function search() {
        $itemsParent.children().removeClass('active');
        $suggestion.addClass('open');

        detachedItems.forEach(function ($item) {
          var $prev = $item.data('prev');

          if ($prev.length) {
            $item.insertAfter($prev);
          } else {
            $itemsParent.prepend($item);
          }
        });

        detachedItems = [];

        $itemsParent.children().each(function () {
          var $item = $(this);

          if ($item.is($suggestionList.attr('data-item')) && !textOf($item).contains($input.val())) {
            detachedItems.push($item);
            $item.data('prev', $item.prev());
          }
        });

        detachedItems.forEach(function ($item) {
          $item.detach();
        });

        if ($itemsParent.children($suggestionList.attr('data-item')).length) {
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

          var $currentItem = $itemsParent.find('.active');

          if (!$currentItem.length) {
            $itemsParent.children($suggestionList.attr('data-item')).eq(0).addClass('active');
            return;
          }

          if (keyPressed.isArrowDown()) {
            var $nextItem = $currentItem.next();

            if ($nextItem.is($suggestionList.attr('data-item'))) {
              $currentItem.removeClass('active');
              $nextItem.addClass('active');
            }
          }

          if (keyPressed.isArrowUp()) {
            var $previousItem = $currentItem.prev();

            if ($previousItem.is($suggestionList.attr('data-item'))) {
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
          if ($itemsParent.children('.active').length) {
            $itemsParent.find('.active').trigger('click');
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
        $itemsParent.children().on('click', function () {
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
