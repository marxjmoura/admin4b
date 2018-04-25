(function ($) {

  $.fn.suggestion.refresh = function () {
    var $input = $(this);
    var $suggestion = $input.closest('.input-suggestion');
    var $list = $suggestion.find('.input-suggestion-list');
    var $items = $list.find('.list-group.items').hide();
    var $empty = $list.find('.list-group.empty').hide();
    var $loading = $list.find('.list-group.loading').hide();

    if (!$(this).is('[data-async]')) return;

    $.fn.suggestion.change.apply(this);

    if ($items.children().length) {
      $items.show();
    } else {
      $empty.show();
    }

    $loading.hide();
  };

})(jQuery);
