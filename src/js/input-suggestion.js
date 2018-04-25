(function ($) {

  var init = function () {
    if ($(this).data('suggestion:initialized')) return;

    $.fn.suggestion.select.apply(this);
    $.fn.suggestion.change.apply(this);

    if ($(this).is('[data-async]')) {
      $.fn.suggestion.async.apply(this);
    } else {
      $.fn.suggestion.static.apply(this);
    }

    $(this).data('suggestion:initialized', true);
  };

  $.fn.suggestion = function (event) {
    return this.each(function () {
      init.apply(this);

      if (event === 'refresh') {
        $.fn.suggestion.refresh.apply(this);
      }
    });
  };

})(jQuery);
