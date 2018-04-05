(function ($) {

  $.fn.inputDate = function () {
    return this.each(function () {
      var period = $.fn.inputDate.period(2018, 3);
      var $calendar = $('#calendar');

      $calendar.append($('<tr>')
        .append($('<th>').text('Su'))
        .append($('<th>').text('Mo'))
        .append($('<th>').text('Tu'))
        .append($('<th>').text('We'))
        .append($('<th>').text('Th'))
        .append($('<th>').text('Fr'))
        .append($('<th>').text('Sa'))
      );

      var today = new Date(2018, 3, 2);
      var date = period.firstDateInCalendar;

      while (date <= period.lastDateInCalendar) {
        var $tr = $('<tr>');

        for (var weekDay = 0; weekDay < 7; weekDay++) {
          var $td = $('<td>');

          $tr.append($td);

          if (date.getMonth() === period.firstDateInMonth.getMonth()) {
            $td.append($('<a>')
              .attr('href', '#')
              .prop('date', date)
              .toggleClass('today', date.getTime() === today.getTime())
              .text(date.getDate())
            );
          } else {
            $td.text(date.getDate()).addClass('disabled');
          }

          date = date.addDays(1);
        }

        $calendar.append($tr);
      }
    });
  };

})(jQuery);
