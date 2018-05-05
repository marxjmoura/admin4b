(function ($) {

  $.fn.calendar.modal = function (date) {
    var $modalCalendar = $(this);
    var $modalHeader = $modalCalendar.find('.modal-header');
    var $modalBody = $modalCalendar.find('.modal-body');
    var $dropdownMonths = $modalHeader.find('.dropdown-toggle');
    var $months = $modalHeader.find('.dropdown-menu');
    var $previousMonth = $modalHeader.find('[data-calendar-month=previous]');
    var $nextMonth = $modalHeader.find('[data-calendar-month=next]');
    var $year = $modalHeader.find('.form-control');
    var $goToToday = $modalBody.find('[data-calendar-link=today]');
    var $goToSelected = $modalBody.find('[data-calendar-link=selected]');

    $modalCalendar.on('calendar:each', function (e, date) {
      var selectedDate = $modalCalendar.calendar('date');
      var today = new Date();
      today.setHours(0, 0, 0, 0);

      $(e.relatedTarget)
        .toggleClass('active', !!selectedDate && date.getTime() === selectedDate.getTime())
        .toggleClass('today', date.getTime() === today.getTime())
        .toggleClass('sunday', date.getDay() === 0);
    });

    $modalCalendar.on('calendar:query', function (e, date) {
      var month = date.getMonth();
      var $month = $($months.find('a').get(month));

      $dropdownMonths.prop('month', date.getMonth()).text($month.text());
      $year.val(date.getFullYear());
    });

    $months.find('a').on('click', function (e) {
      var year = Number($year.val());
      var month = Number($(this).attr('data-calendar-month'));

      $modalCalendar.calendar('query:date', new Date(year, month, 1));

      e.preventDefault();
    });

    $nextMonth.on('click', function () {
      $modalCalendar.calendar('query:nextMonth');
    });

    $previousMonth.on('click', function () {
      $modalCalendar.calendar('query:previousMonth');
    });

    $goToToday.on('click', function () {
      $modalCalendar.calendar('query:date', new Date());
    });

    $goToSelected.on('click', function () {
      var date = $modalCalendar.calendar('date');
      $modalCalendar.calendar('query:date', date);
    });

    $year
      .on('keydown', function (e) {
        var key = keyboard(e);

        if (key.isNavigation || key.isCommand || key.isSpecial || key.isFunction) {
          return;
        }

        if (!key.isNumber && !key.isCtrlHeld) {
          e.preventDefault();
        }

        // maxlength not working for input[type=number] in Chrome or Firefox
        if (key.isNumber && $year.val().length >= 4) {
          e.preventDefault();
        }
      })
      .on('input', function () {
        var val = $year.val();

        if (/^\d{4}$/.test(val)) {
          var year = Number(val);
          var month = Number($dropdownMonths.prop('month'));

          $modalCalendar.calendar('query:date', new Date(year, month, 1));
        }
      });
  };

})(jQuery);
