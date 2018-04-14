var $calendar = $('#calendar');
var $btnApplyDate = $('#btnApplyDate')

$calendar.on('show.bs.modal', function (e) {
  var $formControl = $(e.relatedTarget)
    .closest('.form-group')
    .find('.form-control');

  $btnApplyDate.prop('target', $formControl);
  $calendar.calendar('date', $formControl.prop('date') || new Date());
});

$btnApplyDate.on('click', function () {
  var $target = $btnApplyDate.prop('target');
  var date = $calendar.calendar('date');
  var formattedDate = moment(date).format('dddd, MMMM D, YYYY');

  $target.prop('date', date).text(formattedDate);
});
