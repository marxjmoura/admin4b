(function ($) {

  $.fn.suggestion.async = function () {
    var $input = $(this);
    var $suggestion = $input.closest('.input-suggestion');
    var $list = $suggestion.find('.input-suggestion-list');
    var $items = $list.find('.list-group.items').hide();
    var $empty = $list.find('.list-group.empty').hide();
    var $loading = $list.find('.list-group.loading').hide();

    $input
      .on('input', function () {
        $loading.show();
        $empty.hide();
        $items.hide();
      })
      .on('input:delay suggestion:show', function () {
        $input.trigger('suggestion:search');
      });
  };

})(jQuery);
