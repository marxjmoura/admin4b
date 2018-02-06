(function ($) {

  $.fn.suggestion.textOf = function (item) {
    var $item = $(item);
    var $input = $item.closest('.input-suggestion').find('input');

    if ($input.is('[data-text]')) {
      $item = $item.find($input.attr('data-text'));
    }

    return $item.text().trim();
  };

})(jQuery);
