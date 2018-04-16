(function ($) {

  $.fn.calendar.period = function (year, month) {
    var firstDateInMonth = new Date(year, month, 1);
    var lastDateInMonth = new Date(year, month + 1, 0);

    var firstDate = new Date(firstDateInMonth);
    firstDate.setDate(firstDateInMonth.getDate() - firstDateInMonth.getDay());

    var lastDate = new Date(lastDateInMonth);
    lastDate.setDate(lastDateInMonth.getDate() + (6 - lastDateInMonth.getDay()));

    return {
      firstDateInMonth: firstDateInMonth,
      lastDateInMonth: lastDateInMonth,
      firstDate: firstDate,
      lastDate: lastDate
    };
  };

})(jQuery);
