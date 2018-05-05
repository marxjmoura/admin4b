(function ($) {

  $.fn.suggestion.change = function () {
    var $input = $(this);
    var $suggestion = $input.closest('.input-suggestion');
    var $list = $suggestion.find('.input-suggestion-list');
    var $items = $list.find('.list-group.items').children();

    var changeTo = function (selectedItem) {
      $input.val($.fn.suggestion.textOf(selectedItem));
      $input.trigger('suggestion:change', selectedItem);
    };

    $items.on('click', function () {
      $suggestion.removeClass('open');
      changeTo(this);
    });

    $input
      .on('keypress', function (e) {
        var key = keyboard(e);

        if (key.isEnter) {
          var $ativeItem = $items.filter('.active');

          if ($ativeItem.length) {
            changeTo($ativeItem.filter('.active'));
          }
        }
      });
  };

})(jQuery);
