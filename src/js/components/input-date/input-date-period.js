(function ($) {

  $.fn.inputDate.period = function (year, month) {
    var firstDateInMonth = new Date(year, month, 1);
    var lastDateInMonth = new Date(year, month, new Date(year, month + 1, 0).getDate());

    var firstDateInCalendar = new Date(firstDateInMonth);
    firstDateInCalendar.setDate(firstDateInMonth.getDate() - firstDateInMonth.getDay());

    var lastDateInCalendar = new Date(lastDateInMonth);
    lastDateInCalendar.setDate(lastDateInMonth.getDate() + (6 - lastDateInMonth.getDay()));

    return {
      firstDateInMonth: firstDateInMonth,
      lastDateInMonth: lastDateInMonth,
      firstDateInCalendar: firstDateInCalendar,
      lastDateInCalendar: lastDateInCalendar
    };
  };

})(jQuery);
