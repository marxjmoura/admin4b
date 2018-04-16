(function ($) {

  $.fn.calendar.query = function (date) {
    var $modalCalendar = $(this);
    var $table = $modalCalendar.find('.table-calendar');
    var $tbody = $('<tbody>');
    var period = $.fn.calendar.period(date.getFullYear(), date.getMonth());
    var currentDate = period.firstDate;

    while (currentDate <= period.lastDate) {
      var $tr = $('<tr>');

      for (var weekDay = 0; weekDay < 7; weekDay++) {
        var $td = $('<td>');
        var calendarEach = $.Event('calendar:each');

        if (currentDate.getMonth() === period.firstDateInMonth.getMonth()) {
          var $a = $('<a>')
            .attr('href', '#')
            .prop('date', currentDate)
            .text(currentDate.getDate())
            .on('click', function (e) {
              $.fn.calendar.change.apply($modalCalendar, [$(this).prop('date')]);
              e.preventDefault();
            });

          calendarEach.relatedTarget = $a.get(0);

          $td.append($a);
        } else {
          $td.text(currentDate.getDate());
        }

        $tr.append($td);
        $modalCalendar.trigger(calendarEach, currentDate);

        currentDate = currentDate.addDays(1);
      }

      $tbody.append($tr);
    }

    $table.find('tbody').remove();
    $table.append($tbody);

    $modalCalendar.prop('query', date).trigger('calendar:query', date)
  };

})(jQuery);
