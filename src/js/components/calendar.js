(function ($) {

  $.fn.calendar = function (event, date) {
    var $modalCalendar = $(this);

    if (event === 'date' && !date) {
      return $modalCalendar.prop('date');
    }

    if (event === 'query:date' && !date) {
      return $modalCalendar.prop('query');
    }

    return this.each(function () {
      date = date instanceof Date ? date : $modalCalendar.prop('query') || new Date();
      date.setHours(0, 0, 0, 0);

      switch (event) {
        case 'date': $.fn.calendar.change.apply(this, [date]); break;
        case 'query:date': $.fn.calendar.query.apply(this, [date]); break;
        case 'query:nextMonth': $.fn.calendar.query.apply(this, [date.addMonths(1)]); break;
        case 'query:nextYear': $.fn.calendar.query.apply(this, [date.addYears(1)]); break;
        case 'query:previousMonth': $.fn.calendar.query.apply(this, [date.addMonths(-1)]); break;
        case 'query:previousYear': $.fn.calendar.query.apply(this, [date.addYears(-1)]); break;
        default: $.fn.calendar.modal.apply(this, [date]); break;
      }
    });
  };

})(jQuery);
