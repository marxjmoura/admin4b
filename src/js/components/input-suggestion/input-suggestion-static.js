(function ($) {

  $.fn.suggestion.static = function () {
    var $input = $(this);
    var $suggestion = $input.closest('.input-suggestion');
    var $list = $suggestion.find('.input-suggestion-list');
    var $empty = $list.find('.list-group.empty').hide();
    var $itemsGroup = $list.find('.list-group.items');
    var $items = $itemsGroup.children();
    var detachedItems = [];

    var search = function () {
      $items.removeClass('active');

      detachedItems.forEach(function ($item) {
        var $prev = $item.data('prev');

        if ($prev.length) {
          $item.insertAfter($prev);
        } else {
          $itemsGroup.prepend($item);
        }
      });

      detachedItems = [];

      $items.each(function () {
        var $item = $(this);
        var itemText = $.fn.suggestion.textOf($item);

        if (!itemText.contains($input.val())) {
          detachedItems.push($item);
          $item.data('prev', $item.prev());
        }
      });

      detachedItems.forEach(function ($item) {
        $item.detach();
      });

      if ($itemsGroup.children().length) {
        $empty.hide();
        $itemsGroup.show();
      } else {
        $itemsGroup.hide();
        $empty.show();
      }
    };

    $input
      .on('input', search)
      .on('suggestion:show', search);
  };

})(jQuery);
