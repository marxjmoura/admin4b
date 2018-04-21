(function ($) {

  $.fn.calendar.change = function (date) {
    var $modalCalendar = $(this);

    $modalCalendar.prop('date', date);

    $.fn.calendar.query.apply($modalCalendar, [date]);

    $modalCalendar.trigger('calendar:change', date);
  };

})(jQuery);
